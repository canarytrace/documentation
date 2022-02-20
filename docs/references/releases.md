---
id: releases
title: Release notes

description: Release notes
keywords:
  - canarytrace
  - documentation
  - releases
---

## Tagging Convention
> **Useful links** <br/><br/>
> - [Semantic Version 2.0](https://semver.org/)
> - [Our docker registry](https://quay.io/organization/canarytrace)

```bash
# Canarytrace
quay.io/repository/canarytrace/canarytrace-pub:<Major>.<Minor>.<Patch>-timestamp

# Canarytrace Pro
quay.io/repository/canarytrace/canarytrace-pub:<Major>.<Minor>.<Patch>-pro-timestamp

# Canarytrace Shipper
quay.io/canarytrace/shipper:<Major>.<Minor>
```


### Canarytrace 4.21.5
**Released 01. 19. 2022**

🚀 **New features**
- Added [RequestLog](/docs/features/request-log) service - [Collects all requests and responses](/docs/features/request-log#collects-requests-and-responses) between browser and server.
- Pairing request and response from browser.
- Added [Cherry-picking](/docs/features/request-log#cherry-picking) from `postData` payload from request.
- Added [Trace ID](/docs/features/request-log#tracing-id) - send extra headers with all requests from a browser.
- RequestLog: added totalEncodedDataLength and shouldReportCorbBlocking
- CoverageAudit: added.
- Added env [CONFIG](/docs/guides/cli) for custom Webdriver.io config.
- Print environment variables, version of packages and UUID into stdout when Canarytrace start.
```bash
Canarytrace: 4.21.5 https://canarytrace.com
WebdriverIO: 7.16.12
Lighthouse: 8.0.0
Node.js: v16.13.1

Canarytrace uuid: b4c8ce4cc114934ac4edf3235321db0e
Canarytrace mode: smoke
```
- preStopHook.sh added. - send alert when Canarytrace was stopped by Kubernetes.
- lifecycle checker added - send alert if was Canarytrace stopped due internal error.

📦 **Changes**
- services/WdioPerformanceEntries.js save HERO ELEMENTS only if is allowed
- Elasticsearch: print json with data if is observability allowed
- Update BaseImage on 16.13.1-alpine3.14
- Change format of UUID, now is 16bit lowercase string.

💥 **Breaking Change**

- Option `EDITION` was renamed to `MODE`. `MODE=smoke` is default.
- Update WDIO on 7.16.3
- ResponseIntercept and RequestIntercept services was removed. Replaced by a RequestLog service.

🐛 **Bug fixes**
- Fix clear cache in smoke mode
- Ignore performance entries during performance audit


### Canarytrace 4.10.3
**Released 12. 07. 2021**

🚀 **New features**

- [Response Intercept](/docs/features/overview#response-intercept) - Collect all responses incoming from backend to the browser.
- [`PAUSE_BETWEEN_SMOKE`](/docs/guides/cli#optional) - Added ENV for pause between every tested URL.
- Print [`uuid`](/docs/features/live-reporting#creport-) and [`labels`](/docs/features/live-reporting#creport-) into command line after start.

📦 **Changes**

- [`ENV_PRINT`](/docs/guides/cli#other) - Better print into command line.
- Count of PerformanceEntris - Better print into command line.


📝 **Documentation**
- [Command Line](/docs/guides/cli)


---

### Canarytrace 4.9.1
**Released 06. 07. 2021**

🚀 **New features**

- [Console Intercept](/docs/features/console) - Collects messages, warnings, errors, debug, info etc. from browser console.

📝 **Documentation**
- [Console Intercept](/docs/features/console)


---


### Canarytrace 4.8.0
**Released 05. 07. 2021**

🚀 **New features**

- [Hero Elements](/docs/features/hero) - Easily measure render time of individual parts of your web application with Hero Elements, e.g. when exactly is displayed to user login button or some banner?

📝 **Documentation**
- [Hero Elements](/docs/features/hero)


---

### Canarytrace 4.7.0
**Released 05. 07. 2021**

🚀 **New features**

- [Conditions for generate report](/docs/features/lighthouse#configuration-1) - Generate reports only if any of the metrics has a low score.
- [Memory Intercept](/docs/features/memory) - Collects information about used and available memory during test.
- [WaitForLoadEventEnd](/docs/features/overview#wait-for-load-event-end) - Added to `smoke` mode. Canarytrace wait for full load of the page.

📦 **Changes**

- [Performance audit](/docs/features/lighthouse) - `desktopDense4G` is a default network throttling preset. 
- WDIO configuration: `connectionRetryCount` - Reduced the number of attemps on 1.

📝 **Documentation**
- [Performance audit](/docs/features/lighthouse)
- [Memory Intercept](/docs/features/memory)


---


### Shipper 1.4

🚀 **New features**
- Canarytrace generate reports such as Lighthouse HTML report and Trace report and Shipper send them to the AWS S3.

📝 **Documentation**
- [Canarytrace Shipper](/docs/features/shipper)


---


### Canarytrace 4.4.0
**Released 27. 06. 2021**

🚀 **New features**

- [Trace events report](/docs/features/lighthouse#reporting) - Canarytrace records of activity in Chrome's processes for the Trace Event Profiling Tool.
- Prints the generated reports ([Lighthouse HTML report](/docs/features/lighthouse#reporting) and [Trace evets report](/docs/features/lighthouse#reporting)) at the end of the run.
- [Added Canarytrace Shipper](/docs/features/shipper#example) example.
- Added option [`PT_AUDIT_REPORT`](/docs/features/lighthouse#configuration-1) and [`PT_AUDIT_TRACE`](/docs/features/lighthouse#configuration-1) for generate reports.

📝 **Documentation**
- [Performance audit](/docs/features/lighthouse)
- [Canarytrace Shipper](/docs/features/shipper)
- [CLI](/docs/guides/cli)
- [Docker](/docs/features/docker)
- [Kubernetes](/docs/guides/kubernetes)

---

### Canarytrace 4.3.2
**Released 25. 06. 2021**

🚀 **New features**

- Lighthouse: added options [`PT_AUDIT_MAX_WAIT_FCP`](/docs/features/lighthouse#configuration-1) and [`PT_AUDIT_MAX_WAIT_LOAD`](/docs/features/lighthouse#configuration-1)

💥 **Breaking Change**

- Option `EDITION` was renamed to `MODE`. `MODE=smoke` is default.

📦 **Changes**

- Upgrade [Kubernetes deployment scripts](/docs/guides/kubernetes#how-to-get-a-deployment-scripts)

📝 **Documentation**
- [Performance audit](/docs/features/lighthouse)
- [Start local demo](/docs/canary/start)
- [Start in Kubernetes](/docs/canary/start-cloud)
- [Docker images](/docs/features/docker)
- [Kubernetes](/docs/guides/kubernetes)


---

### Canarytrace 4.2.16
**Released 13. 06. 2021**

📦 **Changes**
- Upgrade [Lighthouse 8](https://developers.google.com/web/tools/lighthouse)
- Upgrade [Webdriver.IO](https://webdriver.io/) from v6 on [v7.5](https://webdriver.io/)
- Upgrade on [Selenium 4](https://www.selenium.dev/)
- Canarytrace and Canarytrace Smoke editions are in one docker container. You can switch between them.
- Print more metainformation into elasticsearch indices, e.g. version, edition etc.
- Prepare for implementing [Cypress.io](https://www.cypress.io/)


🐛 **Bug fixes**
- Fix duplicate storage performance entries
- Fix Canarytrace Smoke: accept only first navigate request

---

### Canarytrace Smoke Pro 3.0.6
**Released 16. 03. 2021**

📦 **Changes**
- Added new error message `Test did not finished on time!` when testing collection of landing pages it takes too long.


🐛 **Bug fixes**
- `smoke-cronjob.yml` [Increase resources](/docs/guides/kubernetes#required-resources-for-one-instance).

---

### Canarytrace Installer 7.10.0
**Released 11. 02. 2021**

📦 **Changes**
- Compatible with Elasticsearch 7.10.0 and Kibana 7.10.0

**Links**
- [Canarytrace Installer](/docs/features/installer)
- [Kibana dashboards](/docs/features/dashboards)


---

### Canarytrace Smoke Pro 3.0.5
**Released 21. 01. 2021**

📦 **Changes**
- Performance audit isn't run if response code of navigate request is higher than 399.
- Performance audit is run in a separate step called `performance audit`


🐛 **Bug fixes**
- Fix bug with duplicate objects from Network.responseReceived and repair checker of wrong url.

---

### Canarytrace Smoke Pro 3.0.3
**Released 19. 01. 2021**

🐛 **Bug fixes**

- Url validator: url with special symbols or incomplete format.

---

### Canarytrace Smoke Pro 3.0.2
**Released 09. 01. 2021**

🚀 **New features**

- Docker image contains a [deployment scripts for k8s](/docs/guides/kubernetes#how-to-get-a-deployment-scripts)

---

### Canarytrace Smoke Pro 3.0.1
**Released 04. 01. 2021**

🚀 **New features**

- Creating and saving a better report from Lighthouse 6.4.1
- Remove label ENV and added label labels  which is stored in all elasticsearch indices. Labels contains useful information about setup Canarytrace.
- Automatically added label with throttlingType
- Better login in a elasticsearch services.
- Loging full response if is response code > 399
- Performance Audit: maxWaitForFcp and maxWaitForLoad: increase from 10.000 ms to 100.000 ms
- Added PT_AUDIT_THROTTLING options, e.g. desktopDense4G, mobileSlow4G, mobileRegular3G
