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

> - This page cover Canarytrace 4 alpha
> - This is a living documentation and will be frequently updated into release Canarytrace 4.1.0
> - Please create an [issue](https://github.com/canarytrace/documentation/issues/new/choose) if you find a mistake, or have any questions, thanks 👍

## What news
---

🚀 **New features**

- Upgrade [Lighthouse 8](https://developers.google.com/web/tools/lighthouse)
- Upgrade [Webdriver.IO](https://webdriver.io/) from [v6](https://v6.webdriver.io/) on [v7.5](https://webdriver.io/versions)
- Upgrade Selenium 3 on [Selenium 4](https://github.com/SeleniumHQ/docker-selenium)
- Editions of Canarytrace and Canarytrace Smoke is one docker container. You can switch between them.
- Print more metainformation into elasticsearch indices, e.g. version, edition etc.
- Prepare for implementing [Cypress.io](https://www.cypress.io/)

🐛 **Bug fixes**

- Fix duplicate storage performance entries

## Get started
---
Canarytrace is a dockerized stack for testing and monitoring vitality of web applications. Use a test frameworks [mocha](https://mochajs.org/) and [Webdriver.IO](https://webdriver.io/) and if you have some test cases for Webdriver.IO, you can run them in Canarytrace. Canarytrace does not change the Webdriver.IO code in any way.

Canarytrace adds features for non-invasive / agent-less monitoring of performance and high availability of web applications, equipment for undistorted and accurate measurements from cloud and without vendor-lock e.g. Kubernetes deployments, live reporting a lot of data from a browser for investigation of performance issues, implements tools such as Lighthouse for performance audit, settings for Elasticsearch and Kibana for the operators, testers or managers.

You can monitor and measure any web application via Webdriver.io.

### Editions
---

**Canarytrace** is a Plug’n'Play stack for testing and monitoring your web application from user perspective. Is useful for testing and  monitoring of user journeys. E.g. open homepage -> search product -> add product to basket -> buy

**Canarytrace Smoke** is a Plug’n'Play and maintenance free stack for testing, measuring and monitoring of web applications. Is useful for testing and monitoring collection of landing pages.

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

**What is installed?**

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
---

Canarytrace is a dockerized stack and is ready for run in a [Kubernetes](https://kubernetes.io/). You can run your test for example in a [Docker compose](https://docs.docker.com/compose/).

### Docker compose
---

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
      LICENSE: 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX'
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

### Canarytrace in Kubernetes
---

Canarytrace is designed for running in a Kubernetes and we have ready deployment objects.

1). Create namespace

`kubectl create namespace canarytrace`

2). Deploy your private ssh key to Kubernetes

- Create ssh key withtout passphrase via `ssh-keygen`

```bash
ᐰ ssh-keygen -t ed25519 -C "your_email@example.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/rdp/.ssh/id_ed25519): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/rdp/.ssh/id_ed25519.
Your public key has been saved in /Users/rdp/.ssh/id_ed25519.pub.
The key fingerprint is:
SHA256:AxSzKTAVDYfk/lhkP1gjToeyFuNImvDwS8EiRzrZz70 your_email@example.com
The key's randomart image is:
+--[ED25519 256]--+
|  +o===.         |
| * +.o.=         |
|O * * X +        |
|o@ B % B .       |
|o = B = S        |
| . o + . o       |
|  . . E          |
|                 |
|                 |
+----[SHA256]-----+
```

- Upload public key `/Users/rdp/.ssh/id_ed25519.pub` to your Github
- Create secret, which will contains your private ssh key
```bash
kubectl -n canarytrace create secret generic secret-github --from-file=ssh-privatekey=/Users/rdp/.ssh/id_ed25519
```

- Create deployment `kubectl -n canarytrace create -f canarytrace.yaml`

```yaml title="canarytrace.yaml"
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
            - name: LICENSE
              value: "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"
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

### Canarytrace Smoke in Kubernetes
---

For Canarytrace Smoke you don't need any script or ssh keys. Enter only list of landing pages.

- Create deployment `kubectl -n canarytrace create -f canarytrace.yaml`

```yaml title="canarytrace.yaml"
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
            - name: LICENSE
              value: "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"
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

> `canarytrace-labs-pull-secret` is our secret for download docker image with Canarytrace. You can download docker image with Canarytrace and push to your docker repository.

### Environment variables

This ENV are useful for setup Canarytrace behavior, switch edition, setup credentials to repository or elasticsearch etc.
Some ENV have a default value, there's no need to set them.

- `USER` - username used in your test case via `browser.config.username`
- `PASS` - password used in your test case via ``browser.config.password``

Example

```javascript
  it('fill login and password inputs', async () => {
    const userNameElm = await $(userNameInput)
    await userNameElm.waitForClickable({timeoutMsg: 'Username input not exist.'})
    await userNameElm.setValue(browser.config.username);

    const passwordElm = await $(passwordInput)
    await passwordElm.waitForClickable({timeoutMsg: 'Password button not exist.'})
    await passwordElm.setValue(browser.config.password);
  })
```

- `BASE_URL` - one target URL or collection of urls

If you are using Canarytrace edition, add start URL into `BASE_URL` and in test use only `browser.url('/');`

Enter start URL in your deployment script (Kubernetes)
```yaml
- name: BASE_URL
  value: "https://the-internet.herokuapp.com/login"
```
and in your test case use only `/` in [browser.url()](https://webdriver.io/docs/api/browser/url) method
```javascript
  it('open home page', async () => {
    await browser.url('/');
    await expect(browser).toHaveTitle(title, {message: 'Element title not found. The page couldn\'t be loaded in time.'})
  });
```

If you are using Canarytrace Smoke edition, add list of landing pages into `BASE_URL` separated by a semicolon
```yaml
- name: BASE_URL
  value: "https://canarytrace.com/;https://canarytrace.com/docs/;https://canarytrace.com/docs/support/contactus"
```

- `ENGINE` - default `wdio` for Webdriver.IO v7.5 and no need change it
- `LABELS` - optional metainformation, which is stored in the elastic to each record in each index, e.g. `'relesease=7, environment=dev'`

- `ELASTIC_CLUSTER` - e.g. `localhost:9200` if left blank, documents will be printed to stdout.
- `ELASTIC_HTTP_AUTH` - e.g. `username:password`
- `ELASTIC_TIMEOUT` - default is 5000ms
- `ELASTIC_OBSERVABILITY` - use `allow` for print settings of elasticsearch and all requests and responses to stdout
- `INDEX_PREFIX` - default `c.`
- `MIN_PTIME` - Print requests to elasticsearch if is exceeded transactions time. Default min processing time is 300ms

- `EDITION` - Available options `canarytrace` or `smoke`, default is `smoke`
- `ENV_PRINT` - Print all environment variables
- `WAIT_FOR_TIMEOUT` - Timeout limit for all [webdriver.io waitFor* commands](https://webdriver.io/docs/options#waitfortimeout). Default is 30.000ms
- `AVAILABILITY_CHECK` - use `allow` if you want run check availability of web app before run Canarytrace.
- `LOG_LEVEL` - default `warn`. [Level of logging verbosity](https://webdriver.io/docs/options#loglevel)
- `SPEC` - test case / monitor script
- `GIT_REPOSITORY` - e.g. `git@github.com:canarytrace/wdio75-demo.git`
- `GIT_REPOSITORY_PORT` - e.g. `github.com`
- `GIT_REPOSITORY_HOST` - e.g. `22`
- `GIT_REVISION` - `fd29508` revision of test case. Canarytrace perform git checkout before run test.
- `LICENSE` - is unique key only for you.


> ### What next?
- [Canarytrace in a nutshell](/docs/#in-a-nutshell)
- [Start local demo](/docs/canary/start)
- [Start in kubernetes](/docs/canary/start-cloud)
- [Live reporting](/docs/features/live-reporting)
- [Canarytrace Installer](/docs/features/installer)
- [Dashboards](/docs/features/dashboards)

---

Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍