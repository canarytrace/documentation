---
id: overview
title: Features overview
sidebar_label: Overview
custom_edit_url: false
---


## What is Canarytrace?

Canarytrace is not only a testing framework, but it's a solution for your E2E functional testing, web performance testing and monitoring web application by user journey. It’s based on a testing framework WDIO, containing services for live logging, sniffing behaviour of browser and other components for test design, execution, evaluation and investigation of results.

Additional components are responsible for alerting (based on pre-defined thresholds), automatic search for incidents in collected data, reporting to other channels, searching and visualisation of data from every tests.

- [Architecture](/docs/)

## E2E Functional testing

- Full control over the web browser via Selenium Standalone in a stable pattern 1:1:1. Selenium Standalone work only  as a proxy.

- Design test case is [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) style. E.g. it and describe.

- We use [WDIO](https://webdriver.io/) API v6

- All test report data are continuously stored to Elasticsearch.

## Web Performance Testing (WPT)
Canarytrace during test execution also collects a lot of non-functional metrics such as `FP`, `FCP`, `FMP`, `ResponseTime`, `TTFB`, `SpeedScore`, [WebVitals](https://web.dev/vitals/) and more.

WPT is an important activity during functional web testing. If the browser does not have sufficient resources, the web application may not work well.

Thanks to the architecture, measurements are stable, repeatable and the results reliable.

All non-functional metrics are continuously stored to Elasticsearch.

Awesome Web Performance 

Frontend analyser
Standard testing frameworks evaluate functional state of the web application without any information about the non-functional context and behaviour of the web browser. Canarytrace stores a lot of non-functional data from the browser for analyzing the state of the web application. E.g. coverage audit, all requests, all responses, memory usage in the tab with tested web application etc.

Canarytrace doesn't test web application as a blackbox and that is a huge difference and a great benefit compared to other E2E GUI functional testing frameworks.

User Journey monitoring
Architecture of the Canarytrace meets the requirements for pattern 1:1:1 and thanks to that it is a ideal tool for testing and monitoring web application from user’s perspective.

Hero Elements
Easily measure render time of individual parts of your web application with Hero Elements

How to use Hero Elements

Live logging
All data from Canarytrace runner are continuously stored in Elasticsearch. Other testing frameworks usually store results from the execution in a database or generate HTML report.

First problem with HTML reports is, that design and values in a HTML report created some vendor of test framework and this can be restrictive. Second problem is storing a large number of html reports and searching in them. There is also no easy way how to generate trends from these reports, how to store and distribute them and exporting it in some different format to developer, architect or test manager.

Canarytrace uses Elasticsearch stack for multiple activities. E.g. search, aggregation, visualisation, generating test reports and so on.

Settings Canarytrace for storing data to Elasticsearch

Live reporting test report

Canarytrace runner
Canarytrace runner is responsible only for cloning test cases from the repository, loading and executing test cases and continuously storing data in elasticsearch (E.g testreport, metrics). That’s all. No alerting, no parallel execution etc.

Elasticsearch stack and Canarytrace Listener take over other activities like alerting by thresholds, reporting to stakeholders and first stage analysis of data from Canarytrace runner.

Demo for MacOS , Linux and Windows 10 Pro

Smoke without test case
You can use docker image in configuration Canarytrace Smoke without test case for functional E2E testing and measuring performance entries.

You just need URL destination and to run the test

It’s a great tool to quickly test home page and other pages available via URI

How to use Canarytrace Smoke

Live reporting test report
All data from Canarytrace runner are continuously stored to Elasticsearch.

Live reporting test report

Elasticsearch mapping
For all indices is ready index templates , index patterns, visualizations and dashboards

Kibana visualizations and dashboards
Kibana is a web application with GUI for viewing data stored in Elasticsearch. Data then can be used in graphs and other visualisations from which you can create custom dashboards for your testers, managers, developers or other team members.

Kibana contains input search for searching test step names, headers, metrics etc.

How To setup Kibana

Dashboard: Canarytrace Monitoring Overview

Filebeat logging
Filebeat continuously stores stdout and stderr stream for every container with Canarytrace components.

Filebeat logging

Dockerized
All Canarytrace components are dockerized, so they are ready to be used on Windows, Linux and MacOS.

Canarytrace is distributed in two versions. Developer and Professional.

Developer version contains features for designing and test running test cases. This version is intended for testers and for testing on lower environments.

Professional version contains all the features plus performance audits and can be used on production environment. Canarytrace Professional docker images contains deployment scripts plus Canarytrace Listener.

Docker images

Deploy Canarytrace to Kubernetes

Cloning repository to docker
Before starting Canarytrace runner, tests are cloned from git repository.

Canarytrace Lifecycle

Storing attachments to disc or to AWS S3
All attachments such as screenshots, HAR and videos are stored locally in the docker container or transferred to AWS S3.

Wait for clickable service
Wait for perf. entries increase
Store performance.entries data
performance.entries is collection of a part of Web Api Performance and contains events of web page and browser with non-functional metrics and timestamps.

Guarantor of this collections is a web browser.

performance.entries is continuously stores to Elasticsearch.

Performance Entries

Console Intercept
Console Intercept is Canarytrace service, which intercept all entries from browser console. Contains message from recommendation level to error level.

Guarantor of this information is a web browser.

Console Intercept is continuously stores to Elasticsearch.

Coverage Audit
Web application load lot of more unused resources such as javascript or css. Coverage Audit is collection unused bytes per resource, which is loaded during parsing web application.

Guarantor of this collection is a web browser.

Coverage Audit is continuously stores to Elasticsearch.

Memory Intercept
Web application use resources such as CPU and Memory for every opened tabs. One web application runs in one tab. If a web application consumes a large amount of memory in the browser, they may not work properly, because missing resources. Canarytrace coninuously collects information about used and available memory.

Guarantor of this collection is a web browser.

Memory Intercept is continuously stores to Elasticsearch.

Performance Audit
Every phase loading of a web application and behavior of a web browser fired event. Performance Audit is service, which collects these events for lates analysis. Canarytrace collected e.g. firstPaint, firstCPUIdle, speedIndex, cumulativeLayoutShift, numTasksOver50ms, throughput, parseHTML, scriptEvaluation, scriptParseCompile, performanceScore, loadEventEnd etc.

Performance Audit allow set params for emulate capabilities of mobile devices and for example throughput.

Guarantor of this collection is a web browser.

Performance Audit stores result to Elasticsearch.

Request Intercept
Request Intercept collect all requests trigered from browser to infrastructure.

Guarantor of this collection is a web browser.

Request Intercept is continuously stores to Elasticsearch.

Response Intercept
Response Intercept collect all responses incoming from infrastructure to web browser.

Guarantor of this collection is a web browser.

Request Intercept is continuously stores to Elasticsearch.

Canarytrace Listener
Canarytrace Listener is a separate component and main features are:

Analyzes all data / all indices data stores in Elasticsearch.

Triggering events by thresholds.

Sending mini report to slack

Creating summary reports

Observing a live reporting from Canarytrace runner

Canarytrace Listener Thresholds
Canarytrace Listener Alerting
Canarytrace Listener Reporting
Canarytrace Listener Slack integration
Full kubernetes architecture
Go to Canarytrace architecture documentation

