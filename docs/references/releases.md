---
id: releases
title: Release notes
custom_edit_url: false
description: Perex
keywords:
  - canarytrace
  - documentation
  - releases
---

## Tagging Convention
> **Useful links** <br/><br/>
> - [Semantic Version 2.0](https://semver.org/)
> - [Our docker registry](https://quay.io/organization/canarytrace)

```bash
# Canarytrace Smoke
quay.io/canarytrace/smoke:<Major>.<Minor>.<Patch>

# Canarytrace Smoke Pro
quay.io/canarytrace/smoke-pro:<Major>.<Minor>.<Patch>

# Canarytrace Developer
quay.io/canarytrace/developer:<Major>.<Minor>.<Patch>

# Canarytrace Professional
quay.io/canarytrace/professional:<Major>.<Minor>.<Patch>
```

---

### Canarytrace Smoke Pro 3.0.2 🎉
**Released 09. 01. 2021**

🚀 **New features**

- Docker image contains a deployment scripts for k8s

---

### Canarytrace Smoke Pro 3.0.1 🎉
**Released 04. 01. 2021**

🚀 **New features**

- Creating and saving a better report from Lighthouse 6.4.1

- Remove label ENV and added label labels  which is stored in all elasticsearch indices. Labels contains useful information about setup Canarytrace.

- Automatically added label with throttlingType

- Better login in a elasticsearch services.

- Loging full response if is response code > 399

- Performance Audit: maxWaitForFcp and maxWaitForLoad: increase from 10.000 ms to 100.000 ms

- Added PT_AUDIT_THROTTLING options, e.g. desktopDense4G, mobileSlow4G, mobileRegular3G
