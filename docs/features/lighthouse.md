---
id: lighthouse
title: Lighthouse 8.0.0
sidebar_label: Lighthouse 8.0.0
custom_edit_url: false
---

<a href="/docs/why/edition#canarytrace-pro"><span class="canaryBadge">Canarytrace Pro</span></a>

[Canarytrace Pro](http://localhost:3000/docs/why/edition#canarytrace-pro) use [Lighthouse](https://developers.google.com/web/tools/lighthouse) for performance audit and for obtaining metrics such as [Web Vitals](https://web.dev/vitals/) and more.

Canarytrace Pro in `smoke` edition automatically run Lighthouse on every URL and [lhr](https://github.com/GoogleChrome/lighthouse/blob/4d3bda1f14540266eb37f7e2ba8cabbc668db11d/docs/understanding-results.md) object stored to Elasticsearch. Canarytrace Pro run Lighthouse at any time and on any tested site.

Result of Performance Audit (lhr object) is stored to `c.audit-*` index

### Audits

An object containing the results of the audits, keyed by their name.

- ```first-contentful-paint```
First Contentful Paint (FCP) is one of six metrics tracked in the Performance section of the Lighthouse report. Each metric captures some aspect of page load speed. https://web.dev/first-contentful-paint/ 

- ```largest-contentful-paint``` Largest Contentful Paint (LCP) is an important, user-centric metric for measuring perceived load speed because it marks the point in the page load timeline when the page's main content has likely loaded—a fast LCP helps reassure the user that the page is useful. https://web.dev/lcp/ 

- ```first-meaningful-paint``` 
FMP measures when the primary content of a page is visible to the user. The raw score for FMP is the time in seconds between the user initiating the page load and the page rendering the primary above-the-fold content. FMP essentially shows the timing of the paint after which the biggest above-the-fold layout change happens. Learn more about the technical details of FMP in Google's Time to First Meaningful Paint: a layout-based approach. https://web.dev/first-meaningful-paint/
  - This metric is [deprecated in Lighthouse 6.0](https://web.dev/first-meaningful-paint/)

- ```speed-index``` Speed Index measures how quickly content is visually displayed during page load. Lighthouse first captures a video of the page loading in the browser and computes the visual progression between frames. Lighthouse then uses the Speedline Node.js module to generate the Speed Index score. https://web.dev/speed-index/

- ```total-blocking-time``` The Total Blocking Time (TBT) metric measures the total amount of time between First Contentful Paint (FCP) and Time to Interactive (TTI) where the main thread was blocked for long enough to prevent input responsiveness. https://web.dev/tbt/ 

- ```max-potential-fid``` Max Potential FID measures the worst-case First Input Delay that your users might experience. First Input Delay measures the time from when a user first interacts with your site, such as clicking a button, to the time when the browser is actually able to respond to that interaction. https://web.dev/lighthouse-max-potential-fid/ 

- ```cumulative-layout-shift``` CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.
A layout shift occurs any time a visible element changes its position from one rendered frame to the next. https://web.dev/cls/ 

- ```server-response-time``` This audit fails when the browser waits more than 600 ms for the server to respond to the main document request. Users dislike when pages take a long time to load. Slow server response times are one possible cause for long page loads.
When users navigate to a URL in their web browser, the browser makes a network request to fetch that content. Your server receives the request and returns the page content. https://web.dev/time-to-first-byte/ 

- ```interactive``` Measuring TTI is important because some sites optimize content visibility at the expense of interactivity. This can create a frustrating user experience: the site appears to be ready, but when the user tries to interact with it, nothing happens. https://web.dev/interactive/ 

- ```critical-request-chains``` Critical request chains are series of dependent network requests important for page rendering. The greater the length of the chains and the larger the download sizes, the more significant the impact on page load performance. https://web.dev/critical-request-chains/ 

- ```redirects``` Redirects slow down your page load speed. https://web.dev/redirects/ 

- ```mainthread-work-breakdown``` The browser's renderer process is what turns your code into a web page that your users can interact with. By default, the main thread of the renderer process typically handles most code: it parses the HTML and builds the DOM, parses the CSS and applies the specified styles, and parses, evaluates, and executes the JavaScript. https://web.dev/mainthread-work-breakdown/ 

- ```bootup-time``` When your JavaScript takes a long time to execute, it slows down your page performance. https://web.dev/bootup-time/ 

- ```uses-rel-preload``` Potential savings ms. Prioritize fetching resources that are currently requested later in page load. https://web.dev/uses-rel-preload/ 

- ```uses-rel-preconnect``` Potential savings ms. Prioritize fetching resources that are currently requested later in page load. https://web.dev/uses-rel-preconnect/ 

- ```network-rtt```
Round-trip time (RTT) is the duration in milliseconds (ms) it takes for a network request to go from a starting point to a destination and back again to the starting point. RTT is an important metric in determining the health of a connection on a local network or the larger Internet, and is commonly utilized by network administrators to diagnose the speed and reliability of network connections.

- ```third-party-summary``` A third-party script is any script hosted on a domain that's different than the domain of the URL that you audited with Lighthouse. As the page loads, Lighthouse calculates how long each of the third-party scripts blocks the main thread. If the total blocking time is greater than 250 ms the audit fails. https://web.dev/third-party-summary/ 

- ```long-tasks``` A Long Task is JavaScript code that monopolizes the main thread for extended periods of time, causing the UI to "freeze". https://web.dev/long-tasks-devtools/ 

- ```non-composited-animations``` Non-composited animations can appear janky (i.e. not smooth) on low-end phones or when performance-heavy tasks are running on the main thread. Janky animations can increase the Cumulative Layout Shift (CLS) of your page. Reducing CLS will improve your Lighthouse Performance score. https://web.dev/non-composited-animations/ 

- ```unsized-images``` Image elements do not have explicit width and height. Set an explicit width and height on image elements to reduce layout shifts and improve CLS. https://web.dev/optimize-cls/?utm_source=lighthouse&utm_medium=node#images-without-dimensions 

- ```uses-long-cache-ttl``` When a browser requests a resource, the server providing the resource can tell the browser how long it should temporarily store or cache the resource. For any subsequent request for that resource, the browser uses its local copy rather than getting it from the network. https://web.dev/uses-long-cache-ttl/ 

- ```offscreen-image``` Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. https://web.dev/offscreen-images/ 

- ```render-blocking-resources``` The Opportunities section of your Lighthouse report lists all URLs blocking the first paint of your page. The goal is to reduce the impact of these render-blocking URLs by inlining critical resources, deferring non-critical resources, and removing anything unused. https://web.dev/render-blocking-resources/ 

- ```unminified-css``` Minifying CSS files can improve your page load performance. CSS files are often larger than they need to be. https://web.dev/unminified-css/ 

- ```unminified-javascript``` Minifying JavaScript files can reduce payload sizes and script parse time. Minification is the process of removing whitespace and any code that is not necessary to create a smaller but perfectly valid code file. https://web.dev/unminified-javascript/ 

- ```unused-css-rules``` Remove unused CSS. https://web.dev/unused-css-rules

- ```unused-javascript``` Unused JavaScript can slow down your page load speed. https://web.dev/unused-javascript/ 

- ```uses-optimized-images``` Lists all unoptimized images, with potential savings in kibibytes (KiB). https://web.dev/uses-optimized-images/#optimize-images-using-gui-tools 

- ```uses-text-compression``` Text-based resources should be served with compression to minimize total network bytes. https://web.dev/uses-text-compression/ 

- ```uses-responsive-images``` Lists all images in your page that aren't appropriately sized, along with the potential savings in kibibytes (KiB). https://web.dev/uses-responsive-images/

- ```efficient-animated-content``` Lists all animated GIFs, along with estimated savings in seconds achieved by converting GIFs to video format. Large GIFs are inefficient for delivering animated content. https://web.dev/efficient-animated-content/ 

- ```duplicated-javascript``` Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity.

- ```legacy-javascript``` Legacy JavaScript is typically around 20% larger and slower than equivalent modern code. https://web.dev/publish-modern-javascript/#legacy-javascript 

- ```dom-size``` A large DOM tree can slow down your page performance. https://web.dev/dom-size/ 

- ```no-document-write``` For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. https://web.dev/no-document-write/ 

- ```uses-http2``` HTTP/2 offers many benefits over HTTP/1.1, including binary headers, multiplexing, and server push. https://web.dev/uses-http2/ 

- ```uses-passive-event-listeners``` Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. https://web.dev/uses-passive-event-listeners/ 


### Visualizations of Lighthouse results


> **Dashboard documentation** <br/><br/>
> You can visit our [visual documentation](/docs/features/dashboards) with all dashboards. 


### Sources

- Architecture https://github.com/GoogleChrome/lighthouse/blob/4d3bda1f14540266eb37f7e2ba8cabbc668db11d/docs/architecture.md

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).