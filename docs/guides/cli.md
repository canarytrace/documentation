---
id: cli
title: CLI Options
sidebar_label: CLI Options
custom_edit_url: false
---

Canarytrace is distributed as a docker image and is run from command line. Behavior and functions are set using options. Some are required and some are optional. Canarytrace is based on WDIO v6 and therefore some options are described on [WDIO CLI Options page](https://webdriver.io/docs/clioptions.html).

**The easiest way to run a test**

> Full example for [MacOS](https://semver.org/), [Linux](https://semver.org/) and [Windows 10Pro](https://semver.org/)

first line is name of docker container and options for clean up docker container after end of test and logging Canarytrace to output.

next lines with parameter -e is Canarytrace options.

--net canary is for connect a container to a canary network.

last line is version of Canarytrace. You can use specific version of Canarytrace

Canarytrace runner (required)

SPEC is path and name of testcase / monitor script. E.g. -e SPEC=tesla/smoke.js

AT_DRIVER_HOST_NAME is path to selenium instance. Default is selen by name of docker container with selenium standalone.

Canarytrace runnner (optional)

BASE_URL is URI of a target application. E.g. https://www.tesla.com/.

This option is required in case, that your test case doesn't contain browser.url('https://www.tesla.com/') but only browser.url('/'). Second variant is better.

WAIT_FOR_TIMEOUT explicit wait for all wait* commands. Default is 65000ms. E.g. -e WAIT_FOR_TIMEOUT=65000

USER username for TC, which use login to app. E.g. -e USER=CYBERTRUCK

PASS password for TC, which use login to app. E.g. -e PASS=Cybertruck@250Mil

Example: How to user dataprovider or more client accounts

ENV default localhost enviroment. You can mark all data saved to elasticsearch.

For example, localhost, digitaOcean, FR1 etc.

ENV_PRINT default no. E.g. -e ENV_PRINT=allow. Print all environment variables before execution of monitor script.

All env will be saved to Elasticsearch index 

It's useful for debugging but use with caution. This command print value all environment variables including sensitive if exist.

ATTACHMENTS default no. E.g. -e ATTACHMENTS=allow store screenshot to disk, when testStep is failed.

Format HHmmss-YYYY-MM-DD-uuidAction.png

You must bind volume -v $(pwd)/attachments/:/opt/canary/attachments for "move screenshot from docker container to local directory" /attachments.

You can use AWS_S3_BUCKET option for upload screenshot to AWS S3 This option is described below.

You can use -e CAPTURE_EVERY_SCREEN=allow for make screenshot on every test step.

AVAILABILITY_CHECK default no run before test runner curl command with BASE_URL value. E.g. -e AVAILABILITY_CHECK=allow

It's useful for check availability environment and tested application. 


22:51:41.914980 * Connection #0 to host www.tesla.com left intact
time_namelookup:  0.058289
time_connect:  0.086838
time_appconnect:  0.133599
time_pretransfer:  0.136155
time_redirect:  0.000000
time_starttransfer:  0.173897
----------
time_total:  0.477677
 

LOG_LEVEL default warn. E.g. -e LOG_LEVEL=info

you can use one of the values ["trace", "debug", "info", "warn", "error", "silent"]

TESTS_PATH default is /tmp/canary-tests there is no reason to change this option.

Elasticsearch (required)

ELASTIC_CLUSTER URI of elasticsearch cluster. E.g. -e ELASTIC_CLUSTER=http://localhost:9200

Default not set and in this case isn't elasticsearch used for live logging. All information is printed to stdout.

Elasticsearch (optional)

ELASTIC_HTTP_AUTH Basic authentication in format username:password . E.g. -e ELASTIC_HTTP_AUTH=elastic:1fKP17UklmiI14rekO6iCx9r

INDEX_PREFIX default is c.. E.g. -e INDEX_PREFIX=dev.

Canarytrace create all Elasticsearch index with prefix dev.report-*, dev.requests-* etc. It's useful for debugging.

USE_ELASTIC_DOC_TYPE_BY_INDEX_NAME default is false and will be used type _doc. If you true will be used name of index just type.

ELASTIC_TIMEOUT default is 5000ms. E.g. -e ELASTIC_TIMEOUT=10000

Set timeout in ms for requestTimeout and pingTimeout.

ELASTIC_OBSERVABILITY default is no. E.g. -e ELASTIC_OBSERVABILITY=allow.

Print settings of elatsicsearch connection, request and response events and payload to stdout more info.

ELASTIC_REQUEST_COMPRESSION default no. E.g. -e ELASTIC_REQUEST_COMPRESSION=allow

GIT repository (required)

GIT_REPOSITORY is URI of git repository with your tests. E.g. -e GIT_REPOSITORY=https://github.com/canarytrace/canary-tests.git

This option is required in case run with clone repository with tests.

GIT_REPOSITORY_PORT is port of git repository with your tests. E.g. -e GIT_REPOSITORY_PORT=22

This parameters is required in case run with clone repository with tests.

GIT_REPOSITORY_HOST is host of git repository with your tests. E.g. -e GIT_REPOSITORY_HOST=github.com

This parameters is required in case run with clone repository with tests.

GIT_REVISION is revision of your test case. E.g. -e GIT_REVISION=6d27ad1

This parameters is required in case run with clone repository with tests.

AWS (required)

AWS_S3_ACCESS_KEY your AWS_KEY_ID. E.g. -e AWS_S3_ACCESS_KEY=ABC

AWS_S3_SECRET_KEY your AWS_SECRET_KEY. E.g. -e AWS_S3_SECRET_KEY=XYZ

AWS_S3_BUCKET name of AWS S3 bucket e2e-report-attachments.

You must use option -e AWS_S3_BUCKET=e2e-report-attachments for create a screenshot.

Canarytrace will try to send a screenshot to AWS S3.

Successfully uploaded attachment to https://e2e-report-attachments.s3.amazonaws.com/134930-2020-07-31-ef9a4720-37b8-4a78-9379-cbdcba31ce1a.png

Format HHmmss-YYYY-MM-DD-uuidAction.png

AWS (optional)

CODECOMMIT_CREDENTIAL_HELPER default is no. E.g. -e CODECOMMIT_CREDENTIAL_HELPER=allow.

This option is required if yout want clone repository from AWS CodeCommit repositories more info

AWS_S3_REGION default is eu-central-1. E.g. -e AWS_S3_REGION=eu-central-1

This part of documentation is available for


Services (all is optional)

PERFORMANCE_ENTRIES_INTERCEPT default no store performance.entries collection to elasticsearch index c.performance-entries-*

Activate this feature e.g. -e PERFORMANCE_ENTRIES_INTERCEPT=allow

PT_AUDIT default no store web performance metrics collect from browser to elasticsearch index c.performance-audit-*

Activate this feature e.g. -e PT_AUDIT=allow

RESPONSE_INTERCEPT default no store collection of arrived responses to browser to elasticsearch index c.response-*

Activate this feature e.g. -e RESPONSE_INTERCEPT=allow

REQUEST_INTERCEPT default no store collection of sending request from browser to elasticsearch index c.request-*

Activate this feature e.g. -e REQUEST_INTERCEPT=allow

CONSOLE_INTERCEPT default no store console of browser to elasticsearch index c.console-*

Activate this feature e.g. -e CONSOLE_INTERCEPT=allow

COVERAGE_AUDIT default no store percentage used and unused code of web application to elasticsearch index c.coverage-audit-*

Activate this feature e.g. -e COVERAGE_AUDIT=allow

MEMORY_INTERCEPT default no store used javascript memory during loading and using the web application to elasticsearch index c.memory-*

Activate this feature e.g. -e MEMORY_INTERCEPT=allow

HERO_ELEMENTS default no store marked hero elements to elasticsearch index c.performance-entries-*

Activate this feature e.g. -e HERO_ELEMENTS=allow

Data from all services is stored to elasticsearch indices in a format INDEX_PREFIX+SERVICE-* 

What happens when I use the options for the professional version in the developer version

Some options for Canarytrace professional they will have no effect.

Services such as PT_AUDIT, RESPONSE_INTERCEPT etc. are marked in stdout such as allowed e.g.


# Services allowed only for professional version used in developer version

[0-0] Canarytrace:enablePerformanceAudits:allowed
[0-0] testStepStart: HomePage open
[0-0] Canarytrace:CoverageStart:allowed
[0-0] Canarytrace:EvaluatePerformanceAudit:allowed
[0-0] Canarytrace:TakeCoverage:allowed
[0-0] testStepEnd: HomePage open (2419 ms)
[0-0] PASSED in chrome - /tmp/canary-tests/tesla/smoke.js
This is useful for prepare test case for Canarytrace Professional.

Volumes

-v $(pwd)/attachments/:/opt/canary/attachments binding local directory with directory in docker container for screenshots.

-v $(pwd)/tests/:/tmp/canary-tests binding local directory with tests to directory in docker container.

-v $(pwd)/config:/opt/canary/config extended configuration

---

Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍