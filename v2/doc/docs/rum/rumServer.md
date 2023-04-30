---
sidebar_position: 5
description: Create a doc page with rich content.
title: RUM Server
tags:
  - rum
  - rumServer
---

> ### What you’ll learn
- What is a RUM Server?
- How the RUM Server run?
- How to set up the RUM Server?


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

The RUM Server expose a few REST API endpoints which are used by the RUM Client.

|Method|Endpoint|Description|
|-|-|-|
|`GET`|`/rum`|The init script calls this endpoint to obtain the RUM client|
|`POST`|`/rum`|The RUM client sends payloads to this endpoint.|
|`GET`|`/health`|This endpoint returns `Canarytrace RUM is ready!` if the RUM server is ready to use.|
|`POST`|`/rum/report-uri`|Endpoint for sending the Content Security Policy report from older browsers.|
|`POST`|`/rum/reporting-api`|Endpoint for sending the Content Security Policy Report from Google Chrome.|


### Security

:::info Data is kept within your system and not shared with third-party destinations
One major advantage is that the data collected by the RUM Client and stored via the RUM Server remains in your environment. The RUM Server does not send the collected data to any undefined destination.
::: 

## Docker image
The RUM Server is distributed via a Docker image, so you can deploy the RUM Server on various platforms such as localhost, cloud environments, Kubernetes, etc.
- This approach enables run the RUM Server as a plug-and-play solution in just a few minutes.
- You can run the RUM Server anywhere you need it, so the data from a particular country stays within that country.
- Thanks to the fact that the RUM Server runs on Docker, you can run multiple instances depending on the number of visits to your production.

:::tip Please always use a latest Docker image
- List of Docker image tags https://quay.io/repository/canarytrace/rum?tab=tags
:::

- Download the Docker image containing the RUM Server.
- Please do not permanently use our Docker repository with RUM Server for your production environments. 
- Always push downloaded the Docker image with the RUM Server to your Docker repository.
```bash
docker pull quay.io/canarytrace/rum:2.8.6
```

- Run and test on your localhost.
```bash title="Run Docker image"
docker run --name rum --rm -it -p 3000:3000 -e ELASTIC_CLUSTER -e ELASTIC_HTTP_AUTH -e LICENSE quay.io/canarytrace/rum:2.8.6
```
- `ELASTIC_CLUSTER` e.g. http://localhost:9200
- `ELASTIC_HTTP_AUTH` e.g. username:password. Remove if isn't used.
- `LICENSE` put your licence.
- Open `http://localhost:3000/health` address in your browser and you should see "Canarytrace RUM is a ready!".

```bash title="Log"
    ____  __  ____  ___
   / __ \/ / / /  |/  /
  / /_/ / / / / /|_/ / 
 / _, _/ /_/ / /  / /  
/_/ |_|\____/_/  /_/   
                       
Canarytrace RUM: https://canarytrace.com
Node.js: v18.15.0

2023-04-28T16:27:41.323Z RUM server listening on port 3000
2023-04-28T16:27:47.049Z GET /  
2023-04-28T16:27:51.318Z Queue size: 0, send into Elasticsearch when size of queue is min. 2
2023-04-28T16:27:54.696Z GET /health  
2023-04-28T16:27:54.758Z GET /favicon.ico  
...
```

Congratulations, the RUM Server is ready.


## Kubernetes
The Kubernetes environment is a preferred option for running the RUM Server. You can use our example deployment or deployment with [NGINX](https://www.nginx.com/).

To run the RUM Server, you need a Kubernetes deployment that includes the Docker image, resources, configurations, and additional parameters. We provide a deployment that you can use as is or modify to your preferences.

### Resources

The resource requirements depend on the amount of data that the RUM Client sends to the RUM Server, including the number of captured requests, user actions, events, and so on.
If you have a big traffic, you can run the RUM Server in a more instancies.


:::info How many resources we need?
- Start with the RUM Server on your minor pages or on an environment with lower visits.
- Measure used resources by the RUM Server on your Kubernetes cluster. If the RUM Server use 85% resources, please run the second instance ensure optimal performance. Alternatively, you could optimize the amount of data arriving from the RUM Client.
- [Resource units in Kubernetes](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes)
:::

To deploy the RUM Server on Kubernetes, there are several requirements that need to be met. Here is specifying the appropriate resource requests and limits.

|Resources|CPU Request|CPU Limits|Memory requests|Memory limits|
|-|-|-|-|-|
|The RUM Server|`100m`|`500m`|`300Mi`|`800Mi`|
|NGINX|`100m`|`500m`|`300Mi`|`800Mi`|
|Total|`200m`|`1000m`|`600Mi`|`1600Mi`|

### Deployment

All deployment objects necessary for running the RUM Server are packaged and distributed inside the Docker image. This includes any required configuration files, scripts, and dependencies needed for the deployment process.

#### Download the deployments scripts from the Docker image

```bash title="Download deployments scripts from docker image"
docker run --rm -it --entrypoint /bin/mv -v $(pwd):/deployments quay.io/canarytrace/rum:2.8.6 /opt/canary-rum/deployments/ /deployments/
```

```bash title="Print directory deployments"
ls -lah deployments 
drwxr-xr-x@ 5 rdpanek  staff   160B 28 dub 03:59 .
drwxr-xr-x  4 rdpanek  staff   128B 29 dub 07:46 ..
-rw-r--r--@ 1 rdpanek  staff   2,0K 28 dub 03:59 deployment.yaml
-rw-r--r--@ 1 rdpanek  staff   2,0K 28 dub 03:59 nginx-config.yaml
-rw-r--r--@ 1 rdpanek  staff   185B 28 dub 03:59 secret.yaml
```

All Kubernetes objects can be deployed using the `kubectl -n` command, followed by the name of the namespace and the `create` option. For example, to deploy a `secret.yaml` file, you would use the command `kubectl -n canarytrace create -f secret.yaml`.

#### Full example with NGINX
All of these objects can be used in production for deploying and managing the RUM Server and deploy it in order:

1. `namespace.yaml` Create your own namespace in Kubernetes. All objects will be created in the namespace `canarytrace`.
2. `nginx-config.yaml` Configuration for the NGINX web server.
3. `secret.yaml` Contains auth to the Elasticsearch, as well as a license for using the RUM Server.
4. `deployment.yaml` The deployment includes Docker images, configurations for the RUM Server, and resource requirements. It also utilizes a LoadBalancer.

:::note
Please open the `secret.yaml` and `deployment.yaml` files and make the necessary changes before deploying them to the Kubernetes cluster. Update the `secret.yaml` file with your correct secrets and in the `deployment.yaml` file, update the version of the RUM Server and its configuration according to your preferences.
:::

```bash title=Example
# create namespace
kubectl create -f namespace.yaml
# create config for NGINX in canarytrace namespace
kubectl -n canarytrace -f nginx-config.yaml
# create secret in canarytrace namespace
kubectl -n canarytrace -f secret.yaml
# create deployment in canarytrace namespace
kubectl -n canarytrace -f deployment.yaml
```

#### Check

You have created four objects in your Kubernetes cluster. If everything is okay, you can verify this by checking the running Kubernetes pods and printing their status.

Your `deployment.yaml` file contains definitions for both the RUM Server and NGINX. Therefore, when you deploy it in Kubernetes, it runs two Docker images. If the deployment is successful, the status of the `rum-****` [Pod](https://kubernetes.io/docs/concepts/workloads/pods/) should be Running, and in the READY column, it should show 2 running Docker containers out of two in total.

```bash title="Check your pod named rum"
kubectl -n canarytrace get pods
NAME                                         READY   STATUS      RESTARTS   AGE
rum-7f48fd769c-dzrkp                         2/2     Running     0          14d
```


**Without NGINX**

If you have your own NGINX or other solutions for providing HTTP2, you can use the deployment alone without NGINX.
Remove the NGINX Docker image and configuration from `deployment.yaml`, and then deploy it.


### Log
The RUM Server logs all interesting information. This includes access to your pages, endpoints, and the size of the payload received from the RUM Client.

#### Syntax
`dateTime | method | endpoint | href | size` and information about the queue with payloads received from the RUM Client and how they are sent to Elasticsearch.

```bash title="The RUM Server log"
2023-04-02T10:39:28.191Z RUM server listening on port 3000
2023-04-02T10:39:31.470Z GET /rum  
2023-04-02T10:39:34.112Z POST /rum https://www.your-comain.com/companies 1.665kB
2023-04-02T10:39:34.647Z POST /rum https://www.your-comain.com/companies 33.259kB
2023-04-02T10:39:38.192Z Queue size: 1, send into Elasticsearch when size of queue is min. 2
2023-04-02T10:39:39.147Z POST /rum https://www.your-comain.com/orders 1.862kB
2023-04-02T10:39:39.660Z POST /rum https://www.your-comain.com/orders 33.357kB
2023-04-02T10:39:44.148Z POST /rum https://www.your-comain.com/orders 1.195kB
2023-04-02T10:39:44.670Z POST /rum https://www.your-comain.com/orders 32.982kB
2023-04-02T10:39:48.193Z Queue size: 3, save data into Elasticsearch.
...
```

- A line that starts with `GET` indicates that there is an initialization script on a certain page that calls the RUM Client.
- A line that starts with `POST` indicates that the RUM Client is sending a payload to the RUM Server.
- A line that starts with `Queue size...` provides information about the required size of the queue with payloads waiting to be sent to Elasticsearch, or it provides information, that queue with payload was stored in Elasticsearch.

## Settings
Nastavení a vlastnosti se provádí pomocí environment variables.
All parameters of the RUM Server can be changed via environment variables directly in the `deployment.yaml` file.

|Property|Default value|Description|
|-|-|-|
|`SERVER_PORT`|`3000`|The RUM Server port.|
|`BODY_PARSER_LIMIT`|`10mb`|There is a limit for the size of the payload that can be received from the RUM Client.|
|`MIN_QUEUE_SIZE`|`2`|This parameter determines the maximum number of payloads that can be stored in the RUM Server's queue to be sent to Elasticsearch. Increasing this queue size will reduce the frequency of data transmission to Elasticsearch, resulting in larger request with bulk data sizes being stored in Elasticsearch.|
|`STORE_BULK_INTERVAL`|`10000`|The frequency of data transmission to Elasticsearch, in milliseconds.|
|`ELASTIC_CLUSTER`||Path to your Elasticsearch cluster. e.g. `https://XYZ.eu-central-1.aws.cloud.es.io:9243`|
|`ELASTIC_HTTP_AUTH`||The username and password required to access your Elasticsearch cluster, e.g. `elastic:password`.|
|`ELASTIC_TIMEOUT`|`5000`|In ms.|
|`ELASTIC_OBSERVABILITY`|`false`|To print all Elasticsearch configuration and payloads, set the `allow` value to activate this feature.|
|`INDEX_PREFIX`|`c.`|Prefix for the name conventions used for Elasticsearch indices, such as `c.rum.metrics-*`.|
|`LABELS`||You can add a string that will be included in the arrived payload from the RUM Client and added to the `.labels` property. E.g. `environment=development` or `app14`.|
|`ENV_PRINT`|`false`|Print all environment variables. Set the `allow` value for activate this feature.|