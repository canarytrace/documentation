---
id: request-log
title: Request Log
sidebar_label: Request Log
---

> ### What you’ll learn
- What is Request Log

<a href="/docs/why/edition#canarytrace-pro"><span class="canaryBadge">Canarytrace Pro</span></a>

Canarytrace on the fly collects all requests and responses between browser and server. All data are saved into [`c.request-log-*`](/docs/features/live-reporting#crequest-log-) Elasticsearch index.

## Features
### Collects requests and responses
Canarytrace joins to devTools and via API download all requests and responses called between browser and server. All data are saved into Elasticsearch. [Example of saved request and response](/docs/features/live-reporting#crequest-log-) in Elasticsearch.

### Cherry picking
Canarytrace can pick data in `postData` property in requests and these can be used for subsequent search or categorization in Elasticsearch.

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


---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).