---
id: kubernetes
title: Kubernetes
sidebar_label: Kubernetes
custom_edit_url: false
description: Kubernetes
keywords:
  - canarytrace
  - elaticsearch
  - kibana
  - cloud
  - git
---

> ### What you’ll learn
- What are the recommendation on resources requirements

Canarytrace is designed for use in Kubernetes and this has many advantages:

- Canarytrace isn't testing framework, but complete test stack with additional components.
- Designed for pattern 1:1:1 (= 1 monitor script, 1 Canarytrace runner, 1 instance of a browser) - due to strict isolation and predictable resource allocation for each run, the results are credible and comparable.
- Many tasks are delegated to a lower level, on Kubernetes. It's a better approach than to solve all tasks on the testing framework level. Each Canarytrace component has its own responsibility. E.g.
  - Canarytrace runner (WDIO + services) only loads, runs of test scripts and live reporting
  - [Elasticsearch stack](https://www.elastic.co/elastic-stack) for storing all data from Canarytrace runner and such as engine for agregate data for test report, backups, trends etc.
  - [Beats](https://www.elastic.co/beats/) are small datashippers and we use Beats for collect all logs from our docker containers.
  - [Kibana](https://www.elastic.co/kibana) for data analysis and visualizations from Canarytrace runner, for the preparation of a test report in many forms e.g. report for testers, architect, devops or test manager.
  - Canarytrace Listener for automatically analyzing many types of data scanned from a browser, alerting by thresholds to many services such as slack or email, simplification of the test result for integration with other tools such as Zabbix.
  - Kubernetes parallelizes, guarantees, manages and isolates each instance of the Canarytrace runner. Every instance of Canarytrace starts on the same conditions. This is an advantage because the tests don't affect each other.
  - We no longer need tools like Jenkins or Selenium cluster.
  - Thanks to Kubernetes you are not vendor locked and at the same time Canarytrace can be run on AWS, DigitalOcean, Azure Cloud, GCE or on your VPS.

## Required resources for one instance

Requirements on resource will be higher if you will be perform a performance audit. Without performance audit will be perform availability check and download information about network trafic in a browser.

> ### Recommended requirements for performance audit
> - Loading web pages into a modern browser is not an easy task. The measurement results may be skewed by insufficient resources and therefore the following settings are recommended for performance audit.
> - Minimum 2 dedicated cores (4 recommended)
> - Minimum 2GB RAM (4-8GB recommended)

- One instance = one monitor script
- [Resource units in Kubernetes](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes)

| Resources | CPU requests | CPU limits | Memory requests | Memory limits |
|-|-|-|-|-|
| Canarytrace Runner | `200m` | `300m` | `300Mi` | `400Mi` |
| Browser | `2000m` | `4000m` | `4000Mi` | `4000Mi` |
| Total | `2200m` | `4300m` | `4300Mi` | `4400Mi` |


**Check resource quota on all nodes**

```bash
kubectl get nodes --no-headers | awk '{print $1}' | xargs -I {} sh -c 'echo {}; kubectl describe node {} | grep Allocated -A 5 | grep -ve Event -ve Allocated -ve percent -ve -- ; echo'

# output
canary-3bcb1
  Resource           Requests      Limits
  cpu                2302m (57%)   2102m (52%)
  memory             3415Mi (51%)  3840Mi (57%)
```

## How to get a deployment scripts

All deployment scripts are distributed with [Canarytrace Professional](/docs/why/edition#canarytrace-professional) and [Canarytrace Smoke Pro](/docs/why/edition#canarytrace-smoke-pro) docker images

```bash
# Download deployments scripts from docker image
docker run --rm -it --entrypoint /bin/mv -v $(pwd):/deployments quay.io/canarytrace/smoke-pro:3.0.2 /opt/canary/deployments/ /deployments/

# deployments folder is transferred from the docker image to localhost
ᐰ ls -lah deployments/
total 8
drwxr-xr-x@ 6 rdpanek  staff   192B  2 srp 19:43 .
drwxr-xr-x  3 rdpanek  staff    96B  4 srp 00:07 ..
-rw-r--r--  1 rdpanek  staff   2,3K  2 srp 19:43 README.md
drwxr-xr-x@ 3 rdpanek  staff    96B  6 čvc 18:47 beats
drwxr-xr-x@ 7 rdpanek  staff   224B  2 srp 19:43 k8s
drwxr-xr-x@ 6 rdpanek  staff   192B  2 srp 11:06 tf-k8s

```

- `beats` contains [filebeat](https://www.elastic.co/beats/filebeat) deployment scripts for backup live logging stdout of all docker images of Canarytrace

- `k8s` contains Kubernetes deployment scripts of Canarytrace

- `tf-k8s` is [Terraform](https://www.terraform.io/) demo script for create Kubernetes cluster on [DigitalOcean](https://www.digitalocean.com/)

> - [Elasticsearch & Kibana](/docs/guides/elasticsearch) and [Canarytrace Installer](/docs/features/installer) are required for successful Canarytrace startup


## Deploy Canarytrace Smoke

[Canarytrace Smoke](/docs) is a free edition and you can use it for study of web performance testing

```yaml title="CronJob"
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: smoke-web
spec:
  concurrencyPolicy: Replace
  failedJobsHistoryLimit: 2
  schedule: "*/3 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: canary
            image: quay.io/canarytrace/smoke-pro
            env:
            - name: BASE_URL
              value: "https://www.tesla.com/;http://canarytrace.com/"
            - name: SMOKE
              value: allow
            - name: ELASTIC_CLUSTER
              value: "https://XXX.europe-west3.gcp.cloud.es.io:9243"
            - name: ELASTIC_HTTP_AUTH
              value: "elastic:XXX"
            - name: AT_DRIVER_HOST_NAME
              value: "localhost"
            - name: PT_AUDIT
              value: allow
            - name: PT_AUDIT_THROTTLING
              value: 'desktopDense4G'
            resources:
              requests:
                memory: "300Mi"
                cpu: "200m"
              limits:
                memory: "400Mi"
                cpu: "300m"
            imagePullPolicy: "IfNotPresent"
          - name: selenium
            image: selenium/standalone-chrome:3.141.59-20200730
            ports:
              - containerPort: 4444
            resources:
              requests:
                memory: "4000Mi"
                cpu: "2000m"
              limits:
                memory: "6000Mi"
                cpu: "4000m"
            imagePullPolicy: "IfNotPresent"
            volumeMounts:
              - mountPath: "/dev/shm"
                name: "dshm"
            livenessProbe:
              httpGet:
                path: /wd/hub
                port: 4444
              initialDelaySeconds: 10
              timeoutSeconds: 5
            readinessProbe:
              httpGet:
                path: /wd/hub
                port: 4444
              initialDelaySeconds: 10
              timeoutSeconds: 5
          restartPolicy: "Never"
          volumes:
            - name: "dshm"
              emptyDir:
                medium: "Memory"
          imagePullSecrets:
            - name: canarytrace-labs-pull-secret
```

## Prepare and deploy Canarytrace via Terraform

1. Install [Terraform CLI](https://learn.hashicorp.com/tutorials/terraform/install-cli)
2. Deploy Kubernetes objects via Terraform

```bash
ᐰ cd deployments/tf-k8s/
terraform init
terraform apply
```

## Prepare and manually deploy Canarytrace to Kubernetes

```bash
ᐰ ls -lah k8s/
total 40
drwxr-xr-x  7 rdpanek  staff   224B  3 srp 18:50 .
drwxr-xr-x  6 rdpanek  staff   192B  3 srp 18:50 ..
-rw-r--r--  1 rdpanek  staff   568B  3 srp 18:50 config-map.yml
-rw-r--r--  1 rdpanek  staff    60B  3 srp 18:50 namespace.yaml
-rw-r--r--  1 rdpanek  staff   203B  3 srp 18:50 secret-aws.yml
-rw-r--r--  1 rdpanek  staff   127B  3 srp 18:50 secret-elastic.yml
-rw-r--r--  1 rdpanek  staff   113B  3 srp 18:50 secret-user.yml
```

**namespace.yaml**
- first step is create namespace `canarytrace`

```bash
kubectl create -f namespace.yaml
```

**config-map.yaml**
- setup path to git repository, WDIO log.level, wait.for.timeout for all waitFor* methods and allow the use of the services

```bash
pt.audit: "allow"
coverage.audit: "allow"
response.intercept: "allow"
request.intercept: "allow"
console.intercept: "allow"
memory.intercept: "allow"
performance.entries.intercept: "allow"
```

and deploy

```bash
kubectl -n canarytrace create -f config-map.yml
```

**secret-aws.yml**

- setup for AWS S3 such as access.key, secret.key, region and bucket

and deploy

```bash
kubectl -n canarytrace create -f secret-aws.yml
```

**secret-elastic.yml**

- setup for live logging to elasticsearch such as cluster and http.auth

and deploy

```bash
kubectl -n canarytrace create -f secret-elastic.yml
```

**secret-user.yml**

- setup USERNAME and PASSWORD for logging to tested application

and deploy

```bash
kubectl -n canarytrace create -f secret-user.yml
```

**Create secret with your id_rsa_no_pass for clone private git repository**

```bash
kubectl -n canarytrace create secret generic secret-github --from-file=ssh-privatekey=/Users/rdpanek/.ssh/id_rsa_no_pass
```

**Deploy CronJob with your monitor script**
```bash
kubectl -n canarytrace create -f https://raw.githubusercontent.com/canarytrace/demo-tests/master/k8s/tesla.yaml
```

Update environment variables of the deployment script with your monitor script

- `image: rdpanek/canarytrace:c.2.9.31` set latest tag of docker image with Canarytrace Professional or use your private docker repository
- set revision of test in your git repository

```bash
- name: GIT_REVISION
  value: "aaa9d40"
```

- set name of test case

```bash
- name: SPEC
  value: "tesla/smoke.js"
```

- set URI of tested application

```bash
- name: BASE_URL
  value: "https://www.tesla.com/"
```

All values for other environment variables are provided via `secret-github`, `secret-elastic`, `secret-aws`, `secret-user`, `canary-config` and `canary-services`


## Filebeat

[Filebeat](/docs/features/filebeat) logging all stdout and stderr streams from all Canarytrace docker containers in your cluster.

> - All data from Filebeat are stored to `filebeat-*` index

### Manually debuging Canarytrace

For manually debuging Canarytrace runner and other components in a docker containers - you can use command line tool [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) for tail stdout and stderr streams from all containers in your Kubernetes cluster or [Lens](https://k8slens.dev/)

```bash title="Get logs from Canarytrace pod from your localhost"
kubectl -n canary logs -f tesla-1597447320-2gg4r -c canary
```
This is easy for learning and maintanance Canarytrace containers, but not but not effective. 

#### Filebeat provides

- Show all logs in a Kibana in real time - access to logos without knowledge with kubectl tool
- Searching events, errors and other strings in a streams
- Filtering by name of docker container 
- Create visualizations from events
- Create alerting from events in a log by conditions

### How to run Filebeat

- [Download deployment script for Filebeat](/docs/guides/kubernetes#how-to-get-a-deployment-scripts) `deployments/beats/filebeat-logging.yaml` from Canarytrace Professional and Canarytrace Smoke Pro docker container
- Edit elasticsearch connection params

```yaml title="deployments/beats/filebeat-logging.yaml"
env:
- name: ELASTICSEARCH_HOST
  value: "https://elasticsearch-host"
- name: ELASTICSEARCH_PORT
  value: "9243"
- name: ELASTICSEARCH_USERNAME
  value: "elastic"
- name: ELASTICSEARCH_PASSWORD
  value: "pass"
```

- Deploy `kubectl apply -f deployments/beats/filebeat-logging.yaml`

**You can check filebeat logs, that it doesn't contain any error messages**

```bash
kubectl -n kube-system get pods

// outpu
...
filebeat-cznq9                    1/1     Running   0          9h
kube-proxy-gjp6p                  1/1     Running   0          12d
```

**Get logs from container with filebeat**

```bash
kubectl -n kube-system logs -f filebeat-cznq9
```

### Filebeat data browsing

- Open your Kibana > Discover and index `filebeat-*`

![Filebeat logs in a Kibana](../../static/docs-img/kibana-filebeat.png)

**Search input**

- `kubernetes.container.name : canary` display stdout and stderr streams from Canarytrace runner docker container.
- `message: "testStepStart: HomePage open"` for display all record which contains this string.

### Filebeat log viewer

> - Kibana contains a built-in log viewer
> - Open your Kibana > Observability > Logs

![Filebeat log viewer](../../static/docs-img/kibana-filebeat-logviewer.png)

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).