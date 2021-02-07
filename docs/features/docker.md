---
id: docker
title: Docker images
sidebar_label: Docker images
custom_edit_url: false
---

> ### What you’ll learn
- What docker images we created
- How to download docker images

### Canarytrace Smoke

---

Canarytrace Smoke is a free edition and you can use it for study of web performance testing.

```bash
docker pull quay.io/canarytrace/smoke
```

- Tags https://quay.io/repository/canarytrace/smoke?tab=tags
- Results are displayed in a [dashboards](/docs/features/dashboards)
- [Download a deployment script](/docs/guides/kubernetes#deploy-canarytrace-professional-to-kubernetes)


### Canarytrace Smoke Pro

---

Canarytrace Smoke Pro is deployed during 5 min, is undemanding to maintain - enter only the target landing pages and automatically performs an availability check and performs a performance audit.

```bash
docker pull quay.io/canarytrace/smoke-pro
```
- Tags https://quay.io/repository/canarytrace/smoke-pro?tab=tags
- For use this image you need to [buy a license](/docs/support/contactus)
- Available as Canarytrace Cloud (Software as a Service) and as On-Premise.
- Results are displayed in a [dashboards](/docs/features/dashboards)
- [How to get a deployment scripts](/docs/guides/kubernetes#how-to-get-a-deployment-scripts)



### Canarytrace Professional

---

Canarytrace Professional allows you to test a web application from a user perspective / user journey. You can perform a performance audit on every test steps.

```bash
docker pull quay.io/canarytrace/professional
```
- Tags https://quay.io/repository/canarytrace/professional?tab=tags
- For use this image you need to [buy a license](/docs/support/contactus)
- Available as Canarytrace Cloud (Software as a Service) and as On-Premise.
- Results are displayed in a [dashboards](/docs/features/dashboards)
- [How to get a deployment scripts](/docs/guides/kubernetes#how-to-get-a-deployment-scripts)


### Canarytrace Installer
---

Loads settings into Elasticsearch and Kibana for use with Canarytrace.

```bash
docker pull quay.io/canarytrace/installer
```
- Tags https://quay.io/repository/canarytrace/installer?tab=tags
- More info about [Canarytrace Installer](/docs/features/installer)


---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).