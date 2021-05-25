---
id: releases4
title: Canarytrace 4 alpha
custom_edit_url: false
description: Release notes
keywords:
  - canarytrace
  - webdriverio
  - releases
---

> - This is a living documentation and will be frequently updated into release Canarytrace 4.1.0
> - Please create an [create issue](https://github.com/canarytrace/documentation/issues/new/choose) if you find a mistake, or have any questions, thanks 👍

## What news

🚀 **New features**

- Upgrade [Webdriver.IO](https://webdriver.io/) from v6 on [v7.5](https://webdriver.io/versions) 

🐛 **Bug fixes**

## Webdriver.IO
- what is new a v7.5
- how to install

### Installation

`npm install @wdio/cli --save`

`npx wdio config`

```
=========================
WDIO Configuration Helper
=========================

? Where is your automation backend located? On my local machine
? Which framework do you want to use? mocha
? Do you want to use a compiler? Babel (https://babeljs.io/)
? Where are your test specs located? ./test/specs/**/*.js
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? ./test/pageobjects/**/*.js
? Which reporter do you want to use? spec
? Do you want to add a service to your test setup? chromedriver
? What is the base url? http://localhost
```

`npx wdio run ./wdio.conf.js`

### First user journey test


## Run Canarytrace 4 alpha

### Docker compose

```
version: "3.8"
services:
  chrome:
    image: selenium/standalone-chrome:4.0.0-beta-4-prerelease-20210517
    network_mode: "host"
    volumes:
      - /dev/shm:/dev/shm
  canarytrace:
    image: quay.io/canarytrace/canarytrace:latest
    depends_on:
      - chrome
    network_mode: "host"
    volumes:
      - ./test:/opt/canary/tests
    environment:
      BASE_URL: 'https://the-internet.herokuapp.com/'
      SPEC: 'specs/example.e2e.js'
```

`docker-compose up`

### Kubernetes

### CLI
