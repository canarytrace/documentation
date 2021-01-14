---
id: lighthouse
title: Lighthouse 6.4.1
sidebar_label: Lighthouse 6.4.1
custom_edit_url: false
---

Canarytrace Professional and Canarytrace Smoke Pro use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for performance audit and for obtaining metrics such as [Web Vitals](https://web.dev/vitals/) .

Canarytrace Smoke Pro automatically run Lighthouse on every URL and [lhr](https://github.com/GoogleChrome/lighthouse/blob/4d3bda1f14540266eb37f7e2ba8cabbc668db11d/docs/understanding-results.md) object stored to Elasticsearch. Canarytrace Professional run Lighthouse at any time and on any tested site.

**Result of Performance Audit (lhr object) stored to ```c.audit-*``` index**

```json

{
	"userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
	"environment": {
		"networkUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4143.7 Safari/537.36 Chrome-Lighthouse",
		"hostUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
		"benchmarkIndex": 651.5,
		"credits": {}
	},
	"lighthouseVersion": "6.4.1",
	"fetchTime": "2021-01-03T16:32:42.125Z",
	"requestedUrl": "https://canarytrace.com/",
	"finalUrl": "https://canarytrace.com/",
	"runWarnings": [],
	"audits": {
		"first-contentful-paint": {
			"id": "first-contentful-paint",
			"title": "First Contentful Paint",
			"score": 2,
			"numericValue": 3794.2447,
			"numericUnit": "millisecond"
		},
		"largest-contentful-paint": {
			"id": "largest-contentful-paint",
			"title": "Largest Contentful Paint",
			"score": 15,
			"numericValue": 4203.35555,
			"numericUnit": "millisecond"
		},
		"first-meaningful-paint": {
			"id": "first-meaningful-paint",
			"title": "First Meaningful Paint",
			"score": 1,
			"numericValue": 4057.6775,
			"numericUnit": "millisecond"
		},
		"speed-index": {
			"id": "speed-index",
			"title": "Speed Index",
			"score": 13,
			"numericValue": 3794.2447,
			"numericUnit": "millisecond"
		},
		"screenshot-thumbnails": {
			"id": "screenshot-thumbnails",
			"title": "Screenshot Thumbnails",
			"score": 0
		},
		"final-screenshot": {
			"id": "final-screenshot",
			"title": "Final Screenshot",
			"score": 0
		},
		"estimated-input-latency": {
			"id": "estimated-input-latency",
			"title": "Estimated Input Latency",
			"score": 0,
			"numericValue": 976.7999999999986,
			"numericUnit": "millisecond"
		},
		"total-blocking-time": {
			"id": "total-blocking-time",
			"title": "Total Blocking Time",
			"score": 13,
			"numericValue": 734.2686999999987,
			"numericUnit": "millisecond"
		},
		"max-potential-fid": {
			"id": "max-potential-fid",
			"title": "Max Potential First Input Delay",
			"score": 0,
			"numericValue": 1704.9999999999982,
			"numericUnit": "millisecond"
		},
		"cumulative-layout-shift": {
			"id": "cumulative-layout-shift",
			"title": "Cumulative Layout Shift",
			"score": 16,
			"numericValue": 0.5131822253022832,
			"numericUnit": "unitless"
		},
		"server-response-time": {
			"id": "server-response-time",
			"title": "Initial server response time was short",
			"score": 100,
			"numericValue": 11.55,
			"numericUnit": "millisecond"
		},
		"first-cpu-idle": {
			"id": "first-cpu-idle",
			"title": "First CPU Idle",
			"score": 50,
			"numericValue": 4498.3848,
			"numericUnit": "millisecond"
		},
		"interactive": {
			"id": "interactive",
			"title": "Time to Interactive",
			"score": 49,
			"numericValue": 4578.513399999999,
			"numericUnit": "millisecond"
		},
		"user-timings": {
			"id": "user-timings",
			"title": "User Timing marks and measures",
			"score": 0
		},
		"critical-request-chains": {
			"id": "critical-request-chains",
			"title": "Avoid chaining critical requests",
			"score": 0
		},
		"redirects": {
			"id": "redirects",
			"title": "Avoid multiple page redirects",
			"score": 100,
			"numericValue": 0,
			"numericUnit": "millisecond"
		},
		"mainthread-work-breakdown": {
			"id": "mainthread-work-breakdown",
			"title": "Minimize main-thread work",
			"score": 67,
			"numericValue": 3169.0609999999956,
			"numericUnit": "millisecond"
		},
		"bootup-time": {
			"id": "bootup-time",
			"title": "Reduce JavaScript execution time",
			"score": 73,
			"numericValue": 2143.770999999997,
			"numericUnit": "millisecond"
		},
		"uses-rel-preload": {
			"id": "uses-rel-preload",
			"title": "Preload key requests",
			"score": 56.00000000000001,
			"numericValue": 641,
			"numericUnit": "millisecond"
		},
		"uses-rel-preconnect": {
			"id": "uses-rel-preconnect",
			"title": "Preconnect to required origins",
			"score": 93,
			"numericValue": 80.5752,
			"numericUnit": "millisecond",
			"warnings": []
		},
		"font-display": {
			"id": "font-display",
			"title": "Ensure text remains visible during webfont load",
			"score": 0,
			"warnings": []
		},
		"diagnostics": {
			"id": "diagnostics",
			"title": "Diagnostics",
			"score": 0,
			"details": {
				"numRequests": 45,
				"numScripts": 11,
				"numStylesheets": 4,
				"numFonts": 7,
				"numTasks": 976,
				"numTasksOver10ms": 30,
				"numTasksOver25ms": 12,
				"numTasksOver50ms": 8,
				"numTasksOver100ms": 2,
				"numTasksOver500ms": 1,
				"rtt": 0.0322,
				"throughput": 48105347.19113134,
				"maxRtt": 0.8189,
				"maxServerLatency": 26.830800000000004,
				"totalByteWeight": 2357840,
				"totalTaskTime": 3169.0609999999992,
				"mainDocumentTransferSize": 8021
			}
		},
		"network-requests": {
			"id": "network-requests",
			"title": "Network Requests",
			"score": 0
		},
		"network-rtt": {
			"id": "network-rtt",
			"title": "Network Round Trip Times",
			"score": 0,
			"numericValue": 0.8189,
			"numericUnit": "millisecond"
		},
		"network-server-latency": {
			"id": "network-server-latency",
			"title": "Server Backend Latencies",
			"score": 0,
			"numericValue": 26.830800000000004,
			"numericUnit": "millisecond"
		},
		"main-thread-tasks": {
			"id": "main-thread-tasks",
			"title": "Tasks",
			"score": 0
		},
		"metrics": {
			"id": "metrics",
			"title": "Metrics",
			"score": 0,
			"numericValue": 4579,
			"numericUnit": "millisecond",
			"details": {
				"firstContentfulPaint": 3794,
				"firstMeaningfulPaint": 4058,
				"largestContentfulPaint": 4203,
				"firstCPUIdle": 4498,
				"interactive": 4579,
				"speedIndex": 3794,
				"estimatedInputLatency": 977,
				"totalBlockingTime": 734,
				"maxPotentialFID": 1705,
				"cumulativeLayoutShift": 0.5131822253022832,
				"observedTimeOrigin": 0,
				"observedTimeOriginTs": 915957741,
				"observedNavigationStart": 0,
				"observedNavigationStartTs": 915957741,
				"observedFirstPaint": 2204,
				"observedFirstPaintTs": 918161646,
				"observedFirstContentfulPaint": 2204,
				"observedFirstContentfulPaintTs": 918161646,
				"observedFirstMeaningfulPaint": 2450,
				"observedFirstMeaningfulPaintTs": 918407275,
				"observedLargestContentfulPaint": 2450,
				"observedLargestContentfulPaintTs": 918407275,
				"observedTraceEnd": 4396,
				"observedTraceEndTs": 920353851,
				"observedLoad": 3072,
				"observedLoadTs": 919029827,
				"observedDomContentLoaded": 2180,
				"observedDomContentLoadedTs": 918137441,
				"observedCumulativeLayoutShift": 0.5131822253022832,
				"observedFirstVisualChange": 2155,
				"observedFirstVisualChangeTs": 918112741,
				"observedLastVisualChange": 4372,
				"observedLastVisualChangeTs": 920329741,
				"observedSpeedIndex": 2624,
				"observedSpeedIndexTs": 918582088
			}
		},
		"performance-budget": {
			"id": "performance-budget",
			"title": "Performance budget",
			"score": 0
		},
		"timing-budget": {
			"id": "timing-budget",
			"title": "Timing budget",
			"score": 0
		},
		"resource-summary": {
			"id": "resource-summary",
			"title": "Keep request counts low and transfer sizes small",
			"score": 0,
			"details": {
				"Total": {
					"resourceType": "total",
					"requestCount": 40,
					"transferSize": 2357840
				},
				"Script": {
					"resourceType": "script",
					"requestCount": 11,
					"transferSize": 1948137
				},
				"Stylesheet": {
					"resourceType": "stylesheet",
					"requestCount": 4,
					"transferSize": 240083
				},
				"Font": {
					"resourceType": "font",
					"requestCount": 7,
					"transferSize": 105423
				},
				"Image": {
					"resourceType": "image",
					"requestCount": 11,
					"transferSize": 55657
				},
				"Document": {
					"resourceType": "document",
					"requestCount": 1,
					"transferSize": 8021
				},
				"Other": {
					"resourceType": "other",
					"requestCount": 6,
					"transferSize": 519
				},
				"Media": {
					"resourceType": "media",
					"requestCount": 0,
					"transferSize": 0
				},
				"Third-party": {
					"resourceType": "third-party",
					"requestCount": 27,
					"transferSize": 239865
				}
			}
		},
		"third-party-summary": {
			"id": "third-party-summary",
			"title": "Minimize third-party usage",
			"score": 100
		},
		"largest-contentful-paint-element": {
			"id": "largest-contentful-paint-element",
			"title": "Largest Contentful Paint element",
			"score": 0
		},
		"layout-shift-elements": {
			"id": "layout-shift-elements",
			"title": "Avoid large layout shifts",
			"score": 0
		},
		"long-tasks": {
			"id": "long-tasks",
			"title": "Avoid long main-thread tasks",
			"score": 0
		},
		"non-composited-animations": {
			"id": "non-composited-animations",
			"title": "Avoid non-composited animations",
			"score": 0
		},
		"unsized-images": {
			"id": "unsized-images",
			"title": "Image elements do not have explicit `width` and `height`",
			"score": 0
		},
		"uses-long-cache-ttl": {
			"id": "uses-long-cache-ttl",
			"title": "Serve static assets with an efficient cache policy",
			"score": 1,
			"numericValue": 2124119.25,
			"numericUnit": "byte"
		},
		"total-byte-weight": {
			"id": "total-byte-weight",
			"title": "Avoids enormous network payloads",
			"score": 96,
			"numericValue": 2357840,
			"numericUnit": "byte"
		},
		"offscreen-images": {
			"id": "offscreen-images",
			"title": "Defer offscreen images",
			"score": 100,
			"numericValue": 0,
			"numericUnit": "millisecond",
			"warnings": []
		},
		"render-blocking-resources": {
			"id": "render-blocking-resources",
			"title": "Eliminate render-blocking resources",
			"score": 17,
			"numericValue": 3513,
			"numericUnit": "millisecond"
		},
		"unminified-css": {
			"id": "unminified-css",
			"title": "Minify CSS",
			"score": 80,
			"numericValue": 240,
			"numericUnit": "millisecond"
		},
		"unminified-javascript": {
			"id": "unminified-javascript",
			"title": "Minify JavaScript",
			"score": 100,
			"numericValue": 0,
			"numericUnit": "millisecond",
			"warnings": []
		},
		"unused-css-rules": {
			"id": "unused-css-rules",
			"title": "Remove unused CSS",
			"score": 72,
			"numericValue": 360,
			"numericUnit": "millisecond"
		},
		"unused-javascript": {
			"id": "unused-javascript",
			"title": "Remove unused JavaScript",
			"score": 0,
			"errorMessage": "Cannot read property 'length' of undefined"
		},
		"uses-webp-images": {
			"id": "uses-webp-images",
			"title": "Serve images in next-gen formats",
			"score": 100,
			"numericValue": 0,
			"numericUnit": "millisecond",
			"warnings": []
		},
		"uses-optimized-images": {
			"id": "uses-optimized-images",
			"title": "Efficiently encode images",
			"score": 100,
			"numericValue": 0,
			"numericUnit": "millisecond",
			"warnings": []
		},
		"uses-text-compression": {
			"id": "uses-text-compression",
			"title": "Enable text compression",
			"score": 100,
			"numericValue": 0,
			"numericUnit": "millisecond"
		},
		"uses-responsive-images": {
			"id": "uses-responsive-images",
			"title": "Properly size images",
			"score": 100,
			"numericValue": 0,
			"numericUnit": "millisecond",
			"warnings": []
		},
		"efficient-animated-content": {
			"id": "efficient-animated-content",
			"title": "Use video formats for animated content",
			"score": 100,
			"numericValue": 0,
			"numericUnit": "millisecond"
		},
		"duplicated-javascript": {
			"id": "duplicated-javascript",
			"title": "Remove duplicate modules in JavaScript bundles",
			"score": 0,
			"errorMessage": "Cannot read property 'length' of undefined"
		},
		"legacy-javascript": {
			"id": "legacy-javascript",
			"title": "Avoid serving legacy JavaScript to modern browsers",
			"score": 0,
			"errorMessage": "Cannot read property 'length' of undefined"
		},
		"dom-size": {
			"id": "dom-size",
			"title": "Avoids an excessive DOM size",
			"score": 100,
			"numericValue": 266,
			"numericUnit": "element"
		},
		"no-document-write": {
			"id": "no-document-write",
			"title": "Avoids `document.write()`",
			"score": 100
		},
		"uses-http2": {
			"id": "uses-http2",
			"title": "Use HTTP/2",
			"score": 100,
			"numericValue": 0,
			"numericUnit": "millisecond"
		},
		"uses-passive-event-listeners": {
			"id": "uses-passive-event-listeners",
			"title": "Uses passive listeners to improve scrolling performance",
			"score": 100
		}
	},
	"configSettings": {
		"maxWaitForFcp": 300000,
		"maxWaitForLoad": 450000,
		"throttlingMethod": "simulate",
		"throttling": {
			"rttMs": 40,
			"throughputKbps": 10240,
			"requestLatencyMs": 0,
			"downloadThroughputKbps": 0,
			"uploadThroughputKbps": 0,
			"cpuSlowdownMultiplier": 1
		},
		"auditMode": false,
		"gatherMode": false,
		"disableStorageReset": false,
		"emulatedFormFactor": "desktop",
		"internalDisableDeviceScreenEmulation": false,
		"channel": "node",
		"budgets": null,
		"locale": "en-US",
		"blockedUrlPatterns": null,
		"additionalTraceCategories": null,
		"extraHeaders": null,
		"precomputedLanternData": null,
		"onlyAudits": null,
		"onlyCategories": [
			"performance"
		],
		"skipAudits": null
	},
	"categories": {
		"performance": {
			"title": "Performance",
			"id": "performance",
			"score": 17
		}
	},
	"spec": "smoke.js",
	"labels": [
		"canary=smoke-pro",
		"canary-labs",
		"pt.audit=desktopDense4G"
	],
	"uuidAction": "34ecec56-792c-4acd-a91a-384fe9e303ca",
	"uuid": "2d51a2f2-c985-4081-b78f-3cccf221e9b7",
	"testStep": "Smoke https://canarytrace.com/ performance audit",
	"timestamp": "2021-01-03T16:33:10.662Z"
}
```

### Audits

An object containing the results of the audits, keyed by their name.

- ```first-contentful-paint``` https://web.dev/first-contentful-paint/ 
First Contentful Paint (FCP) is one of six metrics tracked in the Performance section of the Lighthouse report. Each metric captures some aspect of page load speed.

- ```largest-contentful-paint``` https://web.dev/lcp/ 
Largest Contentful Paint (LCP) is an important, user-centric metric for measuring perceived load speed because it marks the point in the page load timeline when the page's main content has likely loaded—a fast LCP helps reassure the user that the page is useful.

- ```speed-index``` https://web.dev/speed-index/ 
Speed Index measures how quickly content is visually displayed during page load. Lighthouse first captures a video of the page loading in the browser and computes the visual progression between frames. Lighthouse then uses the Speedline Node.js module to generate the Speed Index score.

- ```first-meaningful-paint``` https://web.dev/first-meaningful-paint/  DEPRECATED 
FMP measures when the primary content of a page is visible to the user. The raw score for FMP is the time in seconds between the user initiating the page load and the page rendering the primary above-the-fold content. FMP essentially shows the timing of the paint after which the biggest above-the-fold layout change happens. Learn more about the technical details of FMP in Google's Time to First Meaningful Paint: a layout-based approach.

- ```estimated-input-latency``` https://web.dev/estimated-input-latency/ 
Estimated Input Latency is an estimate of how long your app takes to respond to user input during the busiest 5 second window of page load. The timing of this audit is from First Meaningful Paint to the end of the trace, which is roughly 5 seconds after Time to Interactive. If your latency is higher than 50 ms, users may perceive your app as laggy.

- ```total-blocking-time``` https://web.dev/tbt/ 
The Total Blocking Time (TBT) metric measures the total amount of time between First Contentful Paint (FCP) and Time to Interactive (TTI) where the main thread was blocked for long enough to prevent input responsiveness.

- ```max-potential-fid``` https://web.dev/lighthouse-max-potential-fid/ 
Max Potential FID measures the worst-case First Input Delay that your users might experience. First Input Delay measures the time from when a user first interacts with your site, such as clicking a button, to the time when the browser is actually able to respond to that interaction.

- ```cumulative-layout-shift``` https://web.dev/cls/ 
CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.
A layout shift occurs any time a visible element changes its position from one rendered frame to the next. (See below for details on how individual layout shift scores are calculated.)

- ```server-response-time``` https://web.dev/time-to-first-byte/ 
This audit fails when the browser waits more than 600 ms for the server to respond to the main document request. Users dislike when pages take a long time to load. Slow server response times are one possible cause for long page loads.
When users navigate to a URL in their web browser, the browser makes a network request to fetch that content. Your server receives the request and returns the page content.

- ```first-cpu-idle``` https://web.dev/first-cpu-idle/ DEPRECATED 
First CPU Idle measures how long it takes a page to become minimally interactive.

- ```interactive``` https://web.dev/interactive/ 
Measuring TTI is important because some sites optimize content visibility at the expense of interactivity. This can create a frustrating user experience: the site appears to be ready, but when the user tries to interact with it, nothing happens.

- ```critical-request-chains``` https://web.dev/critical-request-chains/ 
Critical request chains are series of dependent network requests important for page rendering. The greater the length of the chains and the larger the download sizes, the more significant the impact on page load performance.

- ```redirects``` https://web.dev/redirects/ 
Redirects slow down your page load speed.

- ```mainthread-work-breakdown``` https://web.dev/mainthread-work-breakdown/ 
The browser's renderer process is what turns your code into a web page that your users can interact with. By default, the main thread of the renderer process typically handles most code: it parses the HTML and builds the DOM, parses the CSS and applies the specified styles, and parses, evaluates, and executes the JavaScript

- ```bootup-time``` https://web.dev/bootup-time/ 
When your JavaScript takes a long time to execute, it slows down your page performance

- ```uses-rel-preload``` https://web.dev/uses-rel-preload/ 
Potential savings ms. Prioritize fetching resources that are currently requested later in page load.

- ```uses-rel-preconnect``` https://web.dev/uses-rel-preconnect/ 
Potential savings ms. Prioritize fetching resources that are currently requested later in page load.

- ```network-rtt```
Round-trip time (RTT) is the duration in milliseconds (ms) it takes for a network request to go from a starting point to a destination and back again to the starting point. RTT is an important metric in determining the health of a connection on a local network or the larger Internet, and is commonly utilized by network administrators to diagnose the speed and reliability of network connections.

- ```third-party-summary``` https://web.dev/third-party-summary/ 
A third-party script is any script hosted on a domain that's different than the domain of the URL that you audited with Lighthouse. As the page loads, Lighthouse calculates how long each of the third-party scripts blocks the main thread. If the total blocking time is greater than 250 ms the audit fails.

- ```long-tasks``` https://web.dev/long-tasks-devtools/ 
A Long Task is JavaScript code that monopolizes the main thread for extended periods of time, causing the UI to "freeze".

- ```non-composited-animations``` https://web.dev/non-composited-animations/ 
Non-composited animations can appear janky (i.e. not smooth) on low-end phones or when performance-heavy tasks are running on the main thread. Janky animations can increase the Cumulative Layout Shift (CLS) of your page. Reducing CLS will improve your Lighthouse Performance score.

- ```unsized-images``` https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=node#images-without-dimensions 
Image elements do not have explicit width and height. Set an explicit width and height on image elements to reduce layout shifts and improve CLS.

- ```uses-long-cache-ttl``` https://web.dev/uses-long-cache-ttl/ 
When a browser requests a resource, the server providing the resource can tell the browser how long it should temporarily store or cache the resource. For any subsequent request for that resource, the browser uses its local copy rather than getting it from the network.

- ```offscreen-image``` https://web.dev/offscreen-images/ 
Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. Learn more.

- ```render-blocking-resources``` https://web.dev/render-blocking-resources/ 
The Opportunities section of your Lighthouse report lists all URLs blocking the first paint of your page. The goal is to reduce the impact of these render-blocking URLs by inlining critical resources, deferring non-critical resources, and removing anything unused.

- ```unminified-css``` https://web.dev/unminified-css/ 
Minifying CSS files can improve your page load performance. CSS files are often larger than they need to be.

- ```unminified-javascript``` https://web.dev/unminified-javascript/ 
Minifying JavaScript files can reduce payload sizes and script parse time. Minification is the process of removing whitespace and any code that is not necessary to create a smaller but perfectly valid code file

- ```unused-css-rules``` https://web.dev/unused-css-rules 
Remove unused CSS.

- ```unused-javascript``` https://web.dev/unused-javascript/ 
Unused JavaScript can slow down your page load speed.

- ```uses-webp-images``` https://web.dev/serve-images-webp/ 
WebP images are smaller than their JPEG and PNG counterparts—usually on the magnitude of a 25–35% reduction in filesize. This decreases page sizes and improves performance.
Example: https://twitter.com/RDPanek/status/1340918791279132672

- ```uses-optimized-images``` https://web.dev/uses-optimized-images/#optimize-images-using-gui-tools 
Lists all unoptimized images, with potential savings in kibibytes (KiB).

- ```uses-text-compression``` https://web.dev/uses-text-compression/ 
Text-based resources should be served with compression to minimize total network bytes.

- ```uses-responsive-images``` https://web.dev/uses-responsive-images/ 
Lists all images in your page that aren't appropriately sized, along with the potential savings in kibibytes (KiB).

- ```efficient-animated-content``` https://web.dev/efficient-animated-content/ 
Lists all animated GIFs, along with estimated savings in seconds achieved by converting GIFs to video format. Large GIFs are inefficient for delivering animated content.

- ```duplicated-javascript``` 
Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity.

- ```legacy-javascript``` https://web.dev/publish-modern-javascript/#legacy-javascript 
Legacy JavaScript is typically around 20% larger and slower than equivalent modern code.

- ```dom-size``` https://web.dev/dom-size/ 
A large DOM tree can slow down your page performance.

- ```no-document-write```  https://web.dev/no-document-write/ 
For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds.

- ```uses-http2``` https://web.dev/uses-http2/ 
HTTP/2 offers many benefits over HTTP/1.1, including binary headers, multiplexing, and server push.

- ```uses-passive-event-listeners``` https://web.dev/uses-passive-event-listeners/ 
Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. 


### Dashboard and visualizations


> **Dashboard documentation** <br/><br/>
> You can visit our [visual documentation](/docs/features/dashboards) with all dashboards. 