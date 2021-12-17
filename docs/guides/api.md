---
id: api
title: API
sidebar_label: API
---

Canarytrace is distributed as a docker image and is run from command line. Behavior and functions are set using options. Some options are mandatory and some are optional. Canarytrace is based on WDIO v6 and therefore some options are described on [WDIO CLI Options page](https://webdriver.io/docs/clioptions.html).

> ### What you’ll learn
- How to run Canarytrace from the command line
- Options for Canarytrace settings
- All options are environment variables and they are used when running in both the docker and the kubernetes

## How to use api

## `c.report-*`

### Get failed test steps
---
```json title="GET /c.report-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "fullTitle",
    "errMessage"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "passed": "false"
          }
        }
      ]
    }
  }
}
```
### Get slowly test steps and exclude other
---
```json title="GET /c.report-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "fullTitle",
    "testStepDuration"
  ],
  "query": {
    "bool": {
      "must_not": [
        {
          "match": {
            "fullTitle": "Smoke performance audit"
          }
        }
      ],
      "must": [
        {
          "range": {
            "testStepDuration": {
              "gte": 5000
            }
          }
        },
        {
          "match": {
            "passed": true
          }
        }
      ]
    }
  }
}
```

## `c.audit-*`

### Get audits which don't suit of Core Web Vitals
---
```json title="GET /c.audit-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "audits.largest-contentful-paint.numericValue",
    "audits.interactive.numericValue",
    "audits.cumulative-layout-shift.numericValue",
    "finalUrl"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "audits.largest-contentful-paint.numericValue": {
              "gte": 4000
            }
          }
        },
        {
          "range": {
            "audits.interactive.numericValue": {
              "gte": 300
            }
          }
        },
        {
          "range": {
            "audits.cumulative-layout-shift.numericValue": {
              "gte": 0.25
            }
          }
        }
      ]
    }
  }
}
```

### Get audits with performance score between 70 and 90
---

```json title="GET /c.audit-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "categories.performance.score",
    "finalUrl"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "categories.performance.score": {
              "lte": 90
            }
          }
        },
        {
          "range": {
            "categories.performance.score": {
              "gte": 70
            }
          }
        }
      ]
    }
  }
}
```


## `c.performance-entries-*`

### Get entries with higher ResponseTime than 1000ms 
---
```json title="GET /c.performance-entries-*/_search"
{
  "size": 1,
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "responseTime",
    "name"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "timestamp": {
              "gte": "now-1h"
            }
          }
        },
        {
          "range": {
            "responseTime": {
              "gte": 1000
            }
          }
        }
      ]
    }
  },
  "sort": [
    {
      "timestamp": "desc"
    }
  ]
}
```
> ### Explanation of query
> - `size` return count of hits
> - `uuid`, `labels`, `timestamp`, `responseTime`, `name` return value of this labels
> - `query.bool.must[0].range.timestamp.gte` search all docs which are 1h old
> - `query.bool.must[1].range.responseTime.gte` return  all records that have higher responseTime than 1000ms

```json
{
  "took" : 31,
  "timed_out" : false,
  "_shards" : {
    "total" : 46,
    "successful" : 46,
    "skipped" : 44,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 3530,
      "relation" : "eq"
    },
    "max_score" : null,
    "hits" : [
      {
        "_index" : "c.performance-entries-2021.02.23",
        "_type" : "_doc",
        "_id" : "gE30zncBG-y-MkzOvzZA",
        "_score" : null,
        "_source" : {
          "responseTime" : 2522.4450000096112,
          "name" : "https://www.google-analytics.com/analytics.js",
          "uuid" : "7d7883e8-ce73-45f9-bee1-75b2a33a0075",
          "timestamp" : "2021-02-23T12:54:42.215Z",
          "labels" : [
            "canary=smoke-pro",
            "smoke-desktop, fra1"
          ]
        },
        "sort" : [
          1614084882215
        ]
      }
    ]
  }
}
```
> ### Explanation of result
> - `hits.total` = count of hits
> - `hits.hits[]` = collection of hits
> - `_id` = is unique identificator of records

### Get .css entries with higher TTFB than 100ms 
---
```json title="GET /c.performance-entries-*/_search"
{
  "size": 50,
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "ttfb",
    "name"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "query_string": {
            "default_field": "name",
            "query": "*css"
          }
        },
        {
          "range": {
            "ttfb": {
              "gte": 100
            }
          }
        }
      ]
    }
  },
  "sort": [
    {
      "timestamp": "desc"
    }
  ]
}
```

### Get Hero Elements which start rendering after 2 seconds
---
```json title="GET /c.performance-entries-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "fullTitle",
    "startTime"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "entryType": "mark"
          }
        },
        {
          "range": {
            "startTime": {
              "gte": 2000
            }
          }
        }
      ]
    }
  }
}
```

## `c.memory-*`

### Get all test steps for which it was measured more than 40MB used memory in a browser

```json title="GET /c.response-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "data.usedJSHeapSize",
    "testStep"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "data.usedJSHeapSize": {
              "gte": 40000000
            }
          }
        }
      ]
    }
  }
}
```


## `c.response-*`

### Get all javascripts which do not contain `headers.content-encoding=gzip` in the response header

```json title="GET /c.response-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "url",
    "headers.content-encoding"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "query_string": {
            "default_field": "headers.content-type",
            "query": "javascript"
          }
        }
      ],
      "must_not": [
        {
          "query_string": {
            "default_field": "headers.content-encoding",
            "query": "gzip"
          }
        }
      ]
    }
  }
}
```


### Get all responses transfer over network is higher than 500kB

```json title="GET /c.response-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "url",
    "headers.content-type",
    "encodedDataLength"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "encodedDataLength": {
              "gte": 500000
            }
          }
        }
      ]
    }
  }
}
```

## `c.coverage-audit-*`

### Get pages that don't use more than 25% of downloaded resources

```json title="GET /c.coverage-audit-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "percentUnused",
    "url"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "percentUnused": {
              "gte": 25
            }
          }
        }
      ]
    }
  }
}
```

## `c.smoke-title-*`

### Get smoke checks which returned wrong title

```json title="GET /c.smoke-title-*/_search"
{
  "_source": [
    "uuid",
    "labels",
    "timestamp",
    "entryUrl",
    "title"
  ],
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "entryUrl": "https://canarytrace.com/"
          }
        }
      ],
      "must_not": [
        {
          "match": {
            "title": "*Canarytrace Plug’n'Play stack*"
          }
        }
      ]
    }
  }
}
```

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).