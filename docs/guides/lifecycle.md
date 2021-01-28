---
id: lifecycle
title: Lifecycle
sidebar_label: Lifecycle
custom_edit_url: false
description: Lifecycle
keywords:
  - canarytrace
  - elaticsearch
  - kibana
  - cloud
  - git
---

> ### What you’ll learn
- XXX

### Kubernetes
Canarytrace is encapsulated in a Pod which contains docker containers with Canarytrace runner and a browser. Advantage of this approach is in:

- Test execution is isolated from other test executions. So the tests don't affect each other.

- The browser has fixed resources. So every verifying and measurement in a browser is repeatable and the results are creditable.

- Every test execution is a immutable.

- Kubernetes is possible install it on AWS, DigitalOcean, Azure, GCE or your VPS, so Canarytrace is possible run anywhere and without vendor-lock.

- [Architecture](/docs/guides/architecture) 

- Thanks to approach we don’t need tools as Jenkins and Selenium cluster, because this features is provided by Kubernetes. 

- The parallel test execution also doesn't solve the testing framework, but Kubernetes via increase Canarytrace instances. Every test execution is isolated.

- [Deploy Canarytrace to Kubernetes](/docs/guides/kubernetes)

### CronJob

- The test run is moderated via CronJob, which every three minutes run a the same monitor script in a new Pod. This is known as rotation of test automation.

### Pod

> - [Pods](https://kubernetes.io/docs/concepts/workloads/pods/) are the smallest deployable units of computing that you can create and manage in Kubernetes.

- Pod definition contains two docker containers (Canarytrace runner, Browser) settings e.g. docker images, resources for every docker container, port definitions, environmet variables definitions, [configmaps](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/) and [secrets](https://kubernetes.io/docs/concepts/configuration/secret/) definitions. 
- Pod  is reusable for every test execution.
- Every runned instance of Canarytrace need `one monitor script`, `one Canarytrace runner` and `one instance of a browser` and this is known as **pattern 1:1:1**

<iframe src="https://viewer.diagrams.net/?highlight=0000ff&layers=0&nav=1&title=Lifecycle%20of%20Canarytrace%20Runner%20in%20a%20Docker%20container#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1QSFSGysLL-5sYUZwUdZPaxNAwO5bS8ot%26export%3Ddownload" width="100%" height="500" className="diagramIframe"></iframe>

## Canarytrace runner phases

Each run of Canarytrace runner goes through phases

### Start phase
- Job controller started a new Pod with two docker containers with Canarytrace runner and a Browser. 
- Pod contains environment variables and additional values from configmaps and secrets.

### Prepare phase
- Print all environment variables is useful for debugging. 

> - Some environment variables can contains sensitive values such as username or password. These values is printed to stdout stream and sending to Elasticsearch via filebeat.

- Before run test execution is necessary clone repository with the monitor scripts directly to Canarytrace runner docker container.

### Availability phase

- Next step is availability check destination URI, which is used in monitor script and measure timing connection. This is useful for prepare monitor script and verification of access to the target environment.

> - These values is printed to stdout stream and sending to Elasticsearch via filebeat.

```bash
# example output
2020-08-16T12:06:11.432750909Z time_namelookup:  0.006434
2020-08-16T12:06:11.432808427Z time_connect:  0.008509
2020-08-16T12:06:11.432817141Z time_appconnect:  0.035755
2020-08-16T12:06:11.432833463Z time_pretransfer:  0.037697
2020-08-16T12:06:11.432845272Z time_redirect:  0.000000
2020-08-16T12:06:11.432870408Z time_starttransfer:  0.046680
2020-08-16T12:06:11.432877861Z ----------
2020-08-16T12:06:11.432883714Z time_total:  0.103771
```

- Establishes and authorization connection with elasticsearch.

### Execution phase
- Canarytrace establishes connection with a browser via RPC and WS.
- Loading monitor script via WDIO worker and execute.
- During the running monitoring script is fired events which send data to elasticsearch and some of them is printed to stdout

### Stop phase
- In this phase is docker container with Canarytrace runner killed.

### Filebeat
- Filebeat logs all instances independently.

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).