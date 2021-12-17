---
id: installer
title: Canarytrace Installer
sidebar_label: Canarytrace Installer

---

> ### What you’ll learn
- This installer prepare Elasticsearch and Kibana for Canarytrace use
- What is options for Canarytrace Installer?

## What is Canarytrace Installer?
---

Canarytrace is known as plug'n'play stack and it's means, that first run is very quickly and doesn't require lengthy set up. 
Set up Elasticsearch and Kibana it's also fast, thanks to prepared Canarytrace Installer.

> ### Important
- Select version of Installer by version of Elasticsearch and Kibana. E.g. if you use Elasticsearch 7.10.0 and Kibana 7.10.0 select Installer 7.10.0
- Choose the right version according to the [docker image tag](https://quay.io/repository/canarytrace/installer?tab=tags)


- **Latest supported version of Elasticsearch and Kibana is 7.10.0**
- Dockerized - the [docker image](https://quay.io/repository/canarytrace/installer) tag corresponds to the version of the Elasticsearch for which it is intended 
- Ready for [Canarytrace](/docs/why/edition/) and for [Canarytrace Pro](/docs/why/edition/)
- Ready for local use
- Ready for use on elastic.co

### What does installation contain?

- **Install index patterns**
  - Index patterns tell Kibana which Elasticsearch indices you want to explore. An index pattern can match the name of a single index, or include a wildcard (*) to match multiple indices.
- **Install templates**
  - An index template is a way to tell Elasticsearch how to configure an index when it is created.
- **Install visualizations**
  - Visualize enables you to create visualizations of the data from your Elasticsearch indices, which you can then add to dashboards for analysis.
- **Install dashboards**
  - A dashboard is a collection of visualizations, searches, and maps, typically in real-time. Dashboards provide at-a-glance insights into your data and enable you to drill down into details.

## Docker image

Canarytrace Installer is available on our docker registry [https://quay.io/repository/canarytrace/installer](https://quay.io/repository/canarytrace/installer)

## Set up Elasticsearch and Kibana on localhost

**Prerequisites**

> - Run [Elasticsearch and Kibana](/docs/guides/elasticsearch)

**Run Canarytrace Installer**
```
docker run --name installer --net canary --rm quay.io/canarytrace/installer:7.10.0
```

> - Please, use always [latest version](https://quay.io/repository/canarytrace/installer?tab=tags)

## Command Line

This setting allows you to change the default setting. For example, Elasticsearch runs somewhere in the cloud.

- `ELASTIC_ENDPOINT=http://localhost` for local installation of Elasticsearch or `elasticsearch` if you use `--net canary` bridge or `https://1234.eu-central-1.aws.cloud.es.io` if you use elastic.co
- `ELASTIC_PORTT=9200` this is a default REST-API port of Elasticsearch
- `ELASTIC_INDEX_PREFIX=c` default is `c`, e.g. index `c.report-*`
- `ELASTIC_USER=elastic`
- `ELASTIC_PASS=12345`
- `KIBANA_ENDPOINT=http://localhost` for local installation of Elasticsearch or `kibana` if you use `--net canary` bridge or `https://1234.eu-central-1.aws.
- `KIBANA_PORT=5601`
- `KIBANA_USER=elastic`
- `KIBANA_PASS=@josePh8`

## Example with docker-compose and elastic.co
> docker-compose contains configuration for prepare Elasticsearch and Kibana on elastic.

```yaml title="docker-compose.yaml"
version: "3.8"
services:
  installer:
    image: quay.io/canarytrace/installer:7.10.0
    environment:
      ELASTIC_ENDPOINT: 'https://XXX.eu-central-1.aws.cloud.es.io'
      ELASTIC_PORT: 9243
      ELASTIC_INDEX_PREFIX: 'c.'
      ELASTIC_USER: 'elastic'
      ELASTIC_PASS: 'XXX'
      KIBANA_ENDPOINT: 'https://XXX.eu-central-1.aws.cloud.es.io'
      KIBANA_PORT: 9243
      KIBANA_USER: 'elastic'
      KIBANA_PASS: 'XXX'
```

save the code to a file `docker-compose.yaml` and run `docker-compose up`

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).