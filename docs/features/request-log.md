---
id: request-log
title: Request Log
sidebar_label: Request Log
---

> ### What you’ll learn
- What is Request Log
- How to setup Request Log
- What is Cherry picking and Tracing ID

<a href="/docs/why/edition#canarytrace-pro"><span class="canaryBadge">Canarytrace Pro</span></a>

Canarytrace on the fly collects all requests and responses between browser and server. All data are saved into [`c.request-log-*`](/docs/features/live-reporting#crequest-log-) Elasticsearch index.

## Features
### Collects requests and responses
Canarytrace joins to the devTools and via API download all requests and responses called between browser and server. All data are saved into Elasticsearch. [Example of saved request and response](/docs/features/live-reporting#crequest-log-) in Elasticsearch.

**Example on `https://battle.canarytrace.com/assets/images/4kWallpaperSmokePro.png` request**

```json
{
  "_index": "c.request-log-2022.05.08",
  "_id": "gin_o4ABloNzcBTv5cKP",
  "_version": 1,
  "_score": 1,
  "_source": {
    "requestId": "67088.21",
    "timestamp": "2022-05-08T14:08:10.366Z",
    "labels": [
      "mode=canarytrace-smoke-pro-4.21.8",
      "engine=wdio",
      "develop160754",
      "pt.audit=desktopDense4G"
    ],
    "spec": "smoke.js",
    "context": "Smoke https://battle.canarytrace.com/",
    "uuidAction": "ace301b3e968336ebdd6",
    "uuid": "08052216075508692000000000000000",
    "sequence": 19,
    "url": "https://battle.canarytrace.com/assets/images/4kWallpaperSmokePro.png",
    "request": {
      "requestId": "67088.21",
      "timestamp": 174522.728438,
      "wallTime": 1652018890.363678,
      "initiator": {
        "type": "parser",
        "url": "https://battle.canarytrace.com/",
        "lineNumber": 78,
        "columnNumber": 79
      },
      "redirectHasExtraInfo": false,
      "type": "Image",
      "method": "GET",
      "headers": {
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
        "Referer": "https://battle.canarytrace.com/",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
        "sec-ch-ua-platform": "\"macOS\""
      },
      "initialPriority": "Low",
      "isSameSite": true,
      "postDataParsed": ""
    },
    "response": {
      "status": 200,
      "statusText": "",
      "headers": {
        "content-security-policy": "upgrade-insecure-requests",
        "last-modified": "Sun, 21 Nov 2021 15:54:08 GMT",
        "server": "nginx",
        "etag": "\"217c7a-5d14e84c771e1\"",
        "content-type": "image/png",
        "date": "Sun, 08 May 2022 14:08:10 GMT",
        "accept-ranges": "bytes",
        "content-length": "2194554"
      },
      "mimeType": "image/png",
      "connectionReused": true,
      "connectionId": 27,
      "remoteIPAddress": "178.238.37.215",
      "remotePort": 443,
      "fromDiskCache": false,
      "fromServiceWorker": false,
      "fromPrefetchCache": false,
      "encodedDataLength": 168,
      "timing": {
        "requestTime": 174523.103996,
        "proxyStart": -1,
        "proxyEnd": -1,
        "dnsStart": -1,
        "dnsEnd": -1,
        "connectStart": -1,
        "connectEnd": -1,
        "sslStart": -1,
        "sslEnd": -1,
        "workerStart": -1,
        "workerReady": -1,
        "workerFetchStart": -1,
        "workerRespondWithSettled": -1,
        "sendStart": 0.615,
        "sendEnd": 1.375,
        "pushStart": 0,
        "pushEnd": 0,
        "receiveHeadersEnd": 50.976
      },
      "responseTime": 1652018890790.18,
      "protocol": "h2",
      "securityState": "secure",
      "requestId": "67088.21",
      "timestamp": 174525.138751,
      "totalEncodedDataLength": 2197143,
      "shouldReportCorbBlocking": false
    },
    "har": {
      "blocked": 0.615,
      "dns": -1,
      "connect": -1,
      "send": 0.76,
      "wait": 49.601,
      "receive": 1984.457,
      "ssl": -1,
      "comment": "",
      "time": 2035.433
    }
  },
  "fields": {
    "response.headers.etag": [
      "\"217c7a-5d14e84c771e1\""
    ],
    "response.timing.sendStart": [
      0.615
    ],
    "request.headers.User-Agent": [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
    ],
    "request.initiator.columnNumber": [
      79
    ],
    "request.initialPriority": [
      "Low"
    ],
    "response.timing.workerFetchStart": [
      -1
    ],
    "response.headers.content-type": [
      "image/png"
    ],
    "request.headers.User-Agent.keyword": [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
    ],
    "uuid": [
      "08052216075508692000000000000000"
    ],
    "response.timing.receiveHeadersEnd": [
      50.976
    ],
    "spec": [
      "smoke.js"
    ],
    "labels.raw": [
      "mode=canarytrace-smoke-pro-4.21.8",
      "engine=wdio",
      "develop160754",
      "pt.audit=desktopDense4G"
    ],
    "response.fromDiskCache": [
      false
    ],
    "response.timing.workerReady": [
      -1
    ],
    "response.headers.content-length.keyword": [
      "2194554"
    ],
    "response.requestId": [
      "67088.21"
    ],
    "response.timing.sslStart": [
      -1
    ],
    "context": [
      "Smoke https://battle.canarytrace.com/"
    ],
    "response.timing.requestTime": [
      174523.11
    ],
    "har.receive": [
      1984.457
    ],
    "response.remotePort": [
      443
    ],
    "response.remoteIPAddress": [
      "178.238.37.215"
    ],
    "response.headers.last-modified": [
      "Sun, 21 Nov 2021 15:54:08 GMT"
    ],
    "response.headers.accept-ranges": [
      "bytes"
    ],
    "response.headers.date": [
      "Sun, 08 May 2022 14:08:10 GMT"
    ],
    "response.timing.connectEnd": [
      -1
    ],
    "response.timing.sendEnd": [
      1.375
    ],
    "labels": [
      "mode=canarytrace-smoke-pro-4.21.8",
      "engine=wdio",
      "develop160754",
      "pt.audit=desktopDense4G"
    ],
    "request.headers.Referer.keyword": [
      "https://battle.canarytrace.com/"
    ],
    "sequence": [
      19
    ],
    "response.headers.etag.keyword": [
      "\"217c7a-5d14e84c771e1\""
    ],
    "request.wallTime": [
      1652018940
    ],
    "response.responseTime": [
      1652018910000
    ],
    "request.initiator.lineNumber": [
      78
    ],
    "request.headers.sec-ch-ua-mobile": [
      "?0"
    ],
    "response.timing.workerStart": [
      -1
    ],
    "request.isSameSite": [
      true
    ],
    "response.totalEncodedDataLength": [
      2197143
    ],
    "response.headers.server.keyword": [
      "nginx"
    ],
    "response.headers.content-type.keyword": [
      "image/png"
    ],
    "har.dns": [
      -1
    ],
    "request.headers.Referer": [
      "https://battle.canarytrace.com/"
    ],
    "har.send": [
      0.76
    ],
    "response.headers.content-security-policy.keyword": [
      "upgrade-insecure-requests"
    ],
    "response.headers.last-modified.keyword": [
      "Sun, 21 Nov 2021 15:54:08 GMT"
    ],
    "response.statusText": [
      ""
    ],
    "response.connectionId": [
      27
    ],
    "request.headers.sec-ch-ua": [
      "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\""
    ],
    "request.type": [
      "Image"
    ],
    "response.timing.workerRespondWithSettled": [
      -1
    ],
    "response.timing.proxyStart": [
      -1
    ],
    "response.timing.dnsStart": [
      -1
    ],
    "request.redirectHasExtraInfo": [
      false
    ],
    "request.initiator.type": [
      "parser"
    ],
    "response.timing.proxyEnd": [
      -1
    ],
    "request.headers.sec-ch-ua-platform": [
      "\"macOS\""
    ],
    "response.shouldReportCorbBlocking": [
      false
    ],
    "response.fromServiceWorker": [
      false
    ],
    "response.timestamp": [
      174525.14
    ],
    "response.headers.accept-ranges.keyword": [
      "bytes"
    ],
    "har.wait": [
      49.601
    ],
    "response.timing.sslEnd": [
      -1
    ],
    "requestId": [
      "67088.21"
    ],
    "response.connectionReused": [
      true
    ],
    "response.headers.server": [
      "nginx"
    ],
    "har.comment": [
      ""
    ],
    "har.ssl": [
      -1
    ],
    "response.headers.content-security-policy": [
      "upgrade-insecure-requests"
    ],
    "response.protocol": [
      "h2"
    ],
    "request.initiator.url": [
      "https://battle.canarytrace.com/"
    ],
    "response.timing.pushEnd": [
      0
    ],
    "timestamp": [
      "2022-05-08T14:08:10.366Z"
    ],
    "url.raw": [
      "https://battle.canarytrace.com/assets/images/4kWallpaperSmokePro.png"
    ],
    "request.headers.sec-ch-ua.keyword": [
      "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\""
    ],
    "uuidAction": [
      "ace301b3e968336ebdd6"
    ],
    "response.timing.pushStart": [
      0
    ],
    "request.method": [
      "GET"
    ],
    "response.headers.date.keyword": [
      "Sun, 08 May 2022 14:08:10 GMT"
    ],
    "response.mimeType": [
      "image/png"
    ],
    "response.fromPrefetchCache": [
      false
    ],
    "url": [
      "https://battle.canarytrace.com/assets/images/4kWallpaperSmokePro.png"
    ],
    "request.initiator.url.keyword": [
      "https://battle.canarytrace.com/"
    ],
    "request.headers.sec-ch-ua-mobile.keyword": [
      "?0"
    ],
    "response.timing.connectStart": [
      -1
    ],
    "har.blocked": [
      0.615
    ],
    "request.timestamp": [
      174522.73
    ],
    "har.connect": [
      -1
    ],
    "response.securityState": [
      "secure"
    ],
    "request.postDataParsed": [
      ""
    ],
    "request.headers.sec-ch-ua-platform.keyword": [
      "\"macOS\""
    ],
    "request.requestId": [
      "67088.21"
    ],
    "response.status": [
      "200"
    ],
    "response.encodedDataLength": [
      168
    ],
    "response.timing.dnsEnd": [
      -1
    ],
    "response.headers.content-length": [
      "2194554"
    ],
    "har.time": [
      2035.433
    ]
  }
}
```

**Compare `request-log-*` and `DevTools`**

![Compare request-log-* and DevTools](../../static/docs-img/request-log-compare.png)

**Go to find important informations**

Show all responses with missing `gzip` or `br` encoding

![Missing encodings](../../static/docs-img/request-log-missing-encoding.png)

Show field statistics / a occurrence of responses codes

![Statistic field](../../static/docs-img/request-log-statistic-field.png)


**New Kibana Request Log Dashboard**

Request Log Dashboard is available via [Installer](/docs/features/installer)
![Request Log Kibana Dashboard](../../static/docs-img/request-log-kibana-dashboard.png)


### Cherry picking
Canarytrace can pick data from `postData` property in a requests and these can be used for subsequent search or categorization in Elasticsearch.

For example, it is useful for monitoring Graphql requests.

```json title="Cherry pick value of title property"
...
"initialPriority": "High",
"postData": "{\"tracker_id\":\"28518-44635\",\"client_id\":172677309569,\"url\":\"https://www.xyz.cz/\",\"path\":\"/\",\"title\":\"Our e-shop\",\"referer\":\"\",\"local_timestamp\":1645370875,\"id\":\"1645370875252958861\",\"type\":\"pv\"}",
"postDataParsed": "\"Our e-shop\""
```
Set `POST_DATA_PATH` with expression `'.title'`

```json title="Cherry pick value of type property"
...
"initialPriority": "High",
"postData": "[{\"type\":\"pageview\",\"content\":null,\"user\":{\"id\":\"\",\"biskoId\":\"223ca80c1162421fa21ace539d98af22\",\"dmpStorageId\":null,\"properties\":{}},\"bisko\":{\"propertyIds\":[\"180298\"],\"sdkVersion\":\"1.5.3\"},\"clientDateTime\":1645371700042,\"clientDateTimeUtc\":1645368100042,\"browser\":{\"url\":\"https://www.xyz.cz/\",\"referrer\":\"\",\"sessionId\":\"9068cf66bf0d4e658330468af7370437\",\"pageViewGuid\":\"ca8d3ec8d32e45c3a2dd5175550071b6\",\"title\":\"Our e-shop\",\"language\":\"cs-CZ\",\"screenWidth\":1512,\"screenHeight\":982,\"historyLength\":2}}]",
"postDataParsed": "\"pageview\""
```
Set `POST_DATA_PATH` with expression `'[0].type'` or

``` json
...
"postDataParsed": "\"58c05e44d6d34f908a4773961bc0a4f7\""
```
if is `POST_DATA_PATH` with `'[0].user.biskoId'` or

```json
...
"postDataParsed": "{\"id\":\"\",\"biskoId\":\"7dc89ff1fcf34db18821e93f0b51a099\",\"dmpStorageId\":null,\"properties\":{}}"
```
if is `POST_DATA_PATH` with `'[0].user'`

### Tracing ID
Tracing all requests from browser into server is very useful for request investigation and monitoring.
Canarytrace set extra header for all requests in your application and you can monitoring in other tools, what happends with requests in your infrastructure.

`canary-trace-id` is default name of request header with UUID in the length of 32 characters. You can name of this request header changing.

```json title="Example request with trace id" {2,16}
...
"uuid": "2616452fb4022837ec4ca17f8f7bcd8d",
"sequence": 41,
"url": "https://your-web.com/api/v1/events/web",
"request": {
  "requestId": "99616.126",
  "timestamp": 379108.221625,
  "initiator": "script",
  "redirectHasExtraInfo": false,
  "type": "XHR",
  "method": "POST",
  "headers": {
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "Referer": "https://your-web.com",
    "sec-ch-ua-mobile": "?0",
    "canary-trace-id": "2616452fb4022837ec4ca17f8f7bcd8d",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
    "sec-ch-ua-platform": "\"macOS\"",
    "Content-Type": "application/json"
  },
...
```

## Configuration
Start your Canarytrace with following configurations:
- `REQUEST_LOG=allow` for collecting requests and response.
- `REQUEST_LOG_DEBUG=allow` for debugging parsing.
- `POST_DATA_PATH='data[0].type'` activate cherry-picking and search value in `postData` property with expression.
- `TRACE_ID_NAME='trace-id'` is name for extra header name with unique UUID.

## Log
Canarytrace print activities from RequestLog service into stdout.

**Successfully cherry picking**

```bash
[0-0] Canarytrace:RequestLog:CherryPicker:Parsed: requestId: 3262.126, url: https://your-web.com/api/v1/events/web, parsed: {"id":"","biskoId":"b8660f9237a440e1a82ffca485c57cb4","dmpStorageId":null,"properties":{}}
```

**Successfully paired requests and responses**

```bash
# url:count
[0-0] Canarytrace:RequestLog:Smoke https://your-web.com/:83
```

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).