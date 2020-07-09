# Canarytrace documentation
Stack for functional testing web application and for analyze behavior of web browser.

---

**Note:** This is a living documentation. Click on Watch button for notify when the documentation is updated.

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
| Canarytrace runner         | ✓              | ✓       |
| Live reporting to elasticsearch        | ✓                 | ✓          |
| Dockerized        | ✓                 | ✓          |
| Cloning repository to docker         | ✓                 | ✓          |
| Store performance.entries data         | ✓                 | ✓          |
| Store attachments to disk or to AWS S3         | ✓                 | ✓          |
| Wait for clickable service         | ✓                 | ✓          |
| Wait for perf. entries increase         | ✓                 | ✓          |
| Elasticsearch mapping         | ✓                 | ✓          |
| Kibana vizualizations and dashboards         | ✓                 | ✓          |
| Console Intercept         | ✓                 | X          |
| Coverage Audit         | ✓                 | X          |
| Memory Intercept         | ✓                 | X          |
| Performance Audit         | ✓                 | X          |
| Request Intercept         | ✓                 | X          |
| Response Intercept         | ✓                 | X          |
| Console Intercept         | ✓                 | X          |
| Canarytrace Listener         | ✓                 | X          |
| Canarytrace Listener Thresholds         | ✓                 | X          |
| Canarytrace Listener Alerting         | ✓                 | X          |
| Canarytrace Listener Reporting         | ✓                 | X          |
| Full kubernetes architecture         | ✓                 | X          |

## Documentation

- [Architecture](https://github.com/canarytrace/canarytrace-documentation/blob/master/architecture.md)


## Examples
