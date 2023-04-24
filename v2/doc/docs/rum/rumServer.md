---
sidebar_position: 5
description: Create a doc page with rich content.
title: RUM Server
tags:
  - rum
  - rumServer
---

> ### What you’ll learn
- What is a RUM Client
- How to implement the RUM Client
- What data and metrics are collected
- How to setting the RUM Client
- How to tracking a user activities


## What is a RUM Server
The RUM Server is a backend part of the Canarytrace RUM (Real User Monitoring). It is responsible for receiving and processing data from the RUM Clients and storing that data in Elasticsearch for later analysis.

Once the RUM Server is up, you can configure the RUM Client to start sending data to the RUM Server. This typically involves adding a small piece of code to your website or application that initializes the RUM client and configures it to send data to the server.

## Architecture

Here is an example of how the Canarytrace RUM can be used in a production environment
![Canartrace RUM Architecture](./assets/rum-architecture.webp)

### RUM Docker image

The RUM Server is distributed via a Docker image and exposes several API endpoints, including one for getting the RUM Client JavaScript, another for receiving data from the RUM Client, and additional endpoints for the browser CSP reporter. The RUM Server stores incoming data to an Elasticsearch database.

### NGINX Docker image

NGINX provides HTTP/2, compresses communication, and adds custom headers such as Access-Control-Allow-Origin. It also handles the OPTIONS method in case of a pre-flight request. You do not need to use it if you have your own solutions for exposing APIs to a frontend.

### Elasticsearch and Kibana

[Elasticsearch](https://www.elastic.co/elasticsearch/) is a database for the data collected by Canarytrace RUM. [Kibana](https://www.elastic.co/kibana/) is a web interface for viewing and searching this data in Elasticsearch, as well as for creating graphs, visualizations, and dashboards.

:::info
To continue reading this documentation, we assume that your Elasticsearch and Kibana are set up and ready to use.
- Elasticsearch documentation https://www.elastic.co/guide/en/elasticsearch/reference/8.7/index.html
- You can use a Elasticsearch cloud service https://www.elastic.co/cloud
- Alternatively, you can run Elasticsearch and Kibana on your local machine for testing purposes.
```bash title="Run Elasticsearch and Kibana in a Docker"
# Run Elasticsearch
docker run --name elasticsearch --net canary --rm -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_SETTING_XPACK_SECURITY_ENABLED=false -e ES_SETTING_ACTION_DESTRUCTIVE__REQUIRES__NAME=false docker.elastic.co/elasticsearch/elasticsearch:8.4.1 bin/elasticsearch -Enetwork.host=0.0.0.0

# Run Kibana
docker run --name kibana --net canary --rm -d -p 5601:5601 docker.elastic.co/kibana/kibana:8.4.1
```
:::

:::info
Canarytrace RUM is designed to work with the latest versions of Elasticsearch and Kibana, specifically version 8 and higher.
:::

### Endpoints

|Method|Endpoint|Description|
|-|-|
|`GET`|`/rum`|získání javascriptu s RUM Client|
|`POST`|`/rum`|odeslání payloadu s daty z RUM Client do RUM Server|
|`GET`|`/health`|healthcheck pro kontrolu připravenosti RUM Server|
|`POST`|`/rum/report-uri`||
|`POST`|`/rum/reporting-api`||


:::info Data is kept within your system and not shared with third-party destinations
One major advantage is that the data collected by the RUM Client and stored via the RUM Server remains in your environment. The RUM Server does not send the collected data to any undefined destination.
:::

## How to run

The RUM Server is distributed via a Docker image, so you can deploy the RUM Server on various platforms such as localhost, cloud environments, Kubernetes, etc.
- This approach enables run the RUM Server as a plug-and-play solution in just a few minutes.
- You can run the RUM Server anywhere you need it, so the data from a particular country stays within that country.
- Thanks to the fact that the RUM Server runs on Docker, you can run multiple instances depending on the number of visits to your production.

### Docker image



### Kubernetes

### Log
Logování RUM serveru poskytuje informace o dotazech na APIs.

**Syntaxe posílání dat**
`dateTime | method | endpoint | href | size` a informace o odesílání dat do Elasticsearch. 

Example
```bash
2023-04-02T10:39:28.191Z RUM server listening on port 3000
2023-04-02T10:39:30.175Z POST /rum https://www.alza.cz/ 0.765kB
2023-04-02T10:39:31.470Z GET /rum  
2023-04-02T10:39:34.112Z POST /rum https://www.alza.cz/ 1.665kB
2023-04-02T10:39:34.647Z POST /rum https://www.alza.cz/ 33.259kB
2023-04-02T10:39:38.192Z Queue size: 1, send into Elasticsearch when size of queue is min. 2
2023-04-02T10:39:39.147Z POST /rum https://www.alza.cz/ 1.862kB
2023-04-02T10:39:39.660Z POST /rum https://www.alza.cz/ 33.357kB
2023-04-02T10:39:44.148Z POST /rum https://www.alza.cz/ 1.195kB
2023-04-02T10:39:44.670Z POST /rum https://www.alza.cz/ 32.982kB
2023-04-02T10:39:48.193Z Queue size: 3, save data into Elasticsearch.
2023-04-02T10:39:49.138Z POST /rum https://www.alza.cz/ 1.197kB
2023-04-02T10:39:49.665Z POST /rum https://www.alza.cz/ 32.634kB
2023-04-02T10:39:54.160Z POST /rum https://www.alza.cz/ 1.197kB
2023-04-02T10:39:54.658Z POST /rum https://www.alza.cz/ 34.288kB
2023-04-02T10:39:58.195Z Queue size: 2, save data into Elasticsearch.
2023-04-02T10:39:59.145Z POST /rum https://www.alza.cz/ 1.197kB
2023-04-02T10:39:59.666Z POST /rum https://www.alza.cz/ 44.387kB
2023-04-02T10:40:04.172Z POST /rum https://www.alza.cz/ 1.197kB
2023-04-02T10:40:04.677Z POST /rum https://www.alza.cz/ 6.846kB
2023-04-02T10:40:08.196Z Queue size: 2, save data into Elasticsearch.
2023-04-02T10:40:09.182Z POST /rum https://www.alza.cz/ 1.197kB
2023-04-02T10:40:09.684Z POST /rum https://www.alza.cz/ 1.388kB
2023-04-02T10:40:14.196Z POST /rum https://www.alza.cz/ 1.197kB
2023-04-02T10:40:14.679Z POST /rum https://www.alza.cz/ 1.346kB
2023-04-02T10:40:18.197Z Queue size: 2, save data into Elasticsearch.
2023-04-02T10:40:19.179Z POST /rum https://www.alza.cz/ 1.197kB
2023-04-02T10:40:19.687Z POST /rum https://www.alza.cz/ 1.374kB
2023-04-02T10:40:24.234Z POST /rum https://www.alza.cz/ 1.197kB
2023-04-02T10:40:24.688Z POST /rum https://www.alza.cz/ 1.387kB
```

## Settings
Nastavení a vlastnosti se provádí pomocí environment variables.

- `SERVER_PORT` RUM Server port, default is `3000`
- `BODY_PARSER_LIMIT` limit for size of the payload from RUM Client, default is `10mb`
- `MIN_QUEUE_SIZE` how much payloads stored in the RUM Server to be sent to Elasticsearch. Default is `2` . If you increase this queue size, RUM server will not sent data much frequently and size of bulk of data for store into Elasticsearch will be higher. 
- `STORE_BULK_INTERVAL` how often will be data send into Elasticsearch, Default is: one per `10000` ms.
- `ELASTIC_CLUSTER` path to your Elasticsearch cluster. e.g. `https://XYZ.eu-central-1.aws.cloud.es.io:9243`
- `ELASTIC_HTTP_AUTH` username and password, e.g. `elastic:password`
- `ELASTIC_TIMEOUT` default is `5000` ms
- `ELASTIC_OBSERVABILITY` Print all Elasticsearch configuration and payloads. Default is `false`
- `INDEX_PREFIX` Default is `c.` for Elasticsearch indices, e.g. `c.rum.metrics-*`
- `MIN_PTIME` Print information about time spent for store data. Default is `300` ms
- `LABELS`