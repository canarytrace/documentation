---
id: glosary
title: Glosary
sidebar_label: Glosary
custom_edit_url: false
description: Canarytrace Glosary
keywords:
  - test
  - test1
  - test2
---

> ### What you’ll learn
- This glossary contains an explanation of the technologies and terms used in the Canarytrace ecosystem.

### Web Performance Testing

Web Performance Testing is type of automation test for measuring of key performance indicators of web application. Metrics such as WebVitals, JS Heap, throughput, count tasks over 100ms, Time to First Byte, Response Time etc. it is  measured and analysed directly in a browser. 
In this case is a browser and his APIs and diagnostic tools guarantee for data accuracy.

### TTFB

Is the time, when first byte from response arrived to browser net stack.

### Response Times

Is the time, when the entire response, including body, arrived at the browser

### Performance Entries

Performance entries is a collection of a single performance metric that is part of the performance timeline.
- [Performance Entry documentation](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry)

### Load Event End

Is the time, when is current loading complete. Canarytrace awaits this event. After this event it's possible to perform next operations in the monitor script e.g. `titleElm.waitForExist(…)`
- [PerformanceNavigationTiming.loadEventEnd documentation](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventEnd)

### entryType: navigation
- Collects performance metrics for HTML documents.
- [W3C Navigation timing](https://w3c.github.io/navigation-timing/)
- [Assessing Loading Performance in Real Life with Navigation and Resource Timing](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing)

### entryType: resource
- Collects performance metrics for document-dependent resources. Stuff like style sheets, scripts, images, etc.
- [W3C Resource timing](https://w3c.github.io/resource-timing/)
- [Assessing Loading Performance in Real Life with Navigation and Resource Timing](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing)

### Test Case / Monitor script

It’s the same code / file. In the world of functional testing is used terms Test Case, but for management and other colleagues is better to use term monitor script.
- Example with test case saved to smoke.js  @todo

### Hero Elements

It’s a method for accurate measurement when and what is displayed for the user.
- Hero Elements @todo

### DOMHighResTimeStamp

The time, given in milliseconds, should be accurate to 5 µs (microseconds), with the fractional part of the number indicating fractions of a millisecond. However, if the browser is unable to provide a time value accurate to 5 µs (due, for example, to hardware or software constraints), the browser can represent the value as a time in milliseconds accurate to a millisecond. [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp)

- Use for [Performance Entries](https://canarytrace.atlassian.net/wiki/spaces/CDD/pages/192315512/Performance+Entries) and Hero Elements @todo

---

Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍