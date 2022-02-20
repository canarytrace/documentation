---
id: coverage-audit
title: Coverage Audit
sidebar_label: Coverage Audit
---

> ### What you’ll learn
- What is Coverage Audit
- How to setup Coverage Audit

<a href="/docs/why/edition#canarytrace-pro"><span class="canaryBadge">Canarytrace Pro</span></a>

Canarytrace collects requests on resources e.g. (javascript and css) and measures how much percentage is not used. All data are saved into [`c.coverage-audit-*`](/docs/features/live-reporting#ccoverage-audit-) Elasticsearch index.
Coverage audit is ideal to monitor if you want to speed up web loading and if you want to save on data transfer in the cloud.

```json title="Example"
{
	"total": 685,
	"unused": 42,
	"percentUnused": 6,
	"url": "https://bat.bing.com/p/action/26080613.js",
	"labels": [
		"mode=canarytrace-smoke-pro-4.21.5",
		"engine=wdio",
		"develop002336"
	],
	"spec": "smoke.js",
	"testStep": "https://your-web.com",
	"uuidAction": "d2494b9f1089bb2348ef",
	"uuid": "6c0bdcb54d3dda801f1e6f6b44f59f17",
	"timestamp": "2022-02-20T23:23:46.631Z"
}
```

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).