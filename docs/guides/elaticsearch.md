---
id: elasticsearch
title: Elasticsearch and Kibana
sidebar_label: Elasticsearch and Kibana

---

> ### What you’ll learn
- What is Elasticsearch and Kibana
- Why we use Elasticsearch
- How to install Elasticsearch and Kibana via Docker

## What is Elasticsearch?
---
[Elasticsearch](https://www.elastic.co/elasticsearch/) is the distributed search and analytics engine at the heart of the Elastic Stack. In Elasticsearch is stored all data collected from Canarytrace and browser API's.

Elasticsearch is completely control via REST API and thanks to is possible work with data via other tools. So, Canarytrace store all raw data to Elasticsearch.

In our Canarytrace stack is Elasticsearch one of the most important parts. Elaticsearch allows data filtering, searching and aggregating.


## What is Kibana?
---

[Kibana](https://www.elastic.co/kibana/) is a free and open user interface that lets you visualize your Elasticsearch data and navigate the Elastic Stack.

In Canarytrace ecosystem is Kibana a window into results of measure and interface for invetigate of incidents and view of agregated data to graphs.

Kibana use data from Elasticsearch for generate graphs and visualizations. Your data is diplayed in visualizations and visualize is are arranged in dashboards.

The dashborads can be more, but every dashboards shows data / graphs for different type of data.

- [Go to the dashboard documentation](/docs/features/dashboards)

## How to run
---

Elasticsearch and Kibana is possible install via Docker or use [Elasticsearch cloud](https://cloud.elastic.co/login).

### Elasticsearch

<video poster="https://canarytrace.com/src/screencast/installer.png" preload autoplay controls className="screencast">
  <source type="video/mp4" src="https://canarytrace.com/src/screencast/run-elastic-kibana.mp4"></source>
</video>


**Create a user-defined bridges**

```bash
docker network create canarytrace
```

**Run dockerized Elasticsearch**

```bash
docker run --name elasticsearch --net canarytrace --rm -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_SETTING_XPACK_SECURITY_ENABLED=false -e ES_SETTING_ACTION_DESTRUCTIVE__REQUIRES__NAME=false docker.elastic.co/elasticsearch/elasticsearch:8.2.0 bin/elasticsearch -Enetwork.host=0.0.0.0

```

`--net canarytrace` is [user-defined bridges](https://docs.docker.com/network/bridge/) for all Canarytrace components

Wait 1 minute and check `docker logs -f elasticsearch`, that Elasticsearch is ready to use. The log doesn't contains no error messages.

Or you can call REST-API of Elaticsearch, just only open this URL `http://your-ip:9200` in your browser and result is

```bash
{
  "name" : "158b9b93dcc6",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "rPWOsqy2TziaAyYoZHdBNg",
  "version" : {
    "number" : "8.2.0",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "e5acb99f822233d62d6444ce45a4543dc1c8059a",
    "build_date" : "2022-02-23T22:20:54.153567231Z",
    "build_snapshot" : false,
    "lucene_version" : "8.11.1",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

> - More info in Elasticsearch dokumentaci https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html


### Kibana

```bash
docker run --name kibana --net canarytrace --rm -d -p 5601:5601 docker.elastic.co/kibana/kibana:8.2.0

```

Wait 1 minute and check `docker logs -f kibana`, that Kibana is ready to use. The log doesn't contains no error messages.


> Always use the same version of Kibana such as version of Elasticsearch.


Next open [http://localhost:5601](http://localhost:5601) in your a browser. 

![Kibana](https://canarytrace.com/src/screencast/kibana-home-page.png)


## How to setup Elasticsearch stack?
---

Elasticsearch and Kibana are after first run completely empty. Before first run of Canarytrace needs setup:

- Setup Elasticsearch and Kibana
- Import Kibana visualize and dashboards

We have dockerized [Canarytrace Installer](/docs/features/installer), which sets up Elasticsearch and Kibana in some of seconds.

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).