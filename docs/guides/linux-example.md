---
id: linux
title: Linux example
sidebar_label: Linux example
custom_edit_url: false
---

> ### What you’ll learn
- This installer prepare Elasticsearch and Kibana for Canarytrace use
- What is options for Canarytrace Installer?

## Prepare Linux droplet on DigitalOcean

**Create and sign in to droplet on DigitalOcean**

DigitalOcean Droplets are simple, scalable virtual machines.
- Start on [https://www.digitalocean.com](https://www.digitalocean.com/) and sign up
- [Create droplet](https://cloud.digitalocean.com/droplets/new) *Droplet is only business name for virtual machine*
- **Choose an image** > **Marketplace** select `Docker 19.03.1` on `OS Ubuntu 18.04` or newer
- **Choose a plan** select Shared CPU - Basic 
- Select 8GB a 4CPUs
- Choose a datacenter `Frankfurt 1`
- Add your SSH key or choose Password option and create your root password and save it  (You will **not** be sent an email containing the password)
- Click on **Create Droplet** button

> Wait for your virtual machine (alias droplet) is created.

![Azure deployment](../../static/docs-img/do-droplet.png)

- Use your ssh client for log into droplet. For example on MacOSX - open terminal an run `ssh root@46.101.224.194`.
  - Use password to your private key or your root password.
  - Always use `root` as username.
- And check, that docker is ready

```bash
# run this command
docker run hello-world

# this is how the output should look like
...
Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```

## Create docker network

> User-defined bridges provide automatic DNS resolution between containers

```bash
docker network create canary
```

Canarytrace and selenium will be created in the same network and they will recognize each other by their container name

## Run Selenium standalone

```bash
docker run --name selen --net canary -d -p 5902:5900 -p 4444:4444 -p 0.0.0.0:9222:9222 -v /dev/shm:/dev/shm selenium/standalone-chrome-debug:3.141.59-20200730
```

- [Open documentation](https://github.com/SeleniumHQ/docker-selenium) for more information.
- Open url `<ip-your-droplet:4444` in your browser, for example `http://46.101.224.194:4444` and you should see message `Selenium Standalone v.3.141.59`

## Create your first easy test case

Go to your home directory and create directory with name demo

```bash
cd ~/ && mkdir demo && cd demo
```

Create an empty file and open it via program vim

```bash
touch smoke.js
vim smoke.js
```

- press the key `i` for insert mode

Paste to `smoke.js` first test case.

```bash
// Save this script to smoke.js
describe('Smoke monitoring on tesla.com', () => { 
  describe('HomePage', () => {
    it('open', () => {
      browser.url('https://www.tesla.com/')
      const title = 'Electric Cars, Solar & Clean Energy | Tesla'
      const titleElm = $(`//title[contains(text(),"${title}")]`)
      browser.waitForloadEventEnd()
      expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
    });
  });
})
```

- press the key `escape` on your keyboard, write `:` followed by `wq` and press `enter` to save and exit from vim editor
- this test script is based on [webdriver.io v6](https://webdriver.io/docs/api.html) and you can extend the test script.

## Create bash script runner

- This file simplifies startup of Canarytrace runner.
- Create an empty file and open it via program vim

```bash
touch runner.sh
vim runner.sh
```

- press the key `i` for insert mode

```bash
# Save this script to runner.sh

#!/bin/bash

docker run --name canary --rm -ti \
-e SPEC=smoke.js \
-e AT_DRIVER_HOST_NAME=selen \
--net canary \
-v $(pwd):/tmp/canary-tests \
quay.io/canarytrace/developer:c.2.12.2
```

- press the key `escape` on your keyboard, write `:` followed by `wq` and press `enter` to save and exit from vim

**Explanation**

- `docker run --name canary --rm -ti` run a docker container with the name canary, output will be printed to stdout and the container will be deleted at the end of the test.
- `-e SPEC=smoke.js` define your test case.
- `-e AT_DRIVER_HOST_NAME=selen` name container with selenium standalone
- `--net canary network name`
- `-v $(pwd):/tmp/canary-tests` mount place when I'm now and where I have a tests to path in the docker container
- `quay.io/canarytrace/developer:c.2.12.2` container image in format `maintainer/name_docker_image:version`. Check out repository for latest docker image [https://quay.io/organization/canarytrace](https://quay.io/organization/canarytrace)

Your directory looks like this

```bash
ls -lah
total 16
drwxr-xr-x  4 rdpanek  staff   128B 10 čvc 19:14 .
drwxr-xr-x  6 rdpanek  staff   192B 10 čvc 17:14 ..
-rwxr--r--  1 rdpanek  staff   234B 10 čvc 19:14 runner.sh
-rw-r--r--  1 rdpanek  staff   472B 10 čvc 17:17 smoke.js
```

## Run your first test case

Make runner.sh executable.

```bash
chmod u+x runner.sh
```

Run Canarytrace with test case

```bash 
./runner.sh
```

Output from Canarytrace ends as follows

```bash
...
[chrome 76.0.3809.87 linux #0-0] Spec: /tmp/canary-tests/smoke.js
[chrome 76.0.3809.87 linux #0-0] Running: chrome (v76.0.3809.87) on linux
[chrome 76.0.3809.87 linux #0-0] Session ID: 3d6139ff33294d71664603e6613c3a05
[chrome 76.0.3809.87 linux #0-0]
[chrome 76.0.3809.87 linux #0-0] Smoke monitoring on tesla.com
[chrome 76.0.3809.87 linux #0-0]     HomePage
[chrome 76.0.3809.87 linux #0-0]        ✓ open
[chrome 76.0.3809.87 linux #0-0]
[chrome 76.0.3809.87 linux #0-0] 1 passing (2.2s)


Spec Files:	 1 passed, 1 total (100% completed) in 00:00:04
```

**When you are done using Canarytrace**

Stop the selen container

```bash
$ docker container stop selen
```

and remove user-defined bridge canary

```bash
docker network rm canary
```

> - This demo is available in a git repository [https://github.com/canarytrace/canary-tests.git] - Can't find link   you can checkout on aaa2790 revision
> - **Don't forget to delete the virtual machine (=droplet) when no longer needed**

---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).