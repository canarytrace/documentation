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
|`c.rum.csp.reporting-*`|An index of reports for Content Security Policy violations from Google Chrome, Edge, Opera, Chrome Android, Opera Android, Samsung Internet, and WebView Android.|
|`c.rum.csp.uri-*`|An index of reports for Content Security Policy violations from Firefox, Safari, Firefox for Android, and Safari for iOS.|


## Settings and index templates

If the RUM Server send the first data to Elasticsearch without any settings, Elasticsearch will create a new index and store data. For functions such as aggregation, indexing, and search, Elasticsearch needs data to be indexed. Elasticsearch tries, by default, to identify the type of data arrived from the RUM Server by analyzing which data are strings, numbers, booleans, etc., and which data will be used for aggregating.

In this case, aggregation, searching, or saving of subsequent data may not work properly because Elasticsearch analyzes the first set of data received and maps the stored data based on the results of its analysis.

The RUM server sends the payload in pieces depending on the data available from the RUM client. Therefore, the first payload stored in Elasticsearch may not have the full payload, but only a piece of it. If the RUM server sends a second or third payload to Elasticsearch with a different data schema, Elasticsearch may return an exception.


Therefore we recommend settings mapping of the two indices `c.rum.metrics-*` and `c.rum.entries-*`

:::tip
- Learn more about [Index templates](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-templates.html)
:::

### `c.rum.metrics-*`

```javascript
curl --location --request PUT 'https://your-elasticsearch:9243/_template/c.rum.metrics' \
--header 'Content-Type: application/json' \
--data '{
	"index_patterns": ["c.rum.metrics-*"],
	"settings": {
		"number_of_shards": 2,
		"number_of_replicas": 1,
		"index.translog.durability": "async",
		"index.refresh_interval": "10s"
	},
	"version": 2,
	"mappings": {
		"properties": {
			"attributes": {
				"properties": {
					"browser": {
						"type": "keyword",
						"ignore_above": 256
					},
					"browserVersion": {
						"type": "keyword",
						"ignore_above": 256
					},
					"connection": {
						"properties": {
							"downlink": {
								"type": "short"
							},
							"effectiveType": {
								"type": "text",
								"fields": {
									"keyword": {
										"type": "keyword",
										"ignore_above": 256
									}
								}
							},
							"rtt": {
								"type": "integer"
							},
							"saveData": {
								"type": "boolean"
							}
						}
					},
					"device": {
						"properties": {
							"charging": {
								"type": "boolean"
							},
							"cpu": {
								"type": "integer"
							},
							"memory": {
								"type": "integer"
							},
							"type": {
								"type": "keyword"
							},
							"platform": {
								"type": "text",
								"fields": {
									"keyword": {
										"type": "keyword",
										"ignore_above": 256
									}
								}
							}
						}
					},
					"labels": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"ua": {
						"type": "keyword",
						"ignore_above": 256
					},
					"uaParser": {
						"type": "text"
					}
				}
			},
			"audits": {
				"properties": {
					"crossOriginIsolated": {
						"type": "boolean"
					}
				}
			},
			"metrics": {
				"properties": {
					"cls": {
						"type": "long"
					},
					"domComplete": {
						"type": "long"
					},
					"domContentLoadedDuration": {
						"type": "long"
					},
					"domContentLoadedEventEnd": {
						"type": "long"
					},
					"domContentLoadedEventStart": {
						"type": "long"
					},
					"duration": {
						"type": "long"
					},
					"fcp": {
						"type": "long"
					},
					"fid": {
						"type": "long"
					},
					"fp": {
						"type": "long"
					},
					"inp": {
						"type": "long"
					},
					"lcp": {
						"type": "long"
					},
					"renderDuration": {
						"type": "long"
					},
					"responseTime": {
						"type": "long"
					},
					"ttfb": {
						"type": "long"
					}
				}
			},
			"session": {
				"properties": {
					"duration": {
						"type": "long"
					},
					"id": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"lastLoop": {
						"type": "long"
					},
					"startTime": {
						"type": "long"
					}
				}
			},
			"timestamp": {
				"type": "date"
			},
			"view": {
				"properties": {
					"actions": {
						"properties": {
							"name": {
								"type": "text",
								"fields": {
									"keyword": {
										"type": "keyword",
										"ignore_above": 256
									}
								}
							},
							"pointerType": {
								"type": "text",
								"fields": {
									"keyword": {
										"type": "keyword",
										"ignore_above": 256
									}
								}
							},
							"target": {
								"type": "text",
								"fields": {
									"keyword": {
										"type": "keyword",
										"ignore_above": 256
									}
								}
							},
							"timeStamp": {
								"type": "float"
							},
							"type": {
								"type": "text",
								"fields": {
									"keyword": {
										"type": "keyword",
										"ignore_above": 256
									}
								}
							}
						}
					},
					"fps": {
						"properties": {
							"fps": {
								"type": "long"
							},
							"timeStamp": {
								"type": "long"
							}
						}
					},
					"hash": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"host": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"hostname": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"href": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"id": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"longTasks": {
						"properties": {
							"duration": {
								"type": "long"
							},
							"name": {
								"type": "text",
								"fields": {
									"keyword": {
										"type": "keyword",
										"ignore_above": 256
									}
								}
							},
							"startTime": {
								"type": "long"
							}
						}
					},
					"marks": {
						"properties": {
							"detail": {
								"type": "text",
								"fields": {
									"keyword": {
										"type": "keyword",
										"ignore_above": 256
									}
								}
							},
							"name": {
								"type": "text",
								"fields": {
									"keyword": {
										"type": "keyword",
										"ignore_above": 256
									}
								}
							},
							"startTime": {
								"type": "long"
							}
						}
					},
					"origin": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"pathname": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"port": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"protocol": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"referer": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"resourceTypes": {
						"properties": {
							"css": {
								"properties": {
									"count": {
										"type": "long"
									}
								}
							},
							"fetch": {
								"properties": {
									"count": {
										"type": "long"
									}
								}
							},
							"image": {
								"properties": {
									"count": {
										"type": "long"
									}
								}
							},
							"other": {
								"properties": {
									"count": {
										"type": "long"
									}
								}
							}
						}
					},
					"search": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					},
					"startTime": {
						"type": "long"
					},
					"usedMemory": {
						"type": "long"
					},
					"visibility": {
						"type": "text",
						"fields": {
							"keyword": {
								"type": "keyword",
								"ignore_above": 256
							}
						}
					}
				}
			}
		}
	}
}'
```

### `c.rum.entries-*`

```javascript
curl --location --request PUT 'https://your-elasticsearch:9243/_template/c.rum.entries' \
--header 'Content-Type: application/json' \
--data '{
	"index_patterns": ["c.rum.entries-*"],
	"settings": {
		"number_of_shards": 2,
		"number_of_replicas": 1,
		"index.translog.durability": "async",
		"index.refresh_interval": "10s"
	},
	"version": 1,
	"mappings": {
		"properties": {
			"connectEnd": {
				"type": "float"
			},
			"connectStart": {
				"type": "float"
			},
			"decodedBodySize": {
				"type": "integer"
			},
			"domComplete": {
				"type": "float"
			},
			"domContentLoadedEventEnd": {
				"type": "float"
			},
			"domContentLoadedEventStart": {
				"type": "float"
			},
			"domInteractive": {
				"type": "float"
			},
			"domainLookupEnd": {
				"type": "float"
			},
			"domainLookupStart": {
				"type": "float"
			},
			"duration": {
				"type": "float"
			},
			"encodedBodySize": {
				"type": "integer"
			},
			"sequence": {
				"type": "long"
			},
			"entryType": {
				"type": "keyword"
			},
			"fetchStart": {
				"type": "float"
			},
			"initiatorType": {
				"type": "keyword"
			},
			"loadEventEnd": {
				"type": "float"
			},
			"loadEventStart": {
				"type": "float"
			},
			"name": {
				"type": "keyword"
			},
			"nextHopProtocol": {
				"type": "keyword"
			},
			"redirectCount": {
				"type": "short"
			},
			"redirectEnd": {
				"type": "float"
			},
			"redirectStart": {
				"type": "float"
			},
			"requestStart": {
				"type": "float"
			},
			"responseEnd": {
				"type": "float"
			},
			"responseStart": {
				"type": "float"
			},
			"responseTime": {
				"type": "float"
			},
			"ttfb": {
				"type": "float"
			},
			"secureConnectionStart": {
				"type": "float"
			},
			"startTime": {
				"type": "float"
			},
			"toJSON": {
				"type": "object"
			},
			"transferSize": {
				"type": "long"
			},
			"type": {
				"type": "keyword"
			},
			"unloadEventEnd": {
				"type": "float"
			},
			"unloadEventStart": {
				"type": "float"
			},
			"workerStart": {
				"type": "float"
			},
			"timestamp": {
				"type": "date"
			},
			"transactionId": {
				"type": "keyword"
			},
            "spanId": {
				"type": "keyword"
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
}'
```


## Test environment

```bash title="Run Elasticsearch and Kibana in a Docker"
# Run Elasticsearch
docker run --name elasticsearch --net canary --rm -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_SETTING_XPACK_SECURITY_ENABLED=false -e ES_SETTING_ACTION_DESTRUCTIVE__REQUIRES__NAME=false docker.elastic.co/elasticsearch/elasticsearch:8.7.1 bin/elasticsearch -Enetwork.host=0.0.0.0

# Run Kibana
docker run --name kibana --net canary --rm -d -p 5601:5601 docker.elastic.co/kibana/kibana:8.7.1
```