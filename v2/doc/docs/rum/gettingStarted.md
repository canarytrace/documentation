---
sidebar_position: 3
description: Create a doc page with rich content.
title: Getting Started
tags:
  - rum
---

## Terminologie

**RUM Client**
RUM Client je javascript, který zajišťuje měření a získání dat z browseru a z webové aplikace. RUM Client se vkládá do HTML šablon, kde má být RUM Client použít. RUM Client získaná data odesílá do RUM Server.

**CRUM**
CRUM je objekt API RUM Client, pokocí kterého lze RUM Client nastavit. Obsahuje properties a functions.

**Collector**
Collector je proces v RUM Clientovi, který v pravidelných intervalech sbírá data z API webového prohlížeče. Na konci svého životního cyklu data odešle do RUM Server a začíná sbírat nová dostupná data.
- V jakém intervalu Collector sbírá data lze nastavit pomocí `CRUM.samplingRate`.
- Collector se zastavuje pokud stránka není delší dobu používána. Po jaké době se Collector zastaví lze nastavit pomocí `CRUM.stopCollectorAfter`.
- Collector se znovu spustí, když je stránka opět viditelná. Při znovuspuštění jsou smazány `session.id`, `session.startTime` and `session.lastLoop` z prohlížeče uživatele. Následně se vytvoří nové `session.id`, `session.startTime` a aktualní `session.lastLoop`

**RUM Server**
RUM Server je backendová část, která běží v Kubernetesm, vystavuje endpointy, které používá RUM Client. RUM Server přijímá payload s naměřenými daty z RUM Client a ukládá je do Elasticsearch.


## Data

```javascript
const payload = {
  session: {
    id: '123456',
    startTime: 1675377137759,
    lastLoop: 1675377354738,
    duration: 4,
  },
  view: {
    id: 'homepage',
    startTime: 1679327449180, // odstranit, neuzitecne, timestamp je +/- v elasticu
    visit: 0, // 1 poprve (v ramci aktivni session), 2 vicekrat (v ramci aktivni session)
    href: 'https://www.alza.cz/sandisk-ultra-flair?dq=4016974',
    protocol: 'https:',
    host: 'www.alza.cz',
    hostname: 'www.alza.cz',
    port: '',
    pathname: '/sandisk-ultra-flair',
    search: '?dq=4016974',
    hash: '', 
    origin: 'https://www.alza.cz',
    referer: 'https://www.alza.cz/pocitace-a-notebooky',
    longTasks: [
		{
		  duration: 109,
		  name: "self",
		  startTime: 1516
		}
    ],
    resourceTypes: {
      "css": {
          "count": 14
      },
      "javascript": {
          "count": 23
      },
      "image": {
          "count": 57
      },
      "fetch": {
          "count": 15
      },
      "font": {
          "count": 6
      },
      "other": {
          "count": 1
      }
    },
    resources: [
      {
        "name": "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700",
        "entryType": "resource",
        "startTime": 538.4000000003725,
        "duration": 192.80000000074506,
        "initiatorType": "link",
        "nextHopProtocol": "h3",
        "renderBlockingStatus": "non-blocking",
        "workerStart": 0,
        "redirectStart": 0,
        "redirectEnd": 0,
        "fetchStart": 538.4000000003725,
        "domainLookupStart": 553.0999999996275,
        "domainLookupEnd": 553.0999999996275,
        "connectStart": 553.0999999996275,
        "secureConnectionStart": 553.3000000007451,
        "connectEnd": 655.8000000007451,
        "requestStart": 656,
        "responseStart": 728,
        "responseEnd": 731.2000000011176,
        "transferSize": 1087,
        "encodedBodySize": 787,
        "decodedBodySize": 10254,
        "responseStatus": 200,
        "serverTiming": []
      }
    ],
    fps: [
      {
        timeStamp: 18136.59999999404,
        fps: 119
      }
    ],
    marks: [
      {
        'name': 'HE-start-rum',
        'detail': 'Load RUM script from the RUM Server.',
        'startTime': 486
      },
      {
        'name': 'HE-end-rum',
        'detail': '',
        'startTime': 488
      }
    ],
    console: [
      {
        "type": "warn",
        "timeStamp": 892483.7999999821,
        "value": {
          "0": "warn zprava"
        }
      }
    ],
    /*
    analyzersErrors: [],
    */
    actions: [
      {
        "pointerType": "mouse",
        "type": "click",
        "target": "span",
        "timeStamp": 1410.7999999523163,
        "name": "header-order-button"
      }
    ],
    events: [
      {
        "addToBasket": {
          "product": "iPhone",
          "variant": [
            "blue"
          ]
        }
      }
    ],
    visibility: 'visible',
    usedMemory: 35494235 // bytes
  },
  attributes: {
    labels: ['env=dev', 'versionApp=19'],
    browser: 'Firefox',
    browserVersion: '109',
    uaParser: 'userAgent',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0'
    connection: {
      effectiveType: '4g', 
      rtt: 50, 
      downlink: 10, 
      saveData: false
    }
    device: {
      type: 'mobile',
      platform: 'Apple',
      memory: 8,
      cpu: 10,
      charging: true
    }
  },
  audits: {
    crossOriginIsolated: false
  },
  metrics: {
    fp: 0,
    fcp: 0,
    cls: 0,
    lcp: 0,
    fid: 3.8000000715255737,
    inp: 0,
    ttfb: 0,
    responseTime: 0,
    domContentLoadedEventStart: 0,
    domContentLoadedEventEnd: 0,
    domContentLoadedDuration: 0,
    renderDuration: 0,
    domComplete: 0,
    duration: 0
  }
}
```

### session 
jsou ukazately aktivity uživatele a odesílají se na RUM Server v každém odeslaném payloadu.

| attribute name | type | description |
|--|--|--|
|`session.id`|`string`|UUID aktivního uživatele, ukládá se do prohlížeče.|
|`session.startTime`|`integer`|Je to časové razítko vytvoření uživatelské relace. Slouží k určení délky session. Ukládá se do prohlížeče.|
|`session.lastLoop`|`integer`|Je časové razítko každého loopu collectoru. Pokud je `session.lastLoop` starší pěti minut (tzn. za 5min nebylo aktualizováno), je vytvořené nové `session.id` a `session.startTime`. Ukládá se do prohlížeče.|
|`session.duration`|`integer`|Je délka session v sekundách.

**Session lifecycle**
- Při první návštěvě uživatele na stránce je vytvořeno `session.id` a `session.startTime`. Tyto hodnoty se uloží do prohlížeče uživatele.
- Při setrvání uživatele na stránce je pravidelně aktualizováno `session.lastLoop` ve smyčce podle nastaveného `crum.samplingRate`.
- Při další návštěvě stránky uživatelem se hodnoty `session.id` a `session.startTime` načtou z prohllížeče.
- Při další návštěvě stránky uživatelem se zjistí čas `session.lastLoop` a pokud je starší než `crum.newSessionAfter` bude vytvořeno nové `session.id` a `session.startTime`. Časové razítko `session.lastLoop`  není aktualizováno pokud uživatel stránku zavře, nebo pokud je stránka skryta. Díky tomu můžeme zjistit aktuální počet aktivních uživatelů a délku každé návštěvy s odchylkou pár minut. 

**Jak zjistit**
- Počet aktuálně živých session: Vypsat všechny unikátní `session.id`, které nemají `session.lastLoop` starší v řádech několika minut, například dvě minuty.
- Jak zjistit délku jedné session: Vypsat konkrétní `session.startTime` a následně `( now-session.startTime )` = výsledný čas v milisekundách.


### view 
je stránka, kterou uživatel prochází a váže se ke každému payloadu

| attribute name | type | description |
|--|--|--|
|`view.id`|`string`|Automaticky generované UUID stránky. UUID je vždy unikátní. Lze manuálně nastavit při vložení RUM Kolektor scriptu do šablony pomocí vlastnosti `CRUM.viewId='homePage'` a nebo lze kdykoliv dodatečně nastavit pomocí `CRUM.setViewId='homePage'`.|
|`view.startTime`|`integer`|Je to časové razítko otevření stránky. Je využíváno k identifikaci počtu náštěv na konkrétní stránku. `view.startTime` je vždy jiné po novém otevření stránky.
|`view.href`|`string`|String s celou URL [[Window.location]]|
|`view.protocol`|`string`|String obsahující schéma včetně `:` [[Window.location]]|
|`view.host`|`string`|Obsahuje název hostitele a případně i port [[Window.location]]|
|`view.hostname`|`string`|Obsahuje doménu URL adresy [[Window.location]]|
|`view.port`|`string`|Obsahuje port URL adresy [[Window.location]]|
|`view.pathname`|`string`|Obsahuje `/` následovaný cestou ale bez query [[Window.location]]|
|`view.search`|`string`|Obsahuje `?` následovaný `querystringem` [[Window.location]]|
|`view.hash`|`string`|Obsahuje `#` následovaný identifikátorem fragmentu [[Window.location]]|
|`view.origin`|`string`|Origin [[Window.location]]|
|`view.referer`|`string`|Předchozí URL, pokud uživatel přišel na stránku pomocí odkazu. Prázdné, pokud uživatel přišel na stránku přímo.|
|`view.visibility`|`string`|Viditelnost stránky při načítání. Může mít hodnoty `visible` or `hidden` [[Page Visibility API]] Pokud se stav mění, je zaznamenán poslední stav. Visibilita může být v rámci samplingu i jiná než během načítání.|
|`view.longTasks`|`array`|Zaznamenané tasky a jejich délka. [[🧪 PerformanceLongTaskTiming]]|
|`view.resources`|`array`|Zaznamenané navigation a resources z `performance.getEntries()`. [[PerformanceNavigationTiming]] and [[PerformanceResourceTiming]]|
|`view.resourceTypes`|`object`|Seznam zaznamenaných typů resources a jejich počet [[PerformanceResourceTiming#test & snippet]]|
|`view.marks`|`array`|Zaznamená všechny `performance.mark`, jejichž název obsahuje string `HE`. |
|`view.fps`|`array`|Vypočítává každou vteřinu plynulost animací. [[FPS]]|
|`view.console`|`array`|Zachytává zprávy z konzole typu `error`, `warn` a `debug`. [[Console]]|
|`view.usedMemory`|`integer`|Využitá paměť webovou aplikací v bytes. RUM Client se snaží využít hned dvě api pro přesné změření, ale ne všechny browsery toto měření umožňují. [[🧪 performance.measureUserAgentSpecificMemory()]]|
|`view.actions`|`array`|Seznam akcí, které uživatel provedl. RUM Client hledá elementy, které mají atribut `crum-action="name"`. Při použití atributu `crum-send` je zaznamenaná událost odeslána ihned a navíc se odesílají i `events`.|
|`view.events`|`array`|Seznam událostí, které můžete libovolně během životního cyklu aplikace odesílat přímo do RUM Clienta pomocí `CRUM.addEvent()` CRUM Client automaticky přidá `timeStamp`.|

**Jak vyhledávat v datech**
[[RUM v2 Kibana syntaxe#Vyhledávání ve `view` v Kibana]]

**How to use `performance.mark()`**
```html
<!-- hero element is surrounded by the measurement marks -->
<html>
...
<script>performance.mark('HE-start-tailwind')</script>
	<script src="https://cdn.tailwindcss.com"></script>
<script>performance.mark('HE-end-tailwind')</script>

<!-- You can use performance.mark for measure moment when the element was loaded -->
<img src="./img/webperf.webp" onload="performance.mark('HE-main-banner')" alt="Web Performance Testing" width="800" height="424">
...
<body>

<!-- Or measure, when server responsed -->
<script>
	fetch("http://example.com/movies.json")
	  .then((response) => response.json())
	  .then((data) => {
	    performance.mark('HE-response-movies')
	    console.log(data)
	  });
</script>

<!-- you can use in your events -->
<script>
	document.addEventListener("scroll", function handler() {
	    //Remove the event listener so that it only triggers once
	    document.removeEventListener("scroll", handler);
	    // for timestamp for first scroll event
	    performance.mark('HE-first-scroll')
	});
</script>
...
```


**How to user client actions**
values are available in `view.actions`
```javascript
// add crum-action attribute and name to monitored element. The RUM Client record the click on this element.
<span class="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600" crum-action="header-order-button">Objednat</span>

// immediately send
<span class="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600" 
crum-action="header-order-button" crum-send>Objednat</span>
```

**How to use addEvent**
```javascript
// first parameter is requires, second param is optional
CRUM.addEvent('best-training', {
  'name': 'webPerf',
  'days': ['MON','THU'],
  'open': true,
})

// or minimal
CRUM.addEvent('addToBasket')
```



### attributes
attributy měření

| attribute name | type | description |
|--|--|--|
|`attributes.labels`|`array`|Libovolné informace, které se posílají s každým payloadem. Může obsahovat verzi aplikace, prostředí a další doplňkové informace.
|`attributes.browser`|`string`|Vendor browser name. [[UserAgent a detekce zařízení]]|
|`attributes.browserVersion`|`string`|Verze prohlížeče. [[UserAgent a detekce zařízení]]|
|`attributes.uaParser`|`string`|Metoda identifikace zařízení a prohlížeče. `userAgent` parsování z běžného UA stringu a `userAgentData` je nové api, poskytuje identifikaci, ale není podporováno ve všech prohlížečích. [[UserAgent a detekce zařízení]]|
|`attributes.ua`|`string`|UA string, které bylo parserem zpracováno. [[UserAgent a detekce zařízení]]|
|`attributes.connection.effectiveType`|`string`|Vrací řetězec `slow-2g`, `2g`, `3g` nebo `4g`. Vzchází se z posledního pozorování propustnosti downlinku na aplikační vrstvě. [[🧪 navigator.connection]]|
|`attributes.connection.rtt`|`integer`|Je doba v _milisekundách_ potřebná k odeslání datového paketu na místo určení plus doba, za kterou je paket přijat zpět na místo určení. [[🧪 navigator.connection]]|
|`attributes.connection.downlink`|`integer`|Vrací odhad šířky efektivního pásma v _megabitech_ za sekundu, zaokrouhlený na nejbližší násobek 25kilobitů za sekundu. [[🧪 navigator.connection]]|
|`attributes.connection.saveData`|`boolean`|Vrátí `true`, pokud uživatel nastavil možnost sníženého využití dat na uživatelském agentovi. [[🧪 navigator.connection]]|
|`attributes.device.type`|`string`|`mobile` or `desktop`.|
|`attributes.device.platform`|`string`|Název vendora zařízení, např. `Apple`|
|`attributes.device.memory`|`integer`|Dostupná paměť v zařízení. Ne všechny prohlížeče toto měření podporují.|
|`attributes.device.cpu`|`integer`|Dostupný počet dostupných logických processors pro spuštění vláken v zařízení.|
|`attributes.device.charging`|`boolean`|`true` Pokud se zařízení nabíjí a `false` pokud se nenabíjí. V něketerých prohlížečích nefunguje, proto vrací `false`|


### audits
provedené audity

| audit name | type | description |
|--|--|--|
|`audits.crossOriginIsolated`|`boolean`|Vrátí `true` pokud běží stránka v secure contextu. [[🧪 performance.measureUserAgentSpecificMemory()]]|

### metrics
získané metriky

| attribute name | type | description |
|--|--|--|
|`metrics.fp`|`integer`|Čas kdy poprvé se na obrazovce vykreslní první pixel od začátku navigace. [[FP]]|
|`metrics.fcp`|`integer`|Čas, kdy prohlížeč vykreslil první část obsahu DOMu. [[FCP]]|
|`metrics.cls`|`integer`|Měření vizuální stability. [[CLS]]|
|`metrics.lcp`|`integer`|Čas vyrenderování největšího obrázku nebo textu ve viewportu. [[LCP]]|
|`metrics.fid`|`integer`|Měří čas mezi první interakcí uživatele a jejím skutečným provedením. [[FID]]|
|`metrics.inp`|`integer`|Tato metrika sleduje většinu uživatelských interakcí a nízké INP znamená, že stránka bude reagovat pro většinu uživatelských interakcí. [[WebPerf/Metrics/INP]]|
|`metrics.domComplete`|`integer`|Dokončilo se načítání dokumentu a všech dílčích zdrojů. [[PerformanceNavigationTiming]]|
|`metrics.domContentLoadedEventStart`|`integer`|Čas bezprostředně předtím, než se spustí event handler `DOMContentLoaded`. Na tento okamžik zpravidla čekají různé Javascriptové knihovny a frameworky. |
|`metrics.domContentLoadedEventEnd`|`integer`|HTML dokument je kompletně zparsován, všechny deferované skritpy jsou načtené a spuštěné. Nečeká se na obrázky, iframy a dokončení async skriptů. [[PerformanceNavigationTiming]]|
|`metrics.domContentLoadedDuration`|`integer`|Jak dlouho trvá zpracování `DOMContentLoaded` události.|
|`metrics.renderDuration`|`integer`|Doba mezi `loadEventEnd` a `domContentLoadedEventStart`, tedy od začátku zpracovávání dokumentu po událost `loadEventEnd`, tedy celá stránka je zpracovaná včetně stažených resources. |
|`metrics.duration`|`integer`|Celková doba navigace, včetně zpracování dokumentu.|
|`metrics.ttfb`|`integer`|Doba od začátku navigace po `responseStart`.|
|`metrics.responseTime`|`integer`|Celková doba odesílání odpovědi ze serveru.|

