---
id: what-is-web-perf
hide_title: What is web performance test?
sidebar_label: What is web performance test?
custom_edit_url: false
description: WebPerf
keywords:
  - canarytrace
  - news
  - newsroom
  - web perf test
---

<img src="/img/banner_performance_test_02.png" />
<br/><br/><br/>

<img src="/img/miroslavKret_circle.png" width="80" />

*Miroslav Kret, September 2021*

## What is web performance test?

Web performance test or web site test is way to see how well your website performs. With this test we are getting information how web application is working. How fast is. How stable is and how user friendly is for customer.<br/>

Classic or standard performance testing (load testing) is executed to provide accurate information of the readiness of an application through testing and monitoring the server side of application. Performance testing is way how to test our application under specific load. Peak load, minimal load, expected load and of course specific performance test type called stress test, where we would like to identify maximal performance of our application. However with using any performance test tool (JMeter, Gatling,...) you’re not using browser and you're not testing your web application in browser. You only simulate traffic from this application and generate load to backend part of application. Primary focus is on infrastructure and performance test will not give you answer how well web application will works for your customer.<br/> 

On other hand web performance test is fully focussed on browser. Web perf test is sitting itself and provide you information how well web application is working. Of course is good practise to use web performance tested isolated on Prod or pre-prod env. Without any heavy load to see how web application is working. But of course make sense to measure and monitor web performance test during load test or on production during peak time to see if heavy load will affect Vitality/Web performance of your web application itself.

### How to “translate” personal feeling to numbers which we will be able to monitor, compare and more?

We are able to use speed metrics define by expert to analyse web vitality. These three metrics are called [Core web vitals](https://web.dev/vitals/) and represent vitality of web defined by Google.

| Speed          | Interactivity | Stability |
| :-------------: |:-------------:| :-----:|
| How much time application need to be able to load?    | How fast is user able to interact with application| How application is visually stable, primary measure shifts on web application. |

Each of this key factors is represented by his own metric defined in Google [Core web vitals](https://web.dev/vitals/).

### Field measuring vs. Lab/synthetic measuring

Lab measuring is way how to identify any problem as soon as possible, before affecting any customer. Using manual or automatic way you can identify potential problems. Optimal way is to use automatic tool which will often make measuring of your web application and collect relevant data for fast identification of problems. Good practise to validate your lab test is to monitor your web using real data from real user traffic. Let’s call this data filed data. Advantage of these data is real background, From real user with real machines, everybody have different HW, different internet speed. And you can simply validate your data with reality. One way to get this data is [Google Chrome Experience user report](https://developers.google.com/web/tools/chrome-user-experience-report). You can get overal data from previous months and get information how your web is working for real customers.

### Web performance test as monitor of your application

<img src="/img/performance_test_image_article.jpeg" />

*Example of measured data during day. Problem was identifies by efective and frequest measurement*

<br/>
You can test your application, you can collect overal data from production, but still there is gap in data. None of this information give you information about how the application works during any time during dat, month or year. We would like to monitor main metrics on production using web performance test how application behaves during day. If there is any problem every evening or morning, Simply by this approach you’re able to identify problem in peak or of peak time and root cause of problem. 

> To stay tuned and follow [@canarytrace](https://twitter.com/canarytrace) Twitter

---

- Do you have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).
