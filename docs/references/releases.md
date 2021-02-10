---
id: releases
title: Release notes
custom_edit_url: false
description: Release notes
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

### Canarytrace Smoke Pro 3.0.5
**Released 21. 01. 2021**

📦 **Changes**
- Performance audit isn't run if response code of navigate request is higher than 399.
- Performance audit is run in a separate step called `performance audit`


🐛 **Bug fixes**
- Fix bug with duplicate objects from Network.responseReceived and repair checker of wrong url.

---

### Canarytrace Smoke Pro 3.0.3
**Released 19. 01. 2021**

🐛 **Bug fixes**

- Url validator: url with special symbols or incomplete format.

---

### Canarytrace Smoke Pro 3.0.2
**Released 09. 01. 2021**

🚀 **New features**

- Docker image contains a [deployment scripts for k8s](/docs/guides/kubernetes#how-to-get-a-deployment-scripts)

---

### Canarytrace Smoke Pro 3.0.1
**Released 04. 01. 2021**

🚀 **New features**

- Creating and saving a better report from Lighthouse 6.4.1
- Remove label ENV and added label labels  which is stored in all elasticsearch indices. Labels contains useful information about setup Canarytrace.
- Automatically added label with throttlingType
- Better login in a elasticsearch services.
- Loging full response if is response code > 399
- Performance Audit: maxWaitForFcp and maxWaitForLoad: increase from 10.000 ms to 100.000 ms
- Added PT_AUDIT_THROTTLING options, e.g. desktopDense4G, mobileSlow4G, mobileRegular3G
