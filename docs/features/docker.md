---
id: docker
title: Docker images
sidebar_label: Docker images
---

> ### What you’ll learn
- What Docker images we have
- How to download Docker images

### Canarytrace

---

```bash
docker pull quay.io/canarytrace/canarytrace-pub:4.2.17-pro-20210618073421-28
```
> #### Please push Docker image with Canarytrace to your docker registry!

- [Contact us](/docs/support/contactus) for create a Docker image and license key. You will receive email with  link to download the Docker image and the license key.
- What is [Canarytrace](http://localhost:3000/docs/why/edition)
- Results are displayed in a [dashboards](/docs/features/dashboards)
- [Download a deployment script](/docs/guides/kubernetes#how-to-get-a-deployment-scripts)


### Canarytrace Installer
---

Loads settings into Elasticsearch and Kibana for use with Canarytrace.

```bash
docker pull quay.io/canarytrace/installer
```
- Tags https://quay.io/repository/canarytrace/installer?tab=tags
- More info about [Canarytrace Installer](/docs/features/installer)


### Canarytrace Shipper
---

Sync static files e.g. [Lighthouse HTML reports](/docs/features/lighthouse#reporting) with your [AWS S3](https://aws.amazon.com/s3/).

```bash
docker pull quay.io/canarytrace/shipper
```
- Tags https://quay.io/repository/canarytrace/shipper?tab=tags
- More info about [Canarytrace Shipper](/docs/features/shipper)


---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).