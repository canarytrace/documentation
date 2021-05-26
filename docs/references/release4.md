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

> - This is a living documentation and will be frequently updated into release Canarytrace 4.1.0
> - Please create an [issue](https://github.com/canarytrace/documentation/issues/new/choose) if you find a mistake, or have any questions, thanks 👍

## What news

🚀 **New features**

- Upgrade [Webdriver.IO](https://webdriver.io/) from [v6](https://v6.webdriver.io/) on [v7.5](https://webdriver.io/versions) 

🐛 **Bug fixes**

## Get started
- what is new a v7.5
- how to install

### Editions

- Canarytrace vs. Canarytrace Smoke

### Webdriver.IO and installation

`npm install @wdio/cli --save`

`npx wdio config`

- `Where is your automation backend located? ` = select `On my local machine` and confirm
- `Which framework do you want to use?` = select `mocha` and confirm
- `Do you want to use a compiler?` = select `Babel` and confirm
- `Where are your test specs located?` only confirm
- `Do you want WebdriverIO to autogenerate some test files?` type `y` and confirm
- `Do you want to use page objects` type `n` and confirm
- `Which reporter do you want to use?` = select `spec` and confirm
- `Do you want to add a service to your test setup?` = select `chromedriver` and confirm
- `What is the base url?` only confirm

and run

`npx wdio run ./wdio.conf.js --spec test/specs/example.e2e.js`

More info on [Webdriver.IO documentation](https://webdriver.io/docs/gettingstarted#set-up)

### Write your first WDIO script

### Run WDIO script


## Run Canarytrace 4 alpha

### Docker compose

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

`docker-compose up`

and result is

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
