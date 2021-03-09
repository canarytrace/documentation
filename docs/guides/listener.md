---
id: listener
title: Canarytrace Listener
sidebar_label: Listener
custom_edit_url: false
description: Analyze metrics and alerting by thresholds
keywords:
  - canarytrace
  - elaticsearch
  - alerting
  - metrics
  - thresholds
---

> ### What you’ll learn
- You will get a basic overview of architecture

The architecture of Canarytrace is based on dockerized components, which are orchestrated in [Kubernetes](https://kubernetes.io/) or [OpenShift](https://www.openshift.com/). Thanks to this approach is easy deploy Canarytrace to in cloud e.g. [AWS](https://aws.amazon.com/), [Google Cloud Engine](https://cloud.google.com/), [DigitalOcean](https://www.digitalocean.com/), [Azure Cloud](https://azure.microsoft.com/) etc. or in your own datacenter where is possible install of Kubernetes.

## Rules

| # | title | Index | Condition | Min count /hour | Score |
|-|:-:|:-:|:-:|-|-|
| 1 | Failed check your page! | c.report | test step failed | 2 | 10 |
| 2 | Encoding of response with Javascript files must contains gzip or brotli compression. | c.response | gzip or br missing in headers.content-encoding | 10 | 40 |
| 3 | Encoding of response with CSS files must contains gzip or brotli compression. | c.response | gzip or br missing in headers.content-encoding | 10 | 40 |
| 4 | Higher response time. | c.performance-entries | > 3000ms | 10 | 40 |
| 5 | WebVitals LCP exceeded. | c.audit | > 2500ms | 5 | 40 |
| 6 | WebVitals TTI exceeded. | c.audit | > 5000ms | 5 | 40 |
| 7 | WebVitals CLS exceeded. | c.audit | > 0.1 | 5 | 40 |
| 8 | LoadEventEnd exceeded. | c.performance-entries | > 4000ms | 5 | 40 |



| Description | Score |
|-|-|
| needs fix! | 0-30 |
| needs improvement! | 31-70 |
| good job! | 71-100 |


![Kibana index](../../static/docs-img/listener-slack-alert-red.png)


![Kibana index](../../static/docs-img/listener-slack-alert.png)


![Kibana index](../../static/docs-img/listener-email-alert.png)



![Kibana index](../../static/docs-img/listener-kibana-index.png)


```yaml title='sdasddasd'
{
  "type": "events",
  "rule": "cldr",
  "tags": [
    "webApp",
    "monitoring"
  ],
  "kibana_endpoint": "https://abc.gcp.cloud.es.io:9243",
  "score": 40,
  "title": "WebVitals LCP exceeded.",
  "description": "Point in the page load timeline when the page's main content has likely loaded, https://web.dev/lcp/, total 10 exceeded.",
  "documents": [
    {
      "_index": "c.audit-2021.03.09",
      "_id": "15K_F3gBTSVqKz9Gc_EY",
      "timestamp": "2021-03-09T16:08:45.962Z"
    },
    {
      "_index": "c.audit-2021.03.09",
      "_id": "cZK-F3gBTSVqKz9G8fFp",
      "timestamp": "2021-03-09T16:08:12.763Z"
    },
    {
      "_index": "c.audit-2021.03.09",
      "_id": "u5K-F3gBTSVqKz9GUvAc",
      "timestamp": "2021-03-09T16:07:32.057Z"
    },
    {
      "_index": "c.audit-2021.03.09",
      "_id": "FpK9F3gBTSVqKz9GxvCt",
      "timestamp": "2021-03-09T16:06:56.359Z"
    },
    {
      "_index": "c.audit-2021.03.09",
      "_id": "YJK9F3gBTSVqKz9GJ--j",
      "timestamp": "2021-03-09T16:06:15.564Z"
    },
    {
      "_index": "c.audit-2021.03.09",
      "_id": "eJK6F3gBTSVqKz9Gqu7h",
      "timestamp": "2021-03-09T16:03:32.563Z"
    },
    {
      "_index": "c.audit-2021.03.09",
      "_id": "df-6F3gB48LFUj19I2XP",
      "timestamp": "2021-03-09T16:02:58.065Z"
    },
    {
      "_index": "c.audit-2021.03.09",
      "_id": "Iv-5F3gB48LFUj19omXh",
      "timestamp": "2021-03-09T16:02:25.057Z"
    },
    {
      "_index": "c.audit-2021.03.09",
      "_id": "iP-5F3gB48LFUj19I2SC",
      "timestamp": "2021-03-09T16:01:52.453Z"
    },
    {
      "_index": "c.audit-2021.03.09",
      "_id": "o5K4F3gBTSVqKz9Ggu2f",
      "timestamp": "2021-03-09T16:01:11.254Z"
    }
  ],
  "timestamp": "2021-03-09T16:10:11+00:00"
},
"fields": {
  "documents.timestamp": [
    "2021-03-09T16:08:45.962Z",
    "2021-03-09T16:08:12.763Z",
    "2021-03-09T16:07:32.057Z",
    "2021-03-09T16:06:56.359Z",
    "2021-03-09T16:06:15.564Z",
    "2021-03-09T16:03:32.563Z",
    "2021-03-09T16:02:58.065Z",
    "2021-03-09T16:02:25.057Z",
    "2021-03-09T16:01:52.453Z",
    "2021-03-09T16:01:11.254Z"
  ],
  "timestamp": [
    "2021-03-09T16:10:11.000Z"
  ]
}
```

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).