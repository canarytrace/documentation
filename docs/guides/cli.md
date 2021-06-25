---
id: cli
title: Command Line
sidebar_label: Command Line
custom_edit_url: false
---

Canarytrace is distributed as a docker image and is run from command line. Behavior and functions are set using options. Some options are mandatory and some are optional. Canarytrace is based on WDIO v7 and therefore some options are described on [WDIO CLI Options page](https://webdriver.io/docs/clioptions.html).

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
    image: selenium/standalone-chrome:4.0.0-beta-4-prerelease-20210527
    network_mode: "host"
    volumes:
      - /dev/shm:/dev/shm
  canarytrace:
    image: quay.io/canarytrace/canarytrace-pub:4.3.0-pro-20210622134003-92
    depends_on:
      - browser
    network_mode: "host"
    environment:
      BASE_URL: 'https://canarytrace.com/;https://www.teststack.cz/'
      LICENSE: 'XXXX-XXXX-XXXX-XXXX-XXXX-XXXX'
```

In this example are only options `BASE_URL` which contain target URL and `LICENSE`.

You can run a command using `docker-compose up`


### Kubernetes 

Use Kubernetes CronJob for production use and for non-stop monitoring. 

```yaml title="smoke.yaml"
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: smoke-mobile
  namespace: canarytrace
spec:
  concurrencyPolicy: Replace
  failedJobsHistoryLimit: 2
  schedule: "*/3 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: canarytrace
            image: quay.io/canarytrace/canarytrace-pub:4.3.1-pro-20210625113429-82
            env:
            - name: BASE_URL
              value: "https://the-internet.herokuapp.com/login"
            - name: PT_AUDIT
              value: "allow"
            - name: PT_AUDIT_THROTTLING
              value: "mobileRegular3G"
            - name: LABELS
              value: "mobile, smoke"
            - name: LICENSE
              value: "XXXXX-YYYYY-Z4WG5-5363C-CF0CB-A8647"
            - name: ELASTIC_CLUSTER
              value: "https://ABCD.eu-central-1.aws.cloud.es.io:9243"
            - name: ELASTIC_HTTP_AUTH
              value: "elastic:password"
...
```

This example isn't complete, but contains more options as environment variable `ELASTIC_CLUSTER`, `PT_AUDIT`, `PT_AUDIT_THROTTLING` or `LABELS`. Some of them are mandatory and some are optional. 


## Mode `smoke`

> ### How to read this documentation
> - You can run [Canarytrace in modes](/docs/why/edition) `smoke` or `user-journey`. Smoke mode is a default mode and is maintenance free and therefore you can use less mandatory options.
> - If you have [Canarytrace Pro](/docs/why/edition) edition, you can run audits such as [performance audit](/docs/features/lighthouse). Features for Canarytrace Pro have this badge <a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Professional</span></a>

### Mandatory options
> Mode `smoke` is a default.

- `BASE_URL` add more URLs, e.g. `BASE_URL=https://canarytrace.com/;https://canarytrace.com/docs/canary/start`

- `LICENSE` add your license key.

### Elasticsearch

If you want use live logging to [Elasticsearch](/docs/guides/elasticsearch/) and visualize data in a [Kibana](/docs/features/dashboards/), you must use this options.

- `ELASTIC_CLUSTER` URI of elasticsearch cluster. E.g. `ELASTIC_CLUSTER="http://localhost:9200"` This option activate live reporting all data to elasticsearch. If left blank, documents will be printed to stdout.

- `ELASTIC_HTTP_AUTH` Basic authentication in format username:password . E.g. `ELASTIC_HTTP_AUTH=elastic:1fKP17UklmiI14rekO6iCx9r`

- `MIN_PTIME` Print requests to elasticsearch if is exceeded transactions time. Default min processing time is 300ms.

- `ELASTIC_OBSERVABILITY` Use `allow` for print settings of elasticsearch and all requests and responses to stdout.

- `INDEX_PREFIX` - Default is `c.`

- `USE_ELASTIC_DOC_TYPE_BY_INDEX_NAME` Default is false and will be used type _doc. If you true will be used name of index just type.

- `ELASTIC_REQUEST_COMPRESSION` Use `allow` for use compression.

- `ELASTIC_TIMEOUT` Default is 5000ms.

### Performance audit 
<a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Professional</span></a>

Configuration is on separate page. [Performance audit configuration](/docs/features/lighthouse/#configuration-1)


## Mode `user-journey`
> - If you use this mode you need [test script / monitor script](/docs/references/glosary#test-case--monitor-script) writen in [Webdriver.IO](https://webdriver.io/). Try [how to write test script / monitor script](/docs/guides/wdio)
> - In this mode you must use more mandatory options, because Canarytrace need to [download test cases](/docs/guides/lifecycle) from your git repositry.
> - If you have [Canarytrace Pro](/docs/why/edition) edition, you can run audits such as [performance audit](/docs/features/lighthouse). Features for Canarytrace Pro have this badge <a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Professional</span></a>

- `BASE_URL` - is a start address 'https://the-internet.herokuapp.com/' for your test script. You test script can start with `/`

```javascript
  it('open home page', async () => {
    await browser.url('/');
    await expect(browser).toHaveTitle(title, {message: 'Element title not found. The page couldn\'t be loaded in time.'})
  });
```
### Mandatory options

- `SPEC` - is file with your test case / monitor script, e.g. `SPEC="test/specs/example.e2e.js"`

- `GIT_REPOSITORY` - e.g. `git@github.com:canarytrace/wdio75-demo.git`

- `GIT_REPOSITORY_PORT` - e.g. `22`

- `GIT_REPOSITORY_HOST` - e.g. `github.com`

- `GIT_REVISION` - `fd29508` revision of your test case. Canarytrace perform git checkout before run test.


### Optional

- `USER` username for TC, which use login to app. E.g. `USER=CYBERTRUCK`

- `PASS` password for TC, which use login to app. E.g. `PASS=Cybertruck@250Mil`

How to use in your test case

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

## Other
> These options are not mandatory and are available for both mode.

- `LABELS` is optional metainformation, which is stored in the elastic to each record in each index, e.g. `'relesease=7, environment=dev'`

- `SPEC` is path and name of testcase / monitor script. E.g. `SPEC=tesla/smoke.js`

- `ENGINE` - default is `wdio` for [Webdriver.IO](https://webdriver.io/) v7.5 and no need change it

- `ENV_PRINT` - Print all environment variables. Print all environment variables before execution of monitor script. All environment variables will be saved to Elasticsearch index `c.env-*`

> It's useful for debugging but use with caution. This command print value all environment variables including sensitive if exist.

- `AVAILABILITY_CHECK` - use `allow` if you want run check availability of web app before run Canarytrace.

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

- `WAIT_FOR_TIMEOUT` - Timeout limit for all [webdriver.io waitFor*](https://webdriver.io/docs/options/#waitfortimeout) commands. Default is 30.000ms

- `LOG_LEVEL` - default is `warn`. [Level of logging verbosity](https://webdriver.io/docs/options/#loglevel)

- `ATTACHMENTS` Use `allow` for store screenshot to disk, when testStep is failed.

  - Format HHmmss-YYYY-MM-DD-uuidAction.png

  - You must bind volume -v $(pwd)/attachments/:/opt/canary/attachments for "move screenshot from docker container to local directory" /attachments.

  - You can use AWS_S3_BUCKET option for upload screenshot to AWS S3 This option is described below.

- `CAPTURE_EVERY_SCREEN=allow` create a screenshot on every test step.

- `TESTS_PATH` default is `/opt/canary/tests` there is no reason to change this option.


### AWS
<a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Professional</span></a>

- `AWS_S3_ACCESS_KEY` your AWS_KEY_ID. E.g. `AWS_S3_ACCESS_KEY=ABC`

- `AWS_S3_SECRET_KEY` your AWS_SECRET_KEY. E.g. `AWS_S3_SECRET_KEY=XYZ`

- `AWS_S3_BUCKET` name of AWS S3 bucket e2e-report-attachments.

  - You must use option `AWS_S3_BUCKET=e2e-report-attachments` for create a screenshot. Canarytrace will try to send a screenshot to AWS S3.

  - Successfully uploaded attachment to https://e2e-report-attachments.s3.amazonaws.com/134930-2020-07-31-ef9a4720-37b8-4a78-9379-cbdcba31ce1a.png

  - Format HHmmss-YYYY-MM-DD-uuidAction.png

- `CODECOMMIT_CREDENTIAL_HELPER` default is no. E.g.  `CODECOMMIT_CREDENTIAL_HELPER=allow`

  - This option is required if yout want clone repository from AWS CodeCommit repositories more info

- `AWS_S3_REGION` default is eu-central-1. E.g. `AWS_S3_REGION=eu-central-1`

### Services
<a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Professional</span></a>

- `RESPONSE_INTERCEPT` default `no` store collection of arrived responses from server to browser into elasticsearch index [`c.response-*`](/docs/features/live-reporting)

  - For activate this features use `RESPONSE_INTERCEPT=allow`

- `REQUEST_INTERCEPT` default `no` store collection of sending request from browser into elasticsearch index [`c.request-*`](/docs/features/live-reporting)

  - For activate this features use `REQUEST_INTERCEPT=allow`

- `CONSOLE_INTERCEPT` default `no` store console of browser into elasticsearch index [`c.console-*`](/docs/features/live-reporting)

  - For activate this features use `CONSOLE_INTERCEPT=allow`

- `COVERAGE_AUDIT` default `no` store percentage used and unused code of web application into elasticsearch index [`c.coverage-audit-*`](/docs/features/live-reporting)

  - For activate this features use `COVERAGE_AUDIT=allow`

- `MEMORY_INTERCEPT` default `no` store used javascript memory during loading and using the web application into elasticsearch index [`c.memory-*`](/docs/features/live-reporting)

  - For activate this features use `MEMORY_INTERCEPT=allow`

- `HERO_ELEMENTS` default `no` store marked hero elements in  to elasticsearch index [`c.performance-entries-*`](/docs/features/live-reporting)

  - For activate this features use `HERO_ELEMENTS=allow`

#### Volumes

- `-v $(pwd)/assets/:/opt/canary/assets` binding local directory with directory in docker container for statical files, e.g. screenshots.

- `-v $(pwd)/tests/:/opt/canary/tests` binding local directory with tests to directory in docker container.

- `-v $(pwd)/config:/opt/canary/config/wdio` for extended default configuration.

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).