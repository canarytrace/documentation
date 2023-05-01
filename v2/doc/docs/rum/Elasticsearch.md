---
sidebar_position: 4
description: Elasticsearch
title: Elasticsearch
tags:
  - rum
  - elasticsearch
---

> ### What you’ll learn
- What is a Elasticsearch?
- How the RUM Server run?
- How to set up the RUM Server?


## Why Elasticsearch
The RUM Server store data arrived from the RUM Client into [Elasticsearch](https://www.elastic.co/elasticsearch/). We use the Elasticsearch as a database for analyze data from the Canarytrace Synthetic and from the Canarytrace RUM. 

Elasticsearch is a timeseries database that contains indices with data from the RUM Server. Each index is analogous to a table in a relationship database, such as MSSQL. The naming convention is `c.index-name.*`, where `c.` is the namespace for data from the Canarytrace toolset, such as Canarytrace RUM. `index-name` contains data for the domain, for example, `c.metrics.*` contains metrics, and the asterisk represents the date because a new index is created every day with the date in its name."

:::caution Before the first use
Please read about the [Settings](./Elasticsearch#setup) of the indices.
:::

## Indices

The RUM server sends data to Elasticsearch into to four indices. If an index does not exist, Elasticsearch will automatically create it when the RUM server sends the first set of data.

:::note
You may only see two indices, which means that the RUM server is not sending data from the CSP reporter. You should always see the `c.rum.metrics-*` index, and if it is not present, it could indicate that the RUM server is not working or that the RUM client is not sending any data.
:::

### List of indices

|Indices name|Description|
|-|-|
|`c.rum.metrics-*`|Main index which contains metrics, user actions, attributes etc. This inde will be exists always.|
|`c.rum.entries-*`|Secondary important index with entries (requests called from the browser) with their timing.|
|`c.rum.csp.reporting-*`|Index for reporting Content Security Policy violation from the Google Chrome.|
|`c.rum.csp.uri-*`|Index for reporting Content Security Policy violation from other browsers.|


## Settings

If the RUM Server send the first data to Elasticsearch without any settings, Elasticsearch will create a new index and store data. For functions such as aggregation, indexing, and search, Elasticsearch needs data to be indexed. Elasticsearch tries, by default, to identify the type of data arrived from the RUM Server by analyzing which data are strings, numbers, booleans, etc., and which data will be used for aggregating.

In this case, aggregation, searching, or saving of subsequent data may not work properly because Elasticsearch analyzes the first set of data received and maps the stored data based on the results of its analysis.

The RUM server sends the payload in pieces depending on the data available from the RUM client. Therefore, the first payload stored in Elasticsearch may not have the full payload, but only a piece of it. If the RUM server sends a second or third payload to Elasticsearch with a different data schema, Elasticsearch may return an exception.


```javascript
{
	"index_patterns": ["{{elastic.index.prefix}}report-*"],
	"settings": {
		"number_of_shards": 2,
		"number_of_replicas": 1,
		"index.translog.durability": "async",
		"index.refresh_interval": "10s"
	},
	"version": 2,
	"mappings": {
		"properties": {
			"uuid": {
				"type": "keyword"
			},
			"uuidAction": {
				"type": "keyword"
			},
			"title": {
				"type": "keyword"
			},
			"fullTitle": {
				"type": "keyword"
			},
			"parent": {
				"type": "keyword"
			},
			"baseUrl": {
				"type": "keyword"
			},
			"errMessage": {
				"type": "text",
				"fields": {
					"raw": {
						"type": "keyword"
					}
				}
			},
			"errType": {
				"type": "keyword"
			},
			"event": {
				"type": "keyword"
			},
			"sequence": {
				"type": "short"
			},
			"passed": {
				"type": "boolean"
			},
			"sessionId": {
				"type": "keyword"
			},
			"spec": {
				"type": "keyword"
			},
			"attachments": {
				"type": "keyword"
			},
			"testStepDuration": {
				"type": "long"
			},
			"totalRunnerDuration": {
				"type": "long"
			},
			"totalTestStepsDuration": {
				"type": "long"
			},
			"timestamp": {
				"type": "date"
			},
			"capabilities": {
				"properties": {
					"browserName": {
						"type": "keyword"
					},
					"goog:chromeOptions": {
						"properties": {
							"args": {
								"type": "keyword"
							}
						}
					}
				}
			},
			"labels": {
				"type": "text",
				"fields": {
					"raw": {
						"type": "keyword"
					}
				}
			}
		}
	}
}
```


## Development environment