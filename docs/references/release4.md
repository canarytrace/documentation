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
> - Please create an [issue](https://github.com/canarytrace/documentation/issues/new/choose) if you find a mistake, or have any questions, thanks 👍

## What news

🚀 **New features**

- Upgrade [Webdriver.IO](https://webdriver.io/) from [v6](https://v6.webdriver.io/) on [v7.5](https://webdriver.io/versions) 

🐛 **Bug fixes**

## Get started
- what is new a v7.5
- how to install

### Editions

- Canarytrace vs. Canarytrace Smoke

### Webdriver.IO and installation

`npm install @wdio/cli --save`

`npx wdio config`

- `Where is your automation backend located? ` = select `On my local machine` and confirm
- `Which framework do you want to use?` = select `mocha` and confirm
- `Do you want to use a compiler?` = select `Babel` and confirm
- `Where are your test specs located?` only confirm
- `Do you want WebdriverIO to autogenerate some test files?` type `y` and confirm
- `Do you want to use page objects` type `n` and confirm
- `Which reporter do you want to use?` = select `spec` and confirm
- `Do you want to add a service to your test setup?` = select `chromedriver` and confirm
- `What is the base url?` only confirm

and run

`npx wdio run ./wdio.conf.js --spec example.e2e.js`

More info on [Webdriver.IO documentation](https://webdriver.io/docs/gettingstarted#set-up)

### Write your first WDIO script

### Run WDIO script


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
