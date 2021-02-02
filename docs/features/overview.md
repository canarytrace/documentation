---
id: overview
title: Features overview
sidebar_label: Overview
custom_edit_url: false
---


## What is Canarytrace?

Canarytrace isn't a testing framework, but it's a plug-an-play stack for functional testing, web performance testing and availability monitoring web application by user perspective. It’s based on [WDIO](https://webdriver.io/) testing framework, featuring live logging services, browser network sniffing, web performance testing and other components for designing, execution, evaluation and investigation of the results.

Other components are responsible for alerting (based on predefined thresholds), automatically searching for incidents in the data collected, reporting, searching, and visualising data from each run.

- [Architecture](/docs/)

## E2E Functional testing
<a href="/docs/why/edition#canarytrace-smoke-pro"><span class="canaryBadge">Smoke Pro</span></a>

- Full control over the web browser via WebdriverIO in a stable pattern 1:1:1. WebdriverIO is used as a proxy.
- Design test case is [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) style. E.g. it and describe.
- We use [WDIO](https://webdriver.io/) API v6
- All test report data are continuously stored to Elasticsearch.

## Web Performance Testing (WPT)
<a href="/docs/why/edition#canarytrace-smoke-pro"><span class="canaryBadge">Smoke Pro</span></a><a href="/docs/why/edition#canarytrace-professional"><span class="canaryBadge">Canarytrace Smoke Pro</span></a>

Canarytrace collects many non-functional metrics such as `FP`, `FCP`, `FMP`, `ResponseTime`, `TTFB`, `SpeedScore`, [WebVitals](https://web.dev/vitals/) and more.

WPT is an important activity during functional web testing. If the browser doesn't have sufficient resources, the web application may not work well.
Thanks to the [Canarytrace architecture](/docs/guides/architecture), measurements are stable, repeatable and the results reliable.
All non-functional metrics data are continuously stored to Elasticsearch.

> Look at our base [Awesome Web Performance](docs/references/awesome)


## Frontend analyser

Other testing frameworks evaluate functional state of the web application without any information about the non-functional context and behaviour of the web browser. Canarytrace stores many non-functional data metrics from the browser for analysing the state of the web application. E.g. coverage audit, all requests, all responses, memory usage in the tab with tested web application etc.

Canarytrace doesn't test web application as a blackbox and that is a huge difference and a great benefit compared to other E2E GUI functional testing frameworks.

## User Journey monitoring

Architecture of the Canarytrace meets the requirements for pattern 1:1:1 and thanks to that it is a ideal tool for testing and monitoring web application from user’s perspective.
Do you need measure performance all steps from login to add to basket on your e-shop? No problem!


## Hero Elements

Easily measure render time of individual parts of your web application with Hero Elements, e.g. when exactly is displayed to user login button or some banner?

- [How to use Hero Elements](/docs/features/hero)

## Live logging

All data from Canarytrace runner are continuously stored in Elasticsearch. Other testing frameworks usually store results from the execution in a database or generate HTML report.

First problem with HTML reports is, that design and values in a HTML report created some vendor of test framework and this can be restrictive. Second problem is storing a large number of html reports and searching in them. There is also no easy way how to generate trends from these reports, how to store and distribute them and exporting it in some different format to developer, architect or test manager.

Canarytrace uses Elasticsearch stack for multiple activities. e.g. search, aggregation, visualisation, generating test reports and so on.

- [Elasticsearch and Kibana](/docs/guides/elasticsearch)

## Canarytrace runner

[Canarytrace Professional](/docs/why/edition#canarytrace-professional) runner is responsible only for cloning test cases from the repository, loading and executing test cases / monitor script and continuously storing data to elasticsearch (e.g testreport, metrics). That’s all. No alerting, no parallel execution etc.

Elasticsearch stack and Canarytrace Listener take over other activities like alerting based on thresholds, reporting to stakeholders and first stage analysis of data from Canarytrace runner.


## Maintenance free
[Canarytrace Smoke](/docs/why/edition#canarytrace-smoke-pro) and [Canarytrace Smoke Pro](/docs/why/edition#canarytrace-smoke-pro) are editions without any maintenace.
Enter only destination addresses of landing pages, that's all.

It’s a great approach for quickly monitoring and measure of landing pages and other pages available via URI

## Live reporting test report
All data from Canarytrace runner are continuously stored into Elasticsearch. You can see the results of testing and measurement immediately.

## Canarytrace installer
[Installer](/docs/features/installer) is our component for quickly setup Elasticsearch and Kibana before first run. Installer set up [index patterns](https://www.elastic.co/guide/en/kibana/current/index-patterns.html), [mappings and template](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html), [visualizations and dashboards](https://www.elastic.co/guide/en/kibana/current/dashboard.html).

## Kibana visualizations and dashboards

[Kibana](https://www.elastic.co/kibana) is a web application with GUI for viewing data stored in Elasticsearch. Data can be used in graphs and other visualisations from which you can create custom dashboards for your testers, managers, developers or other team members.

Kibana contains input search for searching keywork in all data. You can search and pairing data in all indices for every run by label `uuid`

## Filebeat logging
Filebeat continuously stores stdout and stderr stream for every container with Canarytrace components.

## Dockerized
All Canarytrace components are dockerized, so they are ready to be used on Windows, Linux and MacOS.

## Kubernetes and Openshift

Architecture of Canarytrace is designed for use in Kubernetes or Openshift. Thanks to this architecture is Canarytrace without vendor-lock.

## GIT and cloning repository

Cloning git repository with monitor scripts directly to container with Canarytrace.

## Canarytrace Lifecycle

Storing attachments to disc or to AWS S3
All attachments such as screenshots, HAR and videos are stored locally in the docker container or transferred to AWS S3.

## Wait for load event end

Canarytrace has implement advanced features that allow you to overcome unstable frontend issues. We know the internal processes of browser, therefore, we extend WDIO with more sophisticated functions e.g. `browser.waitForloadEventEnd()` for wait on latest browser event or `browser.waitForClickable()` for wait on active element and any more.


## Waiting on network and mocking requests

Canarytrace can wait on more browser events e.g. `waitOnIncreaseEntries` for wait for incoming response, or mocking selected or all requests on server. It's useful for debugging javascript behavior.


## Performance entries

`performance.entries` is collection of a part of Web Api Performance and contains events of web page and browser with non-functional metrics and timestamps. Garant of this collections is a web browser and whole collection is stored into Elasticsearch.


## Console Intercept

Console Intercept is Canarytrace service, which intercept all entries from browser console. Contains message from recommendation level to error level. Again, all data from browser console is stored into elasticsearch.

## Coverage Audit

Web application load a lot of more unused resources such as javascript or css. Coverage Audit is collection unused bytes per resource, which is loaded to web application during parsing.

## Memory Intercept

Web application use resources such as CPU and Memory for every opened tabs. One web application runs in one tab. If a web application consumes a large amount of memory in the browser, they may not work properly, because missing resources. Canarytrace coninuously collects information about used and available memory.

## Lighthouse and Performance Audit

Every phase loading of a web application and behavior of a web browser fired event. Performance Audit is service, which collects these events for automatically analysis. Canarytrace collected e.g. `First Contentful Paint`, `Time To Interactive`, `Speed Index`, `Cumulative Layout Shift`, `numTasksOver50ms`, `throughput`, `Time To First Byte`, `ResponseTime`, `performanceScore`, `loadEventEnd` etc.

For Performance Audit we use [Lighthouse](/docs/features/lighthouse), which allow set params for emulate capabilities of mobile and desktop devices and for example throughput.

## Request Intercept

Request Intercept collect all requests trigered from browser to infrastructure.

## Response Intercept

Response Intercept collect all responses incoming from infrastructure to web browser.

## Canarytrace Listener

Canarytrace Listener is a separate component and main features are:

- Analyzes all data / all indices data stores in Elasticsearch.
- Triggering events by thresholds.
- Sending report to many services, e.g. slack.
- Creating summary reports.
- Analyzes headers responses and resources of web application.
- Observing a live reporting from Canarytrace runner.

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍