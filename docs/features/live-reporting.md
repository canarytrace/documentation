---
id: live-reporting
title: Live reporting
sidebar_label: Live reporting
---

> ### What you’ll learn
- This installer prepare Elasticsearch and Kibana for Canarytrace use
- What is options for Canarytrace Installer?


Canarytrace stores a lof of data to Elasticsearch indices. Elasticsearch index is in a simple analogous form something like a table in a SQL databases. For better work with data stores by Canarytrace runner it's necessary to [setup Elasticsearch](/docs/features/installer). 

## Indices

Canarytrace save continuously  data to indices by type of data. Performance Audit, JS Heap, function test step report, all responses, performance entries etc. 

- `c.report-*` contains test report data.

- `c.performance-entries-*` contains data from performance entries API.

- `c.request-*` contains all request fired from browser.

- `c.response-*` contains all arrived responses.

- `c.memory-*` contains continuously stores data about total and usage JS Heap.

- `c.console-*` contains all messages from browser console.

- `c.audit-*` contains data from [Performance Audit](/docs/features/lighthouse) (ligthhouse).

- `c.coverage-audit-*` contains data from usage and unused resources loaded during parsing a web application.

- `c.env-*` contains environment variables.

Setup Elasticsearch and Kibana via Installer
You must setup index patterns, visualizations and dashboard storing and viewing data.

Index patterns tell Kibana which Elasticsearch indices you want to explore. An index pattern can match the name of a single index, or include a wildcard (*) to match multiple indices.

Visualize enables you to create visualizations of the data from your Elasticsearch indices, which you can then add to dashboards for analysis.

A dashboard is a collection of visualizations, searches, and maps, typically in real-time. Dashboards provide at-a-glance insights into your data and enable you to drill down into details.

For continue it is necessary to have running elasticsearch and kibana How to run Elasticsearch and Kibana locally or ready Elasticsearch cloud

Installer is dockerized application for setup Elasticsearch and Kibana. 

For Elasticsearch and Kibana 7.x but recommended version is 7.10

Dockerized - the docker image tag corresponds to the version of the Elasticsearch for which it is intended

Install index patterns

Install visualizations

Install dashboards

Ready for Canarytrace, Canarytrace Smoke Pro

Ready for local use

Ready for use on elastic.co

Continue to docker installer repository and then go back here

Congratulations, yourElasticsearch and Kibana is ready 👍

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).