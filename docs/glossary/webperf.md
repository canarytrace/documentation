---
sidebar_position: 1
description: Description of the metrics
title: Web Performance
tags:
  - webPerf
  - glossary
---

:::info
Web performance, or website performance, generally refers to the speed at which web pages load and display in a user's browser. It's a crucial aspect of user experience that can significantly impact a website's traffic and conversion rates.

Performance metrics are specific measurements that allow us to quantify and track website performance. These metrics can include factors such as page load time, Time to First Byte (TTFB), and Time to Interactive (TTI) and more.

All of these key metrics are collected by Canarytrace, making it an effective tool for monitoring and improving web performance to provide a high-quality user experience.

:::

#### Website Performance Metrics: From Navigation Start to Fully Interactive

- **Navigation Start:** This marks the point at which the user or client initiates the navigation process. It's the beginning of the performance timeline.

- **Redirect Time:** The duration it takes for any HTTP redirects to happen - if any. Redirection can affect the loading speed of a webpage.

- **App Cache:** This refers to the time spent retrieving the webpage's files from the cache if they're stored there. Cached resources can load more quickly.

- **DNS Lookup:** The duration it takes to perform the DNS lookup. During this process, the browser translates the domain name to an IP address.

- **TCP Connection:** This refers to the time taken for the TCP handshake, which establishes the network connection between the user's browser and the server.

- **SSL Handshake:** If applicable, this is the time it takes to perform an SSL handshake, which establishes a secure connection if the website uses HTTPS.

- **Time to First Byte (TTFB):** This measures the time from the user or client making an HTTP request to the first byte of the page being received by the client's browser.

- **Server Response Time:** This is the time taken by the server to respond to the browser's request. It starts with the request sent by the browser and ends with the response start from the server.

- **First Paint (FP) / First Contentful Paint (FCP):** This marks the time when the browser first renders any content from the DOM such as text, images, or SVG elements.

- **DOM Loading:** This point occurs when the browser has finished parsing all of the HTML and the Document Object Model (DOM) construction is complete.

- **DOM Interactive:** This marks the point at which the DOM is fully constructed, but still loading sub-resources like images, CSS, etc.

- **JavaScript Parse and Compile Time:** This measures the time the browser spends parsing and compiling JavaScript code. High JS parse/compile times can slow down your site.

- **DOM Complete:** This is the moment when the webpage and all its subresources are completely loaded.

- **Largest Contentful Paint (LCP):** This is the time it takes for the largest content element in the viewport to become visible. It could be an image, block of text, or other block-level element.

- **Time to First Interactive (TTFI):** This is the time when the page becomes capable of responding to user input in a meaningful yet potentially unstable way.

- **Time to Consistently Interactive (TTCI):** This is the point when the page can consistently respond to user input without any noticeable delay.

- **Max Potential First Input Delay (Max Potential FID):** This estimates the maximum duration a user might experience before the page responds to user input.

- **Time to Interactive (TTI):** This measures the time from navigation start to the point where the page is fully interactive and can respond reliably to all user input.

- **Total Blocking Time (TBT):** This measures the total time that the main thread was blocked, preventing it from responding to user input.

- **First Input Delay (FID):** This is the time from when a user first interacts with a page to the time when the browser is able to respond to that interaction.

This sequence of events might vary depending on the size of your files, the order they're loaded in, the capabilities of the device viewing the page, network conditions, and more. Always follow the current recommendations and best practices concerning web performance metrics.

## Core Web Vitals

Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured by all site owners, and will be surfaced across all Google tools. Each of the Core Web Vitals represents a distinct facet of the user experience, is measurable in the field, and reflects the real-world experience of a critical user-centric outcome.

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <img src='https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg' alt='LCP' style={{ width: '30%' }} />
  <img src='https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg' alt='FID' style={{ width: '30%' }} />
  <img src='https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg' alt='CLS' style={{ width: '30%' }} />
</div>

- [Largest Contentful Paint (LCP)](./webperf#lcp): measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
- [First Input Delay (FID)](./webperf#fid): measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less.
- [Cumulative Layout Shift (CLS)](./webperf#cls): measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1. or less.

More information about [Core Web Vitals](https://web.dev/vitals/#core-web-vitals)

### LCP

Largest Contentful Paint (LCP) is an important, [stable](https://web.dev/vitals/#stable) Core Web Vital metric for measuring perceived load speed because it marks the point in the page load timeline when the page's main content has likely loaded—a fast LCP helps reassure the user that the page is useful.

Largest Contentful Paint (LCP) is a metric that measures the time from page load to the moment when the largest visual element ([image or text block](https://web.dev/lcp/#what-elements-are-considered)) on the page is displayed. Deterioration of this metric can be caused by several factors:

- **Slow server times:** The length of server response times can greatly affect LCP. If the server takes a long time to process and deliver resources, it can delay the display of content.

- **Third-party resource usage:** Unoptimized or redundant third-party resources can cause a delay in the display of the main content.

- **Client-side rendering (CSR):** In CSR, content is generated by JavaScript in the browser, which can cause a delay in displaying the main content if the JavaScript is heavy or inefficient.

- **Slow network times:** If the network connection is slow, it may take longer for the largest element on the page to load and display.

- **Unoptimized and large images:** Large or unoptimized images can take a long time to load and display, which can cause a delay in LCP.

Improving the LCP metric often involves optimizing server and network, managing third-party resources, reconsidering rendering strategy (e.g., switching to server-side rendering (SSR) or static site generation (SSG) instead of CSR), and optimizing images and other large media.

**Recommendation**

- max. 2.5s
- Always be faster than your competition.

More information abtout [LCP](https://web.dev/lcp/)

### FID

FID measures the time from when a user first interacts with a page (that is, when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

:::tip
First Input Delay (FID) is the [stable](https://web.dev/vitals/#stable) Core Web Vital metric for measuring load responsiveness because it quantifies the experience users feel when trying to interact with unresponsive pages—a low FID helps ensure that the page is usable. FID will be [replaced by Interaction to Next Paint (INP)](https://web.dev/inp-cwv/) as a Core Web Vital in March 2024.
:::

#### Factors That Can Degrade the FID Metric

- **Heavy JavaScript Operations:** If your website has a lot of JavaScript to process, the browser may be busy and can't respond to user input right away. While JavaScript is being processed, the browser may be in a "blocked state".

- **Long Tasks:** If you have long tasks in JavaScript (tasks that take longer than 50 ms), they can block the main thread and cause a delay in response to user input.

- **Insufficient Optimization:** Unoptimized code, especially JavaScript and CSS, can also cause a higher FID. This can include inefficient algorithms, unnecessary code, or unused code.

- **Unoptimized Third-Party Resources:** Third-party resources, such as ads, analytic scripts, or embedded content, can cause high FID if they are not properly managed.

- **Insufficient Use of Web Workers:** Web Workers allow JavaScript to run in the background on a separate thread, off the main browser thread. Not taking advantage of this can lead to a higher FID, as it can free up the main thread for quicker response to user inputs.

Optimization for better FID often involves improving code efficiency, limiting the amount of JavaScript sent to the browser, breaking up long tasks into smaller ones that the browser can handle more easily, and managing third-party resources.

**Recommendation**

- max. 100ms
- Always be faster than your competition.


- [TOP LCP element types](https://almanac.httparchive.org/en/2022/performance#lcp-content-types)
- More information about [FID](https://web.dev/fid/)


### INP

INP is an experimental user-centric metric that evaluates response. INP tracks the response of all or most of the interactions that a user has made with a page. A low INP means that the page is able to quickly respond to all or most user interactions.
The task of INP is not to measure all interactions (e.g., network loading, UI updates from other async operations), but to block further painting. In other words, the time from when the user initiated the interaction to the rendering of the next frame.

#### What's in an interaction?

![What is an interaction](https://web-dev.imgix.net/image/jL3OLOhcWUQDnR4XjewLBx4e3PC3/Ng0j5yaGYZX9Bm3VQ70c.svg)
The life of an interaction. An input delay occurs until event handlers begin running, which may be caused by factors such as long tasks on the main thread. The interaction's event handlers then run, and a delay occurs before the next frame is presented.

#### Recommendations for INP Optimization

Interactivity is a key part of user experience, and optimizing for Interactivity and Navigation Profiling (INP) can greatly improve the perceived performance of your web page or application. Here are some recommendations:

- **Minimize JavaScript Execution:** Reducing the time spent executing JavaScript can greatly improve INP. This could be achieved through various strategies, such as reducing the size of JavaScript files, deferring non-critical JavaScript until after the first load, or running scripts asynchronously.

- **Optimize Main Thread Usage:** The browser's main thread is responsible for most rendering tasks as well as parsing and executing JavaScript. Long tasks can block this thread, making your page unresponsive. Identifying and optimizing these tasks can improve INP.

- **Code Splitting:** This technique allows you to split your code into smaller chunks which can then be loaded on demand. This can help in reducing the amount of code that needs to be parsed and executed at once, improving INP.

- **Use Web Workers for Background Tasks:** Web Workers allow you to run JavaScript in the background on a separate thread. This can be used to offload non-UI tasks from the main thread, improving INP.

- **Optimize Resource Loading:** Prioritize loading of critical resources and defer non-critical ones. This includes optimizing your network requests, using efficient loading strategies like lazy loading, and implementing effective caching strategies.

- **Listen to User Interactions Passively:** In JavaScript, you can set up event listeners that either block the main thread until they finish running, or are set up as "passive" to run without blocking. Whenever possible, set your event listeners to be passive to improve INP.

As always, the best strategy can depend on the specifics of your webpage or application. Regular monitoring and performance profiling can help you quickly identify and address any issues affecting your INP.

- What is the difference between FID and INP? https://web.dev/inp/#how-is-inp-different-from-first-input-delay-fid

**Recommendation**

- Good: INP less than 200 milliseconds.
- Needs Improvement: INP between 200 and 500 milliseconds.
- Poor: INP greater than 300 milliseconds.


More information about [INP](https://web.dev/inp/)

### CLS

Cumulative Layout Shift (CLS) is a [stable](https://web.dev/user-centric-performance-metrics/#types-of-metrics) Core Web Vital metric. It is an important, user-centric metric for measuring visual stability because it helps quantify how often users experience unexpected layout shifts—a low CLS helps ensure that the page is [delightful](https://web.dev/user-centric-performance-metrics/#questions).

More information about [CLS](https://web.dev/cls/).

## Metrics

### FCP

The First Contentful Paint (FCP) metric measures the time from when the page starts loading to when any part of the page's content is rendered on the screen. For this metric, "content" refers to text, images (including background images), `<svg>` elements, or non-white `<canvas>` elements.

#### Recommendations for FCP Optimization

Optimizing FCP can enhance the user experience on a website, as fast content loading can help retain users on the page. Here are some strategies for improving FCP:

- **Optimize Resources:** Reducing the size of CSS and JavaScript files can shorten loading times. This might involve minifying code, removing unnecessary code, or applying lazy loading techniques.

- **Leverage Caching:** Setting up caching for static resources (like images, CSS, JavaScript) can significantly speed up page loads.

- **Implement Compression:** By compressing text files, you can reduce the size of files that need to be loaded, cutting down the time needed for rendering.

- **Server Optimization:** A quick server response is key to fast page loading. You can optimize your server by increasing its capacity, adjusting its configuration, or using a Content Delivery Network (CDN) for faster content delivery.

- **Use HTTP/2 or HTTP/3:** These newer versions of the HTTP protocol allow for more efficient loading of resources.

Remember, FCP is just one of many page performance metrics. It's also essential to track other metrics, such as [TTI](./webperf#tti), [LCP](./webperf#fcp), and [CLS](./webperf#cls), to get a complete picture of page performance.


**Recommendation**

max. 1.800ms.
Always be faster than your competition.

Statistics:

- 1.6.2023, median desktop: 2.2s, median mobile: 3.7s (https://httparchive.org/reports/loading-speed#fcp)

More information about [FPC](https://web.dev/fcp/).

### TTI

TTI, or Time to Interactive, is a web page performance metric that measures the time from when the page starts loading to when it becomes fully interactive and capable of responding to user interactions in real-time.

"Fully interactive" means that most or all elements on the page, including JavaScript and other third-party content, have loaded and are ready to interact with the user. This metric is crucial as it can indicate when the page is "user-ready," which can be significantly later than when the page is visually loaded.

Determining exactly when a web page is "ready" for user interaction can be complex as it depends on various factors, including how the page is constructed and what elements it contains.

One way a browser might gauge this is by monitoring the loading and processing state of JavaScript and other page resources. For example, if a page is still loading or processing JavaScript, this could suggest that it is not fully interactive yet.

For the Time to Interactive (TTI) metric, a page is considered "interactive" at the point when:

- The page displays useful content (measured by the First Contentful Paint metric).
- Event handlers are registered for most visible page elements.
- The page responds to user interactions within 50 milliseconds.

The calculation of the TTI metric also involves the concept of a "quiet window" - a minimum of a 5-second period when both network and main thread activity is low. This is because even though a page might theoretically be "interactive" at a certain point, if it's still intensively loading or processing resources, the actual response to user interactions may be slow.

![TTI](https://web-dev.imgix.net/image/admin/WZM0n4aXah67lEyZugOT.svg)

These definitions and metrics help developers better understand and measure how quickly a page becomes useful and responsive to users, which is key to providing a quality user experience.

#### Recommendations for FCP Optimization

- Deferring or asynchronously loading JavaScript and other third-party content that isn't essential for the initial page view.
- Server optimization for faster response.
- Utilizing a web worker to perform tasks in the background and keep the main thread free for user interactions.
- Optimizing the resources of the page so that they are loaded and processed as efficiently as possible.

As with other web page performance metrics, it's important to monitor TTI in the overall context of page performance and also track other metrics such as [FCP](./webperf#fcp), [LCP](./webperf#lcp), and [CLS](./webperf#cls).

**Recommendation**

- max. 800ms.
- Always be faster than your competition.

Statistics:

- 1.6.2023, median desktop: 6.3s, median mobile: 12.7s (https://httparchive.org/reports/loading-speed#fcp)


More information about [TTI](https://web.dev/tti/).


### FPS

A frame rate is the speed at which a browser can recalculate, layout, and paint content on the display. A lower Frames Per Second (FPS) rate indicates issues with the main thread and performance problems on the web page, such as long-running [Long Task](./webperf#longtask) due to complex JavaScript.

:::tip
Certainly, when evaluating FPS (Frames Per Second) in Canarytrace, it's important to remember that the metric isn't solely influenced by the web application's performance. The monitor's refresh rate plays a critical role in the number of frames per second it can display. As a developer or tester, while optimizing your application's performance, also consider the target device's refresh rate, as it directly affects the perceived fluidity of your application.
:::

Consider a scenario where you have two systems: one with a display having a refresh rate of 120 Hz and the other with a refresh rate of 60 Hz. The web application running on both systems could theoretically generate 120 FPS, but the display with a 60 Hz refresh rate will only be able to show up to 60 FPS, regardless of the system's CPU or GPU capabilities. On the other hand, the system with a 120 Hz display would be capable of displaying up to 120 FPS, resulting in a smoother visual experience. The difference in FPS between the two systems is due to the refresh rate of their displays, not the performance of their CPUs or GPUs.

:::tip
A second point of interest is that the FPS can decrease and even drop to 0 when a page is loading in a hidden state or when a visible page is switched to a hidden state.
:::

So minimal acceptable FPS si 30-40 FPS, but if is FPS betwen 60 - 120 is not important.

#### Recommendations for FPS Optimization

Optimizing Frames Per Second (FPS) is crucial for a smooth and responsive performance of a web page or application. Here are some recommendations:

- **Minimize Complex Computations:** If your application is performing complex calculations or data processing, try to minimize or perform them asynchronously to avoid blocking the main thread.

- **Avoid Redundant Rendering:** Not every state or data change requires a re-render. Use techniques like memoization to improve performance and reduce unnecessary renders.

- **Optimize CSS and JavaScript:** Unnecessarily complex CSS or JavaScript can cause the browser to do more work, potentially leading to lower FPS. Optimize your code and minimize the use of demanding CSS properties, like complex transitions or animations.

- **Leverage Hardware Acceleration:** Some CSS properties, like transforms and opacity, can be hardware-accelerated. This can result in improved FPS.

- **Throttling and Debouncing:** These techniques can be helpful in limiting the number of tasks generated by events like scrolling or browser window resizing, improving FPS.

- **Use Request Animation Frame for Animations:** Instead of setting an interval or timer for animations, use requestAnimationFrame. This function is optimized for the browser and allows for smoother animations.

- **Monitoring and Profiling:** Use tools like Chrome DevTools to monitor and profile your application's performance, helping to identify areas that require optimization.

Remember, the right strategy depends on the specific scenario and the type of application you are building. Regular monitoring and testing of your application's performance can be helpful in quickly identifying and addressing performance issues.

- [Analyze frames per seconds](https://developer.chrome.com/docs/devtools/performance/#analyze_frames_per_second) in your browser.

**Recommendation**

- min. 40 FPS and more.
- Always be faster than your competition.


### Long Task

As a page loads or a user interacts with an application, the browser assigns tasks to the User Interface (UI) thread for processing. If any task takes longer than 50ms, the page will appear choppy, and typing into an input field will not be smooth.

#### Long tasks exceeding 50ms cause problems such as:

- Delayed Time to Interactive (TTI).
- High/variable input latency.
- High/variable event handling latency.
- Jank in animations and scrolling.

#### A long task is any uninterrupted period when the main UI thread is busy for 50ms or more. Common examples include:

- Long-running event handlers.
- Expensive reflows and other re-rendering tasks.
- Work that the browser performs between different event loop rotations that exceed 50ms.

#### Recommendations for Long Task Optimization

- **Task Splitting:** Complex computational tasks often result in long tasks. If possible, try to break these tasks down into smaller, less demanding ones.

- **Asynchronous Processing:** Some tasks can be executed asynchronously. This prevents the blocking of the main thread, allowing the page to respond to user actions while the task is underway.

- **Web Workers:** Web Workers are scripts that run in the background without blocking the main webpage thread. They can be helpful in executing demanding tasks without affecting page performance.

- **Code Optimization:** Try to avoid complex and demanding operations where possible. Optimizing JavaScript and CSS can help reduce task processing time.

- **Throttling and Debouncing:** These techniques can help limit the number of tasks generated by events such as scrolling or browser window resizing.

- **Performance Monitoring Tools:** Tools like Chrome DevTools can help identify long tasks and provide suggestions for performance improvements.

Remember, the right strategy depends on the specific scenario and the types of tasks you are handling.

**Recommendation**

- max 100ms.
- Always be faster than your competition.


## Processing


### domComplete

This metric is one of the key metrics monitored when measuring the performance of web pages. It marks the time when the loading of the Document Object Model (DOM) of the page is fully completed. In other words, all synchronous scripts have been executed, all images and sub-resources have been loaded, and the entire DOM tree is completely built.

This metric includes:

1. Time needed to get a response from the server (TTFB)
2. Time required to load and process the HTML content
3. Time needed to load and process external resources such as CSS, JavaScript, images, etc.
4. Time needed to render the page in the browser

Factors that can slow down the `domComplete` metric include:

1. Slow server response
2. Large number of external resources
3. Complex DOM tree
4. Heavy JavaScript libraries or scripts

What a programmer can do to improve `domComplete`:

1. Optimize the server: A fast and well-configured server can shorten the time it takes to get a response.
2. Minimize the number of external resources: The fewer external resources the page has to load, the quicker the DOM can be loaded.
3. Optimize DOM: Maintaining a simple and clean DOM structure can enhance loading and processing speed.
4. Minimize and optimize JavaScript: Efficient and optimized JavaScript files can shorten the time required to load and process JavaScript.

The `domComplete` metric is part of the [Navigation Timing API](https://www.w3.org/TR/navigation-timing-2/#dom-performancenavigationtiming-domcomplete), which provides detailed information on navigation and page load performance. This metric is recorded at the time when the browser completes loading the document, including its dependent resources such as styles, scripts, images, etc. Specifically, this time is measured as the time interval from the start of navigation (clicking on a link, entering a URL, etc.) to the point when the entire DOM is loaded and processed and all synchronous scripts are executed.

The calculation of `domComplete` involves the following processes and steps:

1. **Navigation Start**: A user clicks on a link, enters a URL in the address bar, or refreshes a page. This is the starting point for measuring `domComplete`.

2. **Server Response (TTFB)**: The browser sends a request to the server and waits for the first byte of data. This step includes network latency, the time taken by the server to process the request, and the time taken to send the first byte of the response back to the browser.

3. **HTML Load and Processing**: The browser loads the HTML content of the page, processes it, and constructs the DOM tree.

4. **Dependent Resources Load**: The browser loads and processes all the dependent resources, such as CSS files, JavaScript scripts, images, etc.

5. **Page Rendering**: The browser renders the page on the screen, including applying all styles and executing all scripts.

6. **DOM Loading Completion**: The browser completes the processing and loading of the entire DOM tree, including all synchronous scripts.

The `domComplete` value is then recorded as the time interval from the start of navigation to the completion of DOM loading.

Dependencies for `domComplete` include all of the page's dependent resources (styles, scripts, images, etc.), as well as network latency and server speed. If these resources are slow to load or process, or if the server is slow to respond, it can slow down the `domComplete` time.

**Recommendation**

- max 600ms.
- Always be faster than your competition.

### domContentLoadedEventEnd

This metric is another important metric that focuses on the loading of a web page's content. It represents the time when the DOM processing is complete and all events related to the downloading of the page's content, such as loading CSS, JavaScript, and images, are triggered. This metric indicates when the page is ready for interaction with the actual content.

The `DOMContentLoaded` event fires when the HTML document has been completely parsed, and all deferred scripts (`<script defer src="…">` and `<script type="module">`) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.

DOMContentLoaded does not wait for stylesheets to load, however deferred scripts do wait for stylesheets, and the DOMContentLoaded event is queued after deferred scripts. Also, scripts which aren't deferred or async (e.g. `<script>`) will wait for already-parsed stylesheets to load.

The processes and steps involved in `domContentLoadedEventEnd` include:

1. **Navigation Start**: The user initiates navigation by clicking on a link, entering a URL in the address bar, or refreshing the page.

2. **HTML Loading**: The browser loads the HTML content of the page and progressively processes it.

3. **CSS Parsing**: The browser parses CSS files and creates the CSSOM (CSS Object Model), which represents the styling structure of the page.

4. **JavaScript Loading and Processing**: The browser loads and processes JavaScript files. This may involve parsing, compiling, and executing the scripts.

5. **Image and Other External Resource Loading**: The browser loads images and other external resources that are part of the page.

6. **Completion of DOM Processing**: The browser completes the processing and rendering of the DOM tree.

The `domContentLoadedEventEnd` value is recorded as the time interval from the start of navigation to the completion of DOM processing and the triggering of the `DOMContentLoaded` event.

Dependencies for the `domContentLoadedEventEnd` metric include the size and complexity of the page's content, network and server speed, as well as the impact of CSS and JavaScript parsing and processing. Optimizing these processes can help improve `domContentLoadedEventEnd` and overall page performance.

**Recommendation**

- lower than or equal to [domComplete](#domcomplete).
- Always be faster than your competition.

### Render-blocking resources

A page is considered to have render-blocking resources if resources hold up the initial paint (or render) of the page. This is particularly likely for critical scripts and styles that are loaded over the network. Lighthouse includes an audit that checks for these resources, which we’ve run on the home page of each website in CrUX. 

Surprisingly, there was no dramatic improvement in the percent of pages that have render-blocking resources. Only 20% of mobile pages pass the audit, which is a mere 1 percentage point increase over last year.

2022 is the first year in which we have Lighthouse data for desktop. So while we’re unable to compare it against previous years, it’s still interesting to see that many fewer desktop pages pass the audit relative to mobile, in spite of the trend of desktop pages tending to have better LCP and FCP performance.

- Source https://almanac.httparchive.org/en/2022/performance#render-blocking-resources

**Recommendation**

- Try to have no blocking resources.

### onload 

The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images. This is in contrast to [DOMContentLoaded](#domcontentloaded), which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

`load` is an event and [duration](#duration) is a metric. Both can show the same time, but the value of `duration` depends on the context being measured.

**Recommendation**

- max. 2s
- Always be faster than your competition.


Statistics:
- 1.6.2023, median desktop: 6.5s, median mobile: 10.2s (https://httparchive.org/reports/loading-speed#ol)

### duration

Is the total time taken for a certain process or action to complete. In the context of web pages and performance, the "duration" metric can refer to the total time taken to load and render a web page, from the initial request to when the page is fully interactive and ready to use.

**"Duration" can include the following processes:**

1. Time needed to get a response from the server (Time to First Byte - TTFB)
2. Time required to load the HTML content
3. Time needed to load and process external resources, such as CSS, JavaScript, and images
4. Time needed to render the page in the browser
5. Time required to initialize JavaScript libraries and functions

**Factors that can slow down "duration" include:**

1. Slow server: A server that responds slowly can increase the time it takes to get a response from the server.
2. Large number of external resources: Each external resource that the page has to load (CSS, JavaScript, images, etc.) adds to the overall load time.
3. Complex DOM: More complex Document Object Model (DOM) structures can slow down page rendering.
4. Heavy JavaScript files: Large JavaScript libraries can slow down page load time.

**What a programmer can do to improve "duration":**

1. Optimize the server: Make sure your server is fast and well-configured.
2. Minimize the number of external resources: Reduce the number of external resources the page has to load, if possible.
3. Optimize DOM: Keep the structure of your DOM as simple as possible.
4. Minimize and optimize JavaScript: Minimize the size of JavaScript files where possible, and ensure JavaScript is written correctly and efficiently.

**Recommendation**

- max. 2s
- Always be faster than your competition.

## Key findings

- In short, your website should load as fast as possible!
- The ideal website load time for mobile sites is 1-2 seconds.
- 53% of mobile site visits are abandoned if pages take longer than 3 seconds to load.
- A 2-second delay in load time resulted in abandonment rates of up to 87%.
- Google aims for under half-a-second load time.
- A very slow load time can be a negative Google ranking factor.
- The average load time for mobile sites is 19 seconds over 3G connections. Models predict that publishers whose mobile sites load in 5 seconds earn up to 2x more mobile ad revenue than those whose sites load in 19 seconds.
- People would not return to websites that took longer than four seconds to load and formed a “negative perception” of a company with a badly put-together site or would tell their family and friends about their experiences.
- Slow load times are a primary reason visitors abandon a checkout process.
- In studies, page time load goes from 1s to 3s – the probability of bounce increases by 32%.
- In studies, page time load goes from 1s to 5s – the probability of bounce increases by 90%.
- In studies, page time load goes from 1s to 6s – the probability of bounce increases by 106%.
- In studies, page time load goes from 1s to 10s – the probability of bounce increases by 123%.
- In a recent study, the average load time for a web page was 3.21s.
- In a recent study, the average load time for a mobile web page is 22 seconds.
- For every 100ms decrease in homepage load speed, a company’s customer base saw a 1.11% lift in session-based conversion
- Users read fewer articles each day whilst experiencing delays loading each web page. The speed of the site negatively impacts a user’s session depth, no matter how small the delay.
- Two-thirds of UK consumers (67%) cite slow loading times as the main reason they would abandon an online purchase.
- 47 percent of consumers expect a web page to load in two seconds or less.
- 40 percent of consumers will wait no more than three seconds for a web page to render before abandoning the site
- 52 percent of online shoppers stated that quick page loading is important to their site loyalty.
- Shoppers often become distracted when made to wait for a page to load. 14 percent will begin shopping at another site, and 23 percent will stop shopping or walk away from their computer.
- Optimise your images – the most important thing you can do to decrease download times. Load background images via external - CSS. Minimise white space, line returns and comment tags. Remove unnecessary META tags and META content. Minimise unnecessary javascript and any other client-side scripting.
- A technical approach to improving user experience would begin with site speed.
- A faster site should improve visitor satisfaction levels and the number of conversions.
- Google might crawl your site slower if you have a very slow site (confirmed by Google).
- Retail and travel sites – 79 percent of online shoppers who experience a dissatisfying visit are less likely to buy from that site again. 64 percent would simply purchase from another online store.
- Automotive retail sites take on average 6 seconds to load.
- Customer packaged goods sites take an average of 6.1 seconds to load.
- Finance sites take an average of 5.1 seconds to load.
- Healthcare sites take an average of 5.6 seconds to load.
- Media sites take an average of 5.5 seconds to load.
- Retail sites take an average of 6 seconds to load.
- Technology sites take an average of 6.8 seconds to load.
- Travel sites take an average of 6.7 seconds to load.
- Improving your desktop site speed score in isolation of developing a compelling user experience, will not magically lead to BETTER rankings in Google in the short term.
- Ranking is a nuanced process and there are over 200 signals, but now speed is one of them. Know that ‘content’ and relevance’ are still primary.

## Interesting bookmarks

Here is a list of links to interesting articles and studies related to web performance:

1. [Web.dev Performance Guides](https://web.dev/performance/): Official documentation and guides focused on web performance, provided by Google.
2. [The State of the Web](https://httparchive.org/reports/state-of-the-web): Regularly updated overview of web development and performance with detailed statistics and analysis.
3. [Web Performance Best Practices](https://developer.mozilla.org/en-US/docs/Web/Performance): Documentation from Mozilla Developer Network (MDN) providing best practices for improving web performance.
4. [Google Developers: Web Performance](https://developers.google.com/web/fundamentals/performance): Collection of articles and guides from Google Developers focused on optimizing web performance.
5. [HTTP Archive](https://httparchive.org/): Open-source dataset containing a comprehensive collection of web data and analysis that provides detailed insights into web performance.
6. [Web Performance Case Studies](https://wpostats.com/): A series of case studies on web performance, covering various types of websites and optimization techniques.
7. [Web Performance Today](https://www.soasta.com/blog/): Blog by SOASTA (now part of Akamai) focused on current trends and tips in web performance.
8. [Fast load times](https://web.dev/fast/): Techniques for improving site performance.
9. [Web Almanac](https://almanac.httparchive.org/en/2022/): Annual report on the state of the web, with detailed statistics and analysis.

These resources should provide you with detailed information on web performance and how to optimize it.