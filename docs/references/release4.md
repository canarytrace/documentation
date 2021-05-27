---
id: releases4
title: Canarytrace 4 alpha
custom_edit_url: false
description: Release notes
keywords:
  - canarytrace
  - webdriverio
  - releases
---

> - This page is only for Canarytrace 4 alpha
> - This is a living documentation and will be frequently updated into release Canarytrace 4.1.0
> - Please create an [issue](https://github.com/canarytrace/documentation/issues/new/choose) if you find a mistake, or have any questions, thanks 👍

## What news
---

🚀 **New features**

- Upgrade [Webdriver.IO](https://webdriver.io/) from [v6](https://v6.webdriver.io/) on [v7.5](https://webdriver.io/versions)
- Upgrade Selenium 3 on [Selenium 4](https://github.com/SeleniumHQ/docker-selenium)
- Editions of Canarytrace and Canarytrace Smoke is one docker container. You can switch between them.
- Print more metainformation into elasticsearch indices, e.g. version, edition etc.
- Prepare for implementing [Cypress.io](https://www.cypress.io/)

🐛 **Bug fixes**

- Fix duplicate storage performance entries

## Get started
---
Canarytrace is a dockerized stack for testing and monitoring vitality of web applications. Use a test framework [mocha](https://mochajs.org/) and [Webdriver.IO](https://webdriver.io/) and if you have some test cases for Webdriver.IO, you can run them in Canarytrace. Canarytrace does not change the Webdriver.IO code in any way.

Canarytrace adds features for non-invasive / agent-less monitoring of performance and high availability of web applications, equipment for undistorted and accurate measurements from cloud and without vendor-lock e.g. Kubernetes deployments, live reporting a lot of data from a browser for investigation of performance issues, implements tools such as Lighthouse for performance audit, settings for Elasticsearch and Kibana for the operators, testers or managers.

You can via Webdriver.io monitoring and measurement any web application.

### Editions
---

**Canarytrace** is a Plug’n'Play stack for testing and monitoring your web application from user perspective. Is useful for testing and  monitoring user journeys. E.g. open homepage -> search product -> add product to basket -> buy

**Canarytrace Smoke** is a Plug’n'Play stack and maintenance free stack for test, measure and monitor web application. Is useful for testing and monitoring collection of landing pages.

### Write your first monitor script

If you want monitoring user journey, you must prepare test case / monitoring script in Webdriver.IO. 

Webdriver.IO is a testing framework written in javascript and its installation is very simple.

#### Install and prepare Webdriver.IO

1). Install node.js

- Please use LTS (recommended version) of [Node.js](https://nodejs.org/en/)

2). Install Webdriver.IO

- Prepare package.json `npm init --yes`
- Install Webdriver.IO `npm install @wdio/cli --save`
- For more info: [Getting Started with Webdriver.IO](https://webdriver.io/docs/gettingstarted)

3). Configuration of Webdriver.IO

- run configuration `npx wdio config`

4). Configuration steps
- `Where is your automation backend located? ` = select `On my local machine` and confirm
- `Which framework do you want to use?` = select `mocha` and confirm
- `Do you want to use a compiler?` = select `Babel` and confirm
- `Where are your test specs located?` only confirm
- `Do you want WebdriverIO to autogenerate some test files?` type `y` and confirm
- `Do you want to use page objects` type `n` and confirm
- `Which reporter do you want to use?` = select `spec` and confirm
- `Do you want to add a service to your test setup?` = select `chromedriver` and confirm
- `What is the base url?` only confirm

🎉 Great, Webdriver.IO is ready with including a demo test.

**What was installed?**

```bash
-rw-r--r--    1 rdpanek  staff   204B 27 May 08:54 babel.config.js
drwxr-xr-x  314 rdpanek  staff   9.8K 27 May 08:54 node_modules
-rw-r--r--    1 rdpanek  staff   133K 27 May 08:54 package-lock.json
-rw-r--r--    1 rdpanek  staff   482B 27 May 08:54 package.json
drwxr-xr-x    3 rdpanek  staff    96B 27 May 08:54 test
-rw-r--r--    1 rdpanek  staff    11K 27 May 08:54 wdio.conf.js
```

- `node_modules` dependencies and packages
- `package.json` version of dependencies
- `test` contains our first demo test case
- `wdio.conf.js` configuration

#### Run demo test

- In this same directory run your test `npx wdio run ./wdio.conf.js --spec test/specs/example.e2e.js`

More info on [Webdriver.IO documentation](https://webdriver.io/docs/gettingstarted#set-up)


## Run Canarytrace 4 alpha

Canarytrace is a dockerized stack and is ready for run in a [Kubernetes](https://kubernetes.io/). You can run your test for example in a [Docker compose](https://docs.docker.com/compose/).

### Docker compose

1). Create `docker-compose.yaml` file with this definition

```yaml title="docker-compose.yaml"
version: "3.8"
services:
  chrome:
    image: selenium/standalone-chrome:4.0.0-beta-1-prerelease-20210207
    network_mode: "host"
    volumes:
      - /dev/shm:/dev/shm
  canarytrace:
    image: quay.io/canarytrace/canarytrace:latest
    depends_on:
      - chrome
    network_mode: "host"
    volumes:
      - ./test:/opt/canary/tests
    environment:
      BASE_URL: 'https://the-internet.herokuapp.com/'
      SPEC: 'specs/example.e2e.js'
```

> `./test` is a relative path to your directory with tests.

2). and run via `docker-compose up` command

```
canarytrace_1  |  "spec" Reporter:
canarytrace_1  | ------------------------------------------------------------------
canarytrace_1  | [chrome 88.0.4324.150 linux #0-0] Running: chrome (v88.0.4324.150) on linux
canarytrace_1  | [chrome 88.0.4324.150 linux #0-0] Session ID: 0bcc38ab96d09956d7e3c73f481034fb
canarytrace_1  | [chrome 88.0.4324.150 linux #0-0]
canarytrace_1  | [chrome 88.0.4324.150 linux #0-0] » /tests/specs/example.e2e.js
canarytrace_1  | [chrome 88.0.4324.150 linux #0-0] My Login application
canarytrace_1  | [chrome 88.0.4324.150 linux #0-0]    ✓ should login with valid credentials
canarytrace_1  | [chrome 88.0.4324.150 linux #0-0]
canarytrace_1  | [chrome 88.0.4324.150 linux #0-0] 1 passing (4.9s)
```

### Kubernetes

Canarytrace is designed for run in a Kubernetes. 

1). Create namespace

`kubectl create namespace canarytrace`

2). Deploy your private ssh key to Kubernetes

- Create ssh key withtout passphrase

- Create secret, which will contains your private ssh key
```bash
kubectl -n canarytrace create secret generic secret-github --from-file=ssh-privatekey=/Users/rdpanek/.ssh/id_rsa_no_pass
```

Deployment
```yaml
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: canarytrace
spec:
  concurrencyPolicy: Replace
  failedJobsHistoryLimit: 2
  schedule: "*/2 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: canary
            image: quay.io/canarytrace/canarytrace:latest
            env:
            - name: BASE_URL
              value: "https://the-internet.herokuapp.com/login"
            - name: GIT_REVISION
              value: "fd29508"
            - name: SPEC
              value: "test/specs/example.e2e.js"
            - name: LABELS
              value: "wdio75, demo, smoke"
            - name: EDITION
              value: "canarytrace"
            - name: GIT_REPOSITORY
              value: "git@github.com:canarytrace/wdio75-demo.git"
            - name: GIT_REPOSITORY_HOST
              value: "github.com"
            - name: GIT_REPOSITORY_PORT
              value: "22"
            - name: ELASTIC_CLUSTER
              value: "https://abcdef.eu-central-1.aws.cloud.es.io:9243"
            - name: ELASTIC_HTTP_AUTH
              value: "elastic:SecretPassword"
            resources:
              requests:
                memory: "300Mi"
                cpu: "200m"
              limits:
                memory: "400Mi"
                cpu: "300m"
            imagePullPolicy: "IfNotPresent"
            volumeMounts:
              - mountPath: /secret
                name: secret-github
                readOnly: true
          - name: selenium
            image: selenium/standalone-chrome:4.0.0-beta-1-prerelease-20210207
            ports:
              - containerPort: 4444
            resources:
              requests:
                memory: "2000Mi"
                cpu: "2000m"
              limits:
                memory: "4000Mi"
                cpu: "3000m"
            imagePullPolicy: "IfNotPresent"
            volumeMounts:
              - mountPath: "/dev/shm"
                name: "dshm"
            livenessProbe:
              httpGet:
                path: /status
                port: 4444
              initialDelaySeconds: 10
              timeoutSeconds: 5
            readinessProbe:
              httpGet:
                path: /status
                port: 4444
              initialDelaySeconds: 10
              timeoutSeconds: 5
          restartPolicy: "Never"
          terminationGracePeriodSeconds: 5
          volumes:
            - name: secret-github
              secret:
                secretName: secret-github
            - name: "dshm"
              emptyDir:
                medium: "Memory"
          imagePullSecrets:
            - name: canarytrace-labs-pull-secret

```

**Canarytrace Smoke**

```yaml
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: canarytrace
spec:
  concurrencyPolicy: Replace
  failedJobsHistoryLimit: 2
  schedule: "*/2 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: canary
            image: quay.io/canarytrace/canarytrace:latest
            env:
            - name: BASE_URL
              value: "https://the-internet.herokuapp.com/login"
            - name: LABELS
              value: "wdio75, demo, smoke"
            resources:
              requests:
                memory: "300Mi"
                cpu: "200m"
              limits:
                memory: "400Mi"
                cpu: "300m"
            imagePullPolicy: "IfNotPresent"
          - name: selenium
            image: selenium/standalone-chrome:4.0.0-beta-1-prerelease-20210207
            ports:
              - containerPort: 4444
            resources:
              requests:
                memory: "2000Mi"
                cpu: "2000m"
              limits:
                memory: "4000Mi"
                cpu: "3000m"
            imagePullPolicy: "IfNotPresent"
            volumeMounts:
              - mountPath: "/dev/shm"
                name: "dshm"
            livenessProbe:
              httpGet:
                path: /status
                port: 4444
              initialDelaySeconds: 10
              timeoutSeconds: 5
            readinessProbe:
              httpGet:
                path: /status
                port: 4444
              initialDelaySeconds: 10
              timeoutSeconds: 5
          restartPolicy: "Never"
          terminationGracePeriodSeconds: 5
          volumes:
            - name: "dshm"
              emptyDir:
                medium: "Memory"
          imagePullSecrets:
            - name: canarytrace-labs-pull-secret
```

### CLI

- `USER` - username
- `PASS` - password
- `BASE_URL` - one target URL or collection of urls
- `TC` - test case / monitor script
- `ENGINE` - default `wdio` = Webdriver.IO v7.5 and no need change it
- `LABELS` - optional metainformation, which is stored in the elastic to each record in each index, e.g. `'relesease=7, environment=dev'`

- `ELASTIC_CLUSTER` - e.g. `localhost:9200` if left blank, documents will be printed to stdout.
- `ELASTIC_HTTP_AUTH` - e.g. `username:password`
- `ELASTIC_TIMEOUT` - default is 5000ms
- `ELASTIC_OBSERVABILITY` - use `allow` for print settings of elasticsearch and all requests and responses to stdout
- `INDEX_PREFIX` - default `c.`
- `MIN_PTIME` - Print requests to elasticsearch if is exceeded transactions time. Default min processing time is 300ms

- `EDITION` - Available options `canarytrace` or `smoke`, default is `smoke`
- `ENV_PRINT` - Print all environment variables
- `WAIT_FOR_TIMEOUT` - Timeout limit for all webdriver.io waitFor* commands. Default is 30.000ms
- `AVAILABILITY_CHECK` - use `allow` if you want run check availability of web app before run Canarytrace.
- `LOG_LEVEL` - default `warn`
- `GIT_REPOSITORY`
- `GIT_REPOSITORY_PORT`
- `GIT_REPOSITORY_HOST`
- `GIT_REVISION`