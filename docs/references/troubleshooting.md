---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
custom_edit_url: false
description: Canarytrace troubleshooting
keywords:
  - test
  - test1
  - test2
---

> ### What you’ll learn
- This glossary contains explain used technologies and terms in the Canarytrace ecosystem.


## Elasticsearch

### ResponseError: parse_exception

- `-e ELASTIC_REQUEST_COMPRESSION=allow`
- [CLI Options](/docs/guides/cli) 

Some version of elasticsearch return ResponseError: `parse_exception` and in this case don't use compression.
```
[0-0] {
  root_cause: [ { type: 'parse_exception', reason: 'request body is required' } ],
  type: 'parse_exception',
  reason: 'request body is required'
}
```

### TimeoutError: Request timed out
- `-e ELASTIC_TIMEOUT=10000`
- [CLI Options](/docs/guides/cli) 

Default value of `ELASTIC_TIMEOUT` option is very small. You can set higher requestTimeout and pingTimeout e.g. `-e ELASTIC_TIMEOUT=10000` but even if the default value is not sufficient, consider upgrading the network or increasing the sizing of the elastic cluster.

```
# err message
on:response:err: requestId: 1
[0-0] TimeoutError: Request timed out
    at ClientRequest.<anonymous> (/Users/rdpanek/HTDOCS/teststack/canarytrace/node_modules/@elastic/elasticsearch/lib/Connection.js:89:18)
    at ClientRequest.emit (events.js:311:20)
...
```

### Live reporting debugging
- `-e ELASTIC_OBSERVABILITY=allow`
- [CLI Options](/docs/guides/cli) 

This print settings of elatsicsearch connection, request and response events and payload to stdout.

```
# settings
[0-0] {
  node: 'http://localhost:9200',
  maxretries: 5,
  log: 'error',
  requestTimeout: '100',
  pingTimeout: '100',
  auth: { username: 'elastic', password: '1fKP17UklmiI14rekO6iCx9r' },
  ssl: { rejectUnauthorized: false }
}

# payload
[0-0] payload {
  uuid: '3018371a-0e53-4625-9f9a-ce50f0692892',
  seleniumCluster: 'localhost',
  baseUrl: 'https://www.tesla.com/',
  capabilities: {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': { args: [Array] }
  },
  event: 'testStart',
  sessionId: 'e299f9137aaac714ff68d35e357c8cf0',
  sequence: 1,
  env: 'localhost',
  spec: './tests/tesla/smoke.js',
  timestamp: '2020-07-31T11:39:24.076Z'
}

# request
[0-0] on:request: requestId: 1
[0-0] {
  body: null,
  statusCode: null,
  headers: null,
  warnings: null,
...

# response
[0-0] on:response: requestId: 1
[0-0] {
  body: {
    _index: 'c.report-2020.07.31',
    _type: '_doc',
    _id: 'W4KrpHMBFgRwPBhYah66',
    _version: 1,
    result: 'created',
    _shards: { total: 2, successful: 1, failed: 0 },
    _seq_no: 0,
    _primary_term: 1
  },
  statusCode: 201,
  headers: {
    location: '/c.report-2020.07.31/_doc/W4KrpHMBFgRwPBhYah66',
    'content-type': 'application/json; charset=UTF-8',
    'content-length': '186'
  },
...
```

Every request and response has the same requestId e.g. `[0-0] on:response: requestId: 1` each additional request creates an incremental requestId.


## Kibana

### Visualizations aren’t smoothly

There may be several reasons for this
- Your monitor script contains some errors. Please use `kubectl -n canary logs -f <name-of-pod> -c` canary for check logs, or you can check `.filebeat` index in a Kibana
- You don’t have sufficient resources of your k8s cluster for run Canarytrace instance.

![Visualizations aren’t smoothly](../../static/docs-img/kibana-visu-arent-smoothly.png)

---

Do you found some mistake or have any questions, [please create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍