---
id: cli
title: Command Line
sidebar_label: Command Line
custom_edit_url: false
---

Canarytrace is distributed as a docker image and is run from command line. Behavior and functions are set using options. Some options are mandatory and some are optional. Canarytrace is based on WDIO v6 and therefore some options are described on [WDIO CLI Options page](https://webdriver.io/docs/clioptions.html).

> ### What you’ll learn
- How to run Canarytrace from the command line
- Options for Canarytrace settings
- All options are environment variables and they are used when running in both the docker and the kubernetes

## How to run Canarytrace

Examples below shows how to run Canarytrace in minimal configuration. Minimal configuration means, that Canarytrace will be run with default configuration.

### Docker compose

The easiest way to run Canarytrace is to use a [docker compose](https://docs.docker.com/compose/)

```yaml title="docker-compose.yaml"
version: "3.8"
services:
  browser:
    image: selenium/standalone-chrome:3.141.59-20200730
    ports:
      - "4444:4444"
    network_mode: "host"
    volumes:
      - /dev/shm:/dev/shm
  canarytrace:
    image: quay.io/canarytrace/smoke:3.0.5
    depends_on:
      - browser
    network_mode: "host"
    environment:
      BASE_URL: 'https://canarytrace.com/'
```

In this example is only one option `BASE_URL` which contain target URL.

> - Always use docker image with exactly a tag, in this case is `3.0.5`. Never use
`latest` tag or untagged version of the latest or docker image.

You can run a command using `docker-compose up`


### Kubernetes 

Use Kubernetes CronJob for production use and for non-stop monitoring. 

```yaml title="smoke.yaml"

apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: demo-smoke
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
            image: quay.io/canarytrace/smoke-pro:3.0.5
            env:
            - name: BASE_URL
              value: "https://canarytrace.com/;https://canarytrace.com/"
            - name: ELASTIC_CLUSTER
              valueFrom:
                secretKeyRef:
                  name: elastic-stack
                  key: elastic.endpoint
            - name: ELASTIC_HTTP_AUTH
              valueFrom:
                secretKeyRef:
                  name: elastic-stack
                  key: elastic.http.auth
            - name: WAIT_FOR_TIMEOUT
              value: "60000"
            - name: PT_AUDIT
              value: "allow"
            - name: PT_AUDIT_THROTTLING
              value: "desktopDense4G"
...
```

This example isn't complete. But you can see option as environment variable `ELASTIC_CLUSTER` which is filled from [secret object](https://kubernetes.io/docs/concepts/configuration/secret/).
Next used environment variables are `WAIT_FOR_TIMEOUT`, `PT_AUDIT`, `PT_AUDIT_THROTTLING`. Some of them are mandatory and some are optional.

## Mandatory options 
<a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Professional</span></a>


- `SPEC` is path and name of testcase / monitor script. E.g. `SPEC=tesla/smoke.js`

#### GIT repository

- `GIT_REPOSITORY` is URI of git repository with your tests. E.g. `GIT_REPOSITORY=https://github.com/canarytrace/canary-tests.git`

- `GIT_REPOSITORY_PORT` is port of git repository with your tests. E.g. `GIT_REPOSITORY_PORT=22`

- `GIT_REPOSITORY_HOST` is host of git repository with your tests. E.g. `GIT_REPOSITORY_HOST=github.com`

- `GIT_REVISION` is revision of your test case. E.g. `GIT_REVISION=6d27ad1`


## Optional
<a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Professional</span></a><a href="/docs/why/edition#canarytrace-smoke-pro"><span class="canaryBadge">Smoke Pro</span></a>

- `AT_DRIVER_HOST_NAME` is path to selenium instance. Default is `localhost`

- `BASE_URL` is URI of a target application. E.g. `BASE_URL=https://www.tesla.com/`. If you use Canarytrace Smoke Pro, you can add to this option more URLs, e.g. `BASE_URL=https://canarytrace.com/;https://www.teststack.cz/`

- `WAIT_FOR_TIMEOUT` explicit wait for all wait* commands. Default is 65000ms. E.g. -e `WAIT_FOR_TIMEOUT=65000`

- `LABELS` you can add some text, which will save to all elasticsearch indices. It's useful for tagging some setting e.g. `LABELS=environment=production`

- `ENV_PRINT` default no. E.g. `ENV_PRINT=allow`. Print all environment variables before execution of monitor script.
All environment variables will be saved to Elasticsearch index `c.env-*` 

> - It's useful for debugging but use with caution. This command print value all environment variables including sensitive if exist.

- `ATTACHMENTS` default no. E.g. `ATTACHMENTS=allow` store screenshot to disk, when testStep is failed.

  - Format HHmmss-YYYY-MM-DD-uuidAction.png

  - You must bind volume -v $(pwd)/attachments/:/opt/canary/attachments for "move screenshot from docker container to local directory" /attachments.

  - You can use AWS_S3_BUCKET option for upload screenshot to AWS S3 This option is described below.

- `CAPTURE_EVERY_SCREEN=allow` create a screenshot on every test step.

- `AVAILABILITY_CHECK` default no. before starting the test is executed curl command with BASE_URL value.

It's useful for check availability environment and tested application. 

```bash
22:51:41.914980 * Connection #0 to host www.tesla.com left intact
time_namelookup:  0.058289
time_connect:  0.086838
time_appconnect:  0.133599
time_pretransfer:  0.136155
time_redirect:  0.000000
time_starttransfer:  0.173897
----------
time_total:  0.477677
```

- `LOG_LEVEL` default is `warn`. E.g. `LOG_LEVEL=info`

You can use one of the values `["trace", "debug", "info", "warn", "error", "silent"]`

- `TESTS_PATH` default is /tmp/canary-tests there is no reason to change this option.


#### Elasticsearch

- `ELASTIC_CLUSTER` URI of elasticsearch cluster. E.g. `ELASTIC_CLUSTER=http://localhost:9200` This option activate live reporting all data to  elasticsearch.

- `ELASTIC_HTTP_AUTH` Basic authentication in format username:password . E.g.  `ELASTIC_HTTP_AUTH=elastic:1fKP17UklmiI14rekO6iCx9r`

- `INDEX_PREFIX` default is `c.`. E.g. `INDEX_PREFIX=dev.`

  - Canarytrace create all Elasticsearch indices with prefix `dev.report-*`, `dev.requests-*` etc. It's useful for debugging.

- `USE_ELASTIC_DOC_TYPE_BY_INDEX_NAME` default is false and will be used type _doc. If you true will be used name of index just type.

- `ELASTIC_TIMEOUT` default is 5000ms. E.g. `ELASTIC_TIMEOUT=10000`

  - Set timeout in ms for requestTimeout and pingTimeout.

- `ELASTIC_OBSERVABILITY` default is no. E.g. `ELASTIC_OBSERVABILITY=allow`

  - Print settings of elatsicsearch connection, request and response events and payload to stdout more info.

- `ELASTIC_REQUEST_COMPRESSION` default no. E.g. `ELASTIC_REQUEST_COMPRESSION=allow`


#### AWS

- `AWS_S3_ACCESS_KEY` your AWS_KEY_ID. E.g. `AWS_S3_ACCESS_KEY=ABC`

- `AWS_S3_SECRET_KEY` your AWS_SECRET_KEY. E.g. `AWS_S3_SECRET_KEY=XYZ`

- `AWS_S3_BUCKET` name of AWS S3 bucket e2e-report-attachments.

  - You must use option `AWS_S3_BUCKET=e2e-report-attachments` for create a screenshot. Canarytrace will try to send a screenshot to AWS S3.

  - Successfully uploaded attachment to https://e2e-report-attachments.s3.amazonaws.com/134930-2020-07-31-ef9a4720-37b8-4a78-9379-cbdcba31ce1a.png

  - Format HHmmss-YYYY-MM-DD-uuidAction.png

- `CODECOMMIT_CREDENTIAL_HELPER` default is no. E.g.  `CODECOMMIT_CREDENTIAL_HELPER=allow`

  - This option is required if yout want clone repository from AWS CodeCommit repositories more info

- `AWS_S3_REGION` default is eu-central-1. E.g. `AWS_S3_REGION=eu-central-1`

<a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Professional</span></a>

- `USER` username for TC, which use login to app. E.g. `USER=CYBERTRUCK`

- `PASS` password for TC, which use login to app. E.g. `PASS=Cybertruck@250Mil`


#### Services

  - For activate this feature e.g. `PERFORMANCE_ENTRIES_INTERCEPT=allow`

- `PT_AUDIT` default `no` store web performance metrics collect from browser to elasticsearch index `c.audit-*`

  - For activate this feature e.g. `PT_AUDIT=allow`

- `RESPONSE_INTERCEPT` default `no` store collection of arrived responses to browser to elasticsearch index `c.response-*`

  - For activate this feature e.g. `RESPONSE_INTERCEPT=allow`

- `REQUEST_INTERCEPT` default `no` store collection of sending request from browser to elasticsearch index `c.request-*`

  - For activate this feature e.g. `REQUEST_INTERCEPT=allow`

- `CONSOLE_INTERCEPT` default `no` store console of browser to elasticsearch index `c.console-*`

  - For activate this feature e.g. `CONSOLE_INTERCEPT=allow`

- `COVERAGE_AUDIT` default `no` store percentage used and unused code of web application to elasticsearch index `c.coverage-audit-*`

  - For activate this feature e.g. `COVERAGE_AUDIT=allow`

- `MEMORY_INTERCEPT` default `no` store used javascript memory during loading and using the web application to elasticsearch index `c.memory-*`

  - For activate this feature e.g. `MEMORY_INTERCEPT=allow`

- `HERO_ELEMENTS` default `no` store marked hero elements to elasticsearch index `c.performance-entries-*`

  - For activate this feature e.g. `HERO_ELEMENTS=allow`

<a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Professional</span></a><a href="/docs/why/edition#canarytrace-smoke-pro"><span class="canaryBadge">Smoke Pro</span></a>

- `PERFORMANCE_ENTRIES_INTERCEPT` default `no` store performance.entries collection to elasticsearch index `c.performance-entries-*` This service is in Canarytrace Smoke and Canarytrace Smoke Pro allowed as default.

Data from all services is stored to elasticsearch indices in a format `INDEX_PREFIX+SERVICE-*` 

#### Volumes

- `-v $(pwd)/attachments/:/opt/canary/attachments` binding local directory with directory in docker container for screenshots.

- `-v $(pwd)/tests/:/tmp/canary-tests` binding local directory with tests to directory in docker container.

- `-v $(pwd)/config:/opt/canary/config` extended configuration

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).