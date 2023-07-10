---
id: wdio
title: WDIO Test Script

description: How to write our first Webdriver.io test script
keywords:
  - canarytrace
  - webdriverio
---

> ### What you’ll learn
> - What is a Werbdriver.IO
> - How to write our first Webdriver.IO test script
> - How to deploy into Kubernetes

## Get started
---
Canarytrace is a dockerized stack for testing and monitoring vitality of web applications. Use a test frameworks [mocha](https://mochajs.org/) and [Webdriver.IO](https://webdriver.io/) and if you have some test cases for Webdriver.IO, you can run them in Canarytrace. Canarytrace does not change the Webdriver.IO code in any way.

Canarytrace adds features for non-invasive / agent-less monitoring of performance and high availability of web applications, equipment for undistorted and accurate measurements from cloud and without vendor-lock e.g. Kubernetes deployments, live reporting a lot of data from a browser for investigation of performance issues, implements tools such as Lighthouse for performance audit, settings for Elasticsearch and Kibana for the operators, testers or managers.

For user-journey Canarytrace use [Webdriver.io](https://webdriver.io/)

### Browser Capabilities
WDIO for start `goog:chromeOptions` use these flags, which help faster start the browser.

```javascript
...
capabilities: [{
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--remote-debugging-port=9222',
        '--remote-debugging-host=0.0.0.0',
        '--start-fullscreen',
        '--disable-notifications',
        '--window-size=1920,1080',
        '--no-default-browser-check',
        '--no-first-run',
        '--disable-breakpad',
        '--disable-component-update',
        '--disable-sync',
        '--allow-running-insecure-content',
        '--disable-client-side-phishing-detection',
        '--disable-default-apps',
        '--disable-device-discovery-notifications',
        '--disable-domain-reliability',
        '--disable-background-timer-throttling',
        '--load-media-router-component-extension=0',
        '--mute-audio',
        '--disable-hang-monitor',
        '--password-store=basic',
        '--dont-require-litepage-redirect-infobar',
        '--override-https-image-compression-infobar',
        '--disable-site-isolation-trials'
      ]
    }
  }],
...
```

### How user-journey mode work
---
Canarytrace can run in [modes](/docs/#two-modes) `smoke` or `user-journey` and only user-jourey mode use Webdriver.io monitor script. Monitor script is useful for monitoring user flow, e.g. buying process.

** Workflow**

1. Write your first monitor script for test framework Webdriver.io
2. Push your test case in your Git repository
3. Setup Git environment variables in your `user-journey.yaml`
4. Run Canarytrace in Kubernetes and your Git repository will be pulled automatically into Docker container with Canarytrace. In the next step will switch onto your monitor script by Git revision and will be run.

### Write your first monitor script

If you want monitoring user journey, you must prepare test case / monitoring script based on testing framework [Webdriver.io](https://webdriver.io/). 

[Webdriver.io](https://webdriver.io/) is a testing framework written in javascript and it's installation is very simple.

#### Install and prepare Webdriver.IO

1). Install node.js

- Please use LTS (recommended version) of [Node.js](https://nodejs.org/en/)

2). Install Webdriver.IO

- Prepare package.json `npm init --yes`
- Install Webdriver.IO `npm install @wdio/cli --save`
- For more info: [Getting Started with Webdriver.IO](https://webdriver.io/docs/gettingstarted)

3). Configuration of Webdriver.IO

- run configuration `npx wdio config`

4). Configuration steps
- `Where is your automation backend located?` = select `On my local machine` and confirm
- `Which framework do you want to use?` = select `mocha` and confirm
- `Do you want to use a compiler?` = select `Babel` and confirm
- `Where are your test specs located?` only confirm
- `Do you want WebdriverIO to autogenerate some test files?` type `y` and confirm
- `Do you want to use page objects` type `n` and confirm
- `Which reporter do you want to use?` = select `spec` and confirm
- `Do you want to add a service to your test setup?` = select `chromedriver` and confirm
- `What is the base url?` = only confirm
- `Do you want me to run npm install?` = yes

🎉 Great, Webdriver.IO is ready with including a demo test.

**What is installed?**

```bash
-rw-r--r--    1 rdpanek  staff   204B 27 May 08:54 babel.config.js
drwxr-xr-x  314 rdpanek  staff   9.8K 27 May 08:54 node_modules
-rw-r--r--    1 rdpanek  staff   133K 27 May 08:54 package-lock.json
-rw-r--r--    1 rdpanek  staff   482B 27 May 08:54 package.json
drwxr-xr-x    3 rdpanek  staff    96B 27 May 08:54 test
-rw-r--r--    1 rdpanek  staff    11K 27 May 08:54 wdio.conf.js
```

- `node_modules` dependencies and packages
- `package.json` version of dependencies
- `test` contains our first demo test case
- `wdio.conf.js` configuration

#### Run demo test

- In this same directory run your test `npx wdio run wdio.conf.js`

More info on [Webdriver.IO documentation](https://webdriver.io/docs/gettingstarted#set-up)


## Run Canarytrace in Kubernetes
---

Canarytrace is designed for running in a Kubernetes and we have ready deployment objects.

1). Create namespace

`kubectl create namespace canarytrace`

2). Deploy your private ssh key to Kubernetes

- Create ssh key withtout passphrase via `ssh-keygen`

```bash
ᐰ ssh-keygen -t ed25519 -C "your_email@example.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/rdp/.ssh/id_ed25519): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/rdp/.ssh/id_ed25519.
Your public key has been saved in /Users/rdp/.ssh/id_ed25519.pub.
The key fingerprint is:
SHA256:AxSzKTAVDYfk/lhkP1gjToeyFuNImvDwS8EiRzrZz70 your_email@example.com
The key's randomart image is:
+--[ED25519 256]--+
|  +o===.         |
| * +.o.=         |
|O * * X +        |
|o@ B % B .       |
|o = B = S        |
| . o + . o       |
|  . . E          |
|                 |
|                 |
+----[SHA256]-----+
```

- Upload public key `/Users/rdp/.ssh/id_ed25519.pub` to your Github
- Create secret, which will contains your private ssh key
```bash
kubectl -n canarytrace create secret generic secret-github --from-file=ssh-privatekey=/Users/rdp/.ssh/id_ed25519
```
- Download and edit `user-journey.yaml` from [Canarytrace Docker image](/docs/guides/kubernetes#how-to-get-a-deployment-scripts). 
- Create deployment `kubectl -n canarytrace create -f canarytrace.yaml`


### Environment variables

This ENV are useful for setup Canarytrace behavior, switch edition, setup credentials to repository or elasticsearch etc.
Some ENV have a default value, there's no need to set them.

- `USER` - username used in your test case via `browser.config.username`
- `PASS` - password used in your test case via ``browser.config.password``

Example

```javascript title="Webdriver.io script"
  it('fill login and password inputs', async () => {
    const userNameElm = await $(userNameInput)
    await userNameElm.waitForClickable({timeoutMsg: 'Username input not exist.'})
    await userNameElm.setValue(browser.config.username);

    const passwordElm = await $(passwordInput)
    await passwordElm.waitForClickable({timeoutMsg: 'Password button not exist.'})
    await passwordElm.setValue(browser.config.password);
  })
```

- `BASE_URL` - start URL and in test use only `browser.url('/');`

```yaml title="user-journey.yaml"
- name: BASE_URL
  value: "https://the-internet.herokuapp.com/login"
```
and in your test case use only `/` in [browser.url()](https://webdriver.io/docs/api/browser/url) method
```javascript title="Webdriver.io script"
  it('open home page', async () => {
    await browser.url('/');
    await expect(browser).toHaveTitle(title, {message: 'Element title not found. The page couldn\'t be loaded in time.'})
  });
```


> ### What next?
- [Kubernetes](/docs/guides/kubernetes)
- [CLI and Environment variables](/docs/guides/cli)

---

Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍