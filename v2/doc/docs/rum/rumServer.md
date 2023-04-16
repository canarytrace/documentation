---
sidebar_position: 5
description: Create a doc page with rich content.
title: RUM Server
tags:
  - rum
---


## RUM Server
Je backendová část RUM, která běží v Docker kontejneru, vystavuje api pro RUM Client a příjmá data data z RUM Client.

**Endpointy**
- `GET /rum` získání javascriptu s RUM Client
- `POST /rum` odeslání payloadu s daty z RUM Client do RUM Server
- `GET /health` healthcheck pro kontrolu připravenosti RUM Server


## Kubernetes



### Nastavení RUM Serveru
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

###### Skryté nastavení
- `ENVIRONMENT` in the `development` environment is cors enabled. You use always default value `production`
- `CSP_HEADER` - `default-src http://localhost:3000/ style-src https://cdn.tailwindcss.com/ 'report-sample'; report-uri https://rum.canarytrace.com/rum/report-uri; report-to reporting-api` more info [[Reporting API#Developer]]
- `CSP_REPORT_TO_HEADER` - `{"group":"reporting-api","max_age":31536000,"endpoints":[{"url":"https://rum.canarytrace.com/rum/reporting-api"}],"include_subdomains":true}` more info [[Reporting API#Developer]]
- `CSP_REPORTING_ENDPOINTS` - `reporting-api="https://rum.canarytrace.com/rum/reporting-api"` more info [[Reporting API#Developer]]


### LOG RUM Server
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
