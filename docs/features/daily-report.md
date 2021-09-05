---
id: daily-report
title: Daily Report
sidebar_label: Daily Report
---

> ### What you’ll learn
- What is a Daily Report
- For whom is the report intended?


Daily Report is highlevel overview on availability and vitality of your a web pages. Are you a manager or administrator, you don't want to know the technical details, but do you need of see of a traffic light on the timeline to know the availability of a web application during whole a day?
Get into your email an automatic report for the previous day every morning.

![Daily Report](../../static/docs-img/dailyReport.png)

> [Download example daily report](https://canarytrace.com/examples/DailyReport.png)

### Availability

Is the application available and usable? Is the availability issue caused by the backend or frontend? Is possible go through the main business core scenarios such as buy product, fill form, log in etc.

### Vitality

How fast the web application loads and if there is a problem with speed, then where. Is a slow frontend or backed? Which phase of loading the frontend is causing problems.

### How to run

Daily Report is a part of Canarytrace stack.

- [How to get a deployment scripts](/docs/guides/kubernetes#how-to-get-a-deployment-scripts)

### Configuration

- `ELASTIC_CLUSTER` - URI of elasticsearch cluster.
- `ELASTIC_HTTP_AUTH` - Basic authentication in format username:password.
- `EMAIL_SMTP_SERVER` - Smtp server
- `EMAIL_SMTP_PORT` - Smtp port
- `EMAIL_SMTP_USER` - Smtp username
- `EMAIL_SMTP_PASS` - Smtp password
- `RECIPIENTS` - Comma separated list or an array of recipients email addresses that will appear on the Bcc: field e.g. `rdpanek@canarytrace.com,miroslav.kret@canarytrace.com`

### Optional
- `ENV_PRINT` - `allow` for print all environment variables.

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).