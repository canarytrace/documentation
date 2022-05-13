---
id: console
title: Console Intercept
sidebar_label: Console Intercept
---

> ### What you’ll learn
- What is Console Intercept

<a href="/docs/why/edition#canarytrace-pro"><span class="canaryBadge">Canarytrace Pro</span></a>

[Canarytrace Pro](http://localhost:3000/docs/why/edition#canarytrace-pro) continuously collects messages, warnings, errors, debug, info etc. from browser console. All information are stored into [`c.console-*`](/docs/features/live-reporting#cconsole-) Elasticsearch index.

## Type of messages

### Log.entryAdded 

Issued when new message was logged.
- source: `xml, javascript, network, storage, appcache, rendering, security, deprecation, worker, violation, intervention, recommendation, other`
- level: `verbose, info, warning, error`
- documentation: https://chromedevtools.github.io/devtools-protocol/tot/Log/#type-LogEntry


```javascript title="Log.entryAdded"
{
    "source": "recommendation",
    "level": "verbose",
    "text": "[DOM] Input elements should have autocomplete attributes (suggested: \"current-password\"): (More info: https://goo.gl/9p2vKq) %o",
    "timestamp": "2021-07-06T06:08:01.345Z",
    "url": "https://www.example.cz/",
    "args": [
      {
        "type": "object",
        "subtype": "node",
        "className": "HTMLInputElement",
        "description": "input#user-box-login-form-passwd.placeholder-toggle",
        "objectId": "-4975198532180155070.1.1"
      }
    ],
    "sequence": 5,
    "labels": [
      "mode=canarytrace-smoke-pro-develop",
      "engine=wdio",
      "develop080756"
    ],
    "spec": "smoke.js",
    "context": "Smoke https://www.example.cz/",
    "uuidAction": "3af9c7409d78ed5cd50d",
    "uuid": "61f3269aeb0a6d6c1ff7",
    "eventType": "Log.entryAdded"
  }
```
 
### Console.messageAdded

Issued when new console message is added.

- source `xml, javascript, network, console-api, storage, appcache, rendering, security, other, deprecation, worker`
- level `log, warning, error, debug, info`
- documentation: https://chromedevtools.github.io/devtools-protocol/tot/Console/#event-messageAdded

```javascript title="Console.messageAdded"
{
    "source": "console-api",
    "level": "log",
    "text": "917.7000002861023",
    "url": "",
    "line": 10,
    "column": 19,
    "sequence": 12,
    "labels": [
      "mode=canarytrace-smoke-pro-develop",
      "engine=wdio",
      "develop080756"
    ],
    "spec": "smoke.js",
    "context": "Smoke https://live.example.cz/",
    "uuidAction": "f2c50c0db2d650480687",
    "uuid": "61f3269aeb0a6d6c1ff7",
    "eventType": "Console.messageAdded",
    "timestamp": "2021-07-06T06:08:03.886Z"
  }
```

### Runtime.consoleAPICalled

Issued when console API was called.

- source `log, debug, info, error, warning, dir, dirxml, table, trace, clear, startGroup, startGroupCollapsed, endGroup, assert, profile, profileEnd, count, timeEnd`
- documentation: https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#event-consoleAPICalled

```javascript title="Runtime.consoleAPICalled"
{
    "type": "log",
    "args": [
      {
        "type": "string",
        "value": "Cookies doesn't exist. Stopping SSO."
      }
    ],
    "executionContextId": 1,
    "timestamp": "2021-07-06T06:08:01.289Z",
    "stackTrace": {
      "callFrames": [
        {
          "functionName": "calloutGetLoggedInPlayer",
          "scriptId": "10",
          "url": "https://www.example.cz/static/dist/prod/js/app.min.49907c57d7aefe1f23059799443c3311.js",
          "lineNumber": 431,
          "columnNumber": 10010
        },
        {
          "functionName": "loggedInPlayerHandlerX",
          "scriptId": "11",
          "url": "https://login.example.cz/jswrapper/integration.js.php?abc=example.cz",
          "lineNumber": 946,
          "columnNumber": 59
        },
        {
          "functionName": "",
          "scriptId": "11",
          "url": "https://login.example.cz/jswrapper/integration.js.php?abc=example.cz",
          "lineNumber": 2050,
          "columnNumber": 45
        }
      ]
    },
    "sequence": 1,
    "labels": [
      "mode=canarytrace-smoke-pro-develop",
      "engine=wdio",
      "develop080756"
    ],
    "spec": "smoke.js",
    "context": "Smoke https://www.example.cz/",
    "uuidAction": "3af9c7409d78ed5cd50d",
    "uuid": "61f3269aeb0a6d6c1ff7",
    "eventType": "Runtime.consoleAPICalled"
  }
```

### Runtime.exceptionThrown

Issued when exception was thrown and unhandled.

- documentation: https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#event-exceptionThrown

```javascript title="Runtime.exceptionThrown"
{
    "exceptionId": 1,
    "text": "Uncaught",
    "lineNumber": 0,
    "columnNumber": 161,
    "scriptId": "164",
    "stackTrace": {
      "callFrames": [
        {
          "functionName": "",
          "scriptId": "164",
          "url": "",
          "lineNumber": 0,
          "columnNumber": 161
        },
        {
          "functionName": "",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 7005,
          "columnNumber": 413
        },
        {
          "functionName": "c",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 7007,
          "columnNumber": 159
        },
        {
          "functionName": "Oe",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6732,
          "columnNumber": 498
        },
        {
          "functionName": "e",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6825,
          "columnNumber": 277
        },
        {
          "functionName": "",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6689,
          "columnNumber": 129
        },
        {
          "functionName": "",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6826,
          "columnNumber": 357
        },
        {
          "functionName": "",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6826,
          "columnNumber": 97
        },
        {
          "functionName": "gn",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6826,
          "columnNumber": 827
        },
        {
          "functionName": "on",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6830,
          "columnNumber": 42
        },
        {
          "functionName": "Wt",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6905,
          "columnNumber": 235
        },
        {
          "functionName": "Yt",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6908,
          "columnNumber": 392
        },
        {
          "functionName": "a.push",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6911,
          "columnNumber": 89
        },
        {
          "functionName": "a.push",
          "scriptId": "121",
          "url": "https://www.google-analytics.com/gtm/js?id=GTM-58SJBBN&t=gtm33&cid=1819976119.1625551681",
          "lineNumber": 213,
          "columnNumber": 456
        },
        {
          "functionName": "",
          "scriptId": "29",
          "url": "https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B",
          "lineNumber": 6910,
          "columnNumber": 216
        }
      ]
    },
    "exception": {
      "type": "object",
      "subtype": "error",
      "className": "TypeError",
      "description": "TypeError: Apll.fetchUserDetails is not a function\n    at <anonymous>:1:162\n    at https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:7006:414\n    at c (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:7008:160)\n    at Oe (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6733:499)\n    at e (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6826:278)\n    at https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6690:130\n    at Array.<anonymous> (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6827:358)\n    at Object.Kb (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6827:98)\n    at gn (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6827:828)\n    at on (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6831:43)",
      "objectId": "-4975198532180155070.1.2",
      "preview": {
        "type": "object",
        "subtype": "error",
        "description": "TypeError: Apll.fetchUserDetails is not a function\n    at <anonymous>:1:162\n    at https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:7006:414\n    at c (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:7008:160)\n    at Oe (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6733:499)\n    at e (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6826:278)\n    at https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6690:130\n    at Array.<anonymous> (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6827:358)\n    at Object.Kb (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6827:98)\n    at gn (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6827:828)\n    at on (https://www.googletagmanager.com/gtm.js?id=GTM-KGGX2B:6831:43)",
        "overflow": false,
        "properties": [
          {
            "name": "stack",
            "type": "string",
            "value": "TypeError: Apll.fetchUserDetails is not a func…oogletagmanager.com/gtm.js?id=GTM-KGGX2B:6831:43)"
          },
          {
            "name": "message",
            "type": "string",
            "value": "Apll.fetchUserDetails is not a function"
          }
        ]
      }
    },
    "executionContextId": 1,
    "sequence": 7,
    "labels": [
      "mode=canarytrace-smoke-pro-develop",
      "engine=wdio",
      "develop080756"
    ],
    "spec": "smoke.js",
    "context": "Smoke https://www.example.cz/",
    "uuidAction": "3af9c7409d78ed5cd50d",
    "uuid": "61f3269aeb0a6d6c1ff7",
    "eventType": "Runtime.exceptionThrown",
    "timestamp": "2021-07-06T06:08:02.580Z"
  }
```


- [Logging Console browser activity #80](https://github.com/canarytrace/documentation/issues/80)


---

- Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍
- Have more questions? [Contact us](/docs/support/contactus).