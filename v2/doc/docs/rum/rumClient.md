---
sidebar_position: 4
description: RUM Client is a client part of the Canarytrace RUM. Is it a small piece of a javascript, which gathering data from a web browser about a web application and user behavior and send them into RUM Server.
title: RUM Client
tags:
  - rum
  - rumClient
---

> ### What you’ll learn
- What is a RUM Client
- How to use of the RUM Client

## What is a RUM Client
RUM Client is a client part of the Canarytrace RUM. Is it a small piece of a javascript, which gathering data from a web browser about a web application and user behavior and send them into [RUM Server](./rumServer).

- RUM Client gathering data from a [WebApis](https://developer.mozilla.org/en-US/docs/Web/API) directly from the web browser. Thanks to this, are the metrics and measurements accurate - so, the web browser is a guarantor of the results and values.
- RUM Client gathering many metrics about your web application, about a client web browser, information about client device, about a user actions and behavior and errors. The obtained data are sent to the [RUM Server](./rumServer) for storage in the database and analysis.

:::note RUM Client does not slow down your application
Most of the data are provided by the web browser e.g. Google Chrome, which measures and obtains information about your web application for its own use. Canarytrace RUM only uses data from the browser, it does not measure anything itself.
:::

## How to start
:::tip
You must start the [RUM Server](./rumServer) before proceeding. Make sure, that [RUM Server](./rumServer) expose endpoint `/rum` and that it is available for your frontend.
:::

### Implementation
For start of gathering data from your frontend, you must insert the RUM Client javascript into your HTML template. That's all.
The RUM Client javascript insert before `</head>` tag into every HTML template.

```javascript title="Minimal configuration."
<script>
  (function(w,d,u,a,o){
  w=w[o]=w[o];w=document.createElement(u);w.async=1;w.id=o;w.src=a
  o=d.getElementsByTagName(u)[0];o.parentNode.insertBefore(w,o)
  })(window,document,'script','https://your-domain.com/rum','CRUM')
</script>
```


```javascript title="Configuration with additional settings."
<head>
  <!-- your client scripts -->
  ...
  <!-- insert before </head> element -->
  <script>
    (function(w,d,u,a,o){
    w=w[o]=w[o];w=document.createElement(u);w.async=1;w.id=o;w.src=a
    o=d.getElementsByTagName(u)[0];o.parentNode.insertBefore(w,o)
    })(window,document,'script','https://your-domain.com/rum','CRUM')
    CRUM = {
      samplingRate: 3000,
      viewId: 'homePageManual',
      labels: 'env=production, versionApp=1',
      trackResources: false,
      trackHeroes: false,
      trackErrors: false,
      trackConsole: false,
    }
  </script>
</head>
```

:::tip Check, that RUM Client works properly.
Open the web page and DevTools on Network tab and you should see requests with name `rum`
:::

### Debugging
The RUM client works in silent mode, meaning that it only writes errors to the browser console. If you want to see the lifecycle of the RUM client and the data being sent to the RUM server, you can turn on debug mode. Add only query string into your address bar.

- `https://your-domain.com/?debug=1` Print the lifecycle of the RUM Client and the data which is being send to the RUM Server.
- `https://your-domain.com/?debug=dry` The same as `debug=1` but data is not being sent.


### Lifecycle

![Example banner](./assets/rum-phases.webp)

**Init phase**

The data collector in the RUM Client wait on `load` event. This event is run in time, when is whole page is loaded with all dependencies such as CSS, Javascript, iframes and images.
- Init phase: After loading the RUM Client JavaScript from the RUM Server, this script immediately runs gathering first events and metrics such as Core Web Vitals.
- First round: In the first round, after the `load` event, the data collector runs and data from the init phase, as well as new data from the first round, is sent to the RUM server.

**Sampling**
- The RUM Client works in loops by setting an interval, which is named sampling. During one sample, new metrics and data are collected. Thanks to sampling, the RUM Client can monitor browser events and user activities. After every sample ends, new data is saved to the RUM Server.
- The duration of one sample can be set by the `samplingRate` property. After one sample ends, a new sample starts. So, during the lifecycle of one page, the RUM Client can send many samples one by one to the RUM Server.
- Every sample contains data or metrics that are available during the currently running sample. For example, in sample 1 there may be data from network and HeroElements, while in sample 2 there may be data about page load or FPS, and subsequent samples may contain data about user events such as clicking on a button.


## Settings

You can insert the RUM client on every page you want to measure, and you can customize it differently for each page based on your preferences. Some pages may be more important than others, so you can name each page as you wish. For less important pages, you can collect only user visits, while for important pages, you can collect all data about user devices, activities, network traffic, etc.


### CRUM Properties

|Property|Description|
|-|-|
|`samplingRate`|The RUM Client collects data from Web APIs during a running sample and sends the data to the RUM Server at the end of the sample's lifecycle. The duration of one sample can be set by the `samplingRate` property. Once a sample ends, the RUM Client starts the next sample. Default value is 5000 ms.|
|`entriesRate`|The Entries refer to collections of requests made between a web browser and server. Some web applications may have a large number of requests which can cause problems for the RUM Client in sending them to the RUM Server. To handle this, the RUM Client splits the entries queue into smaller pieces and sends them one by one until the queue is empty. The RUM Client sends data from samples separately from the entries. Typically, the first 100 entries are the most important for your analysis. Default value is 500 ms.|
|`maxEntries`|Number of entries sent in a single request to the RUM Server from a queue of entries. If the payload size of these entries exceeds a certain limit, the RUM Server will reject the request and keep it in a pending state. Default value is 50.|
|`ignoreResources`|The collector will ignore entries that contain certain strings in their URLs. By default, the value `/rum` is used, so any requests with the name `rum` will be ignored. If you want to collect all requests, you can set the value to `no`. Default value is `/rum`.|
|`savingMode`|In saving mode, the RUM client compares the previous payload to the latest payload. If the latest payload does not contain any new data, then the payload will not be sent to the RUM server. Default value is `true`|
|`newSessionAfter`|After what period of user inactivity on the page should a new `session.id` and `session.startTime` be created? User inactivity means that the user closes the page and later reopens it. Default value is 300 ms|
|`stopCollectorAfter`|Stop the collector and sending payload to the RUM server in case, that a user is not actively using the page, although it is open, but hidden. The collector is re-run when the page will be again visible and is created a new `session.id` a `session.startTime`. If you want to collect data in multi-window applications, it is useful to set a higher value rather than a lower value. Default is 60 s
|`viewId`|Name of the opened page. E.g. `'home-page'`. If the `viewId` is not set, the RUM Client will use the currently visible pathname as the name of the page (e.g. `/product-a`)|
|`labels`|Labels can be added to a payload to mark data. These labels are useful for later analysis, sorting, and searching. An example label is `'env=production, versionApp=12'`. Labels can help to provide additional context and metadata about the data being collected, which can make it easier to understand and analyze the data later on.|
|`trackResources`|The RUM Client will be collect resources / entries. Default is `true`|
|`trackHeroes`|The RUM Client will be collect a HeroElement events. Default is `true`|
|`trackConsole`|The RUM Client will be collect the browser console message such as `debug`,`warn` and `error`. Collecting console messages can be useful for monitoring and troubleshooting purposes, as it can provide insight into any errors or issues that users may be encountering while using the website or application. Default is `true`|

### CRUM Functions

Thanks to CRUM Functions, you can add additional information into a running sample during a whole the lifecycle of the web application or during the user activities.

When the RUM Client starts after the `load` event, you can access the functions through the RUM object named `CRUM`.

|Function|Description|
|-|-|
|`CRUM.setViewId('string')`|Set a new `viewId`. Is useful especialy for the SPA applications to set a custom view ID that is associated with the performance data collected by the RUM Client. In a web application with soft navigation, where the page content changes dynamically without a full page reload, setting a custom view ID can help you distinguish between different views and track their performance separately.|
|`CRUM.addToLabels('env=UAT')`|Add another label. Label added via this function will be added into every samplers until to end of lifecycle actual page.|
|`CRUM.addEvent('addToBasket')`|Allows you to store arbitrary values during the lifecycle of a web application. For example, form contents, user actions, request results, etc. This function allows you to add custom events with associated data to the RUM monitoring data. For example, you could track when a user adds an item to their shopping cart, along with the details of the item they added. By adding custom events with relevant data, you can gain deeper insights into how users are interacting with your web application and identify areas for improvement.|

#### Examples

```javascript title=CRUM.addEvent()
// minimal, first parameter is mandatory
CRUM.addEvent('logout')

// add event with context. Second parameter is optional.
CRUM.addEvent('addToBasket', {
  'product': 'iPhone',
  'variant': [13,14],
  'soldout': false
})
```

```javascript title="CRUM.addToLabels()"
// add username from html into the labels
let userName = $x('//a[@id="lnkUserProfile"]/text()')[0].nodeValue
CRUM.addToLabels(`user=${userName}`)
```

## Limitations
The RUM client can obtain the most data from Google Chrome because this browser has many APIs and focuses on adopting new web standards and improving web performance.

Everything depends on the available APIs that each web browser offers. Google Chrome offers many APIs that provide important data about the browser, web app, and user activities. However, some browsers do not have certain APIs, and in these cases, the RUM Client returns empty values.