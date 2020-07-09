# Canarytrace documentation
Stack for functional testing web application and for analyze behavior of web browser.

---

**Note:** 
- This is a living documentation. Click on Watch button for notify when the documentation is updated.
- If you found some mistake, please create a [issue](https://github.com/canarytrace/documentation/issues) or [pull request](https://github.com/canarytrace/documentation/pulls) Thanks 👍

---

## Features
- Based od [webdriver.io v6](https://webdriver.io/)
- E2E Functional testing web application.
- Analyze behavior of a web browser under test.
- Monitoring user journey from end user perspective.
- Analyze performance metrics.
- Collect additional data from browser for analyze and reporting.
- Sniffing browser networking stack.
- Live logging / reporting to Elasticsearch.
- Ready for alerting based on thresholds.
- Ready for processing of collected data by other tools.
- Ready to run on AWS, DigitalOcean, Azure Cloud and GCE via kubernetes.
- Meets the requirement for 1:1:1 pattern.
- Available as Canarytrace Cloud (Software as a Service) and as On-Premise.

### Professional and Developer editions

Canarytrace is distributed in version Professional and Developer. Professional contains all features plus [Canarytrace Listener](https://github.com/canarytrace/documentation/blob/master/listener/README.md).
- Canarytrace Professional is a paid version and is for testing and monitoring of production environment.
- Canarytrace Developer is for lecture, development of monitor script and testing lower environments such as preprod, test etc.


| Feature |                   Canarytrace Professional | Canarytrace Developer |
|---------                   | ------------------------ |----------------|
| [Canarytrace runner](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓              | ✓       |
| [Live reporting to elasticsearch](https://github.com/canarytrace/documentation/blob/master/features.md)        | ✓                 | ✓          |
| [Dockerized](https://github.com/canarytrace/documentation/blob/master/features.md)        | ✓                 | ✓          |
| [Cloning repository to docker](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | ✓          |
| [Store performance.entries data](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | ✓          |
| [Store attachments to disk or to AWS S3](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | ✓          |
| [Wait for clickable service](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | ✓          |
| [Wait for perf. entries increase](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | ✓          |
| [Elasticsearch mapping](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | ✓          |
| [Kibana vizualizations and dashboards](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | ✓          |
| [Filebeat and metricbeat logging](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |
| [Console Intercept](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |
| [Coverage Audit](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |
| [Memory Intercept](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |
| [Performance Audit](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |
| [Request Intercept](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |
| [Response Intercept](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |
| [Console Intercept](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |
| [Canarytrace Listener](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |
| [Canarytrace Listener Thresholds](https://github.com/canarytrace/documentation/blob/master/listener/README.md)         | ✓                 | X          |
| [Canarytrace Listener Alerting](https://github.com/canarytrace/documentation/blob/master/listener/README.md)         | ✓                 | X          |
| [Canarytrace Listener Reporting](https://github.com/canarytrace/documentation/blob/master/listener/README.md)         | ✓                 | X          |
| [Canarytrace Listener Slack integration](https://github.com/canarytrace/documentation/blob/master/listener/README.md)         | ✓                 | X          |
| [Full kubernetes architecture](https://github.com/canarytrace/documentation/blob/master/features.md)         | ✓                 | X          |

## Quick start

Run Canarytrace Developer on your local machine
```bash
docker run ...
```

## Documentation

- [Architecture](https://github.com/canarytrace/canarytrace-documentation/blob/master/architecture.md)
- [Compatibility](https://github.com/canarytrace/canarytrace-documentation/blob/master/architecture.md)


## Examples
- [How to run Canarytrace Developer on MacOS](https://github.com/canarytrace/canarytrace-documentation/blob/master/architecture.md)
- [How to run Canarytrace Developer on Linux](https://github.com/canarytrace/canarytrace-documentation/blob/master/architecture.md)
- [How to run Canarytrace Developer on Windows 10 Pro](https://github.com/canarytrace/canarytrace-documentation/blob/master/architecture.md)

## License

Only Canarytrace Developer is licensed under the [Apache 2 license](./LICENSE).
