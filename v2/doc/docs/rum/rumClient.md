---
sidebar_position: 4
description: Create a doc page with rich content.
title: RUM Client
tags:
  - rum
---



## RUM Client
- je klientská část RUM, která sbírá metriky, informace o zařízení, informace o prohlížeči a o uživatelských akcích a odesílá je na RUM Serveru.
- RUM Client používá WebApi webového browseru, takže garantem za získaná data je samotný webový browser.

### Implementace měřícího kódu do HTML stránky
- RUM Client script vložte před `</head>` do každé webové šablony, kterou chcete měřit.

**Minimal configuration**
```javascript
<script>
  (function(w,d,u,a,o){
  w=w[o]=w[o];w=document.createElement(u);w.async=1;w.id=o;w.src=a
  o=d.getElementsByTagName(u)[0];o.parentNode.insertBefore(w,o)
  })(window,document,'script','https://your-domain.com/rum','CRUM')
  CRUM = {
    viewId: 'homePageManual',
    labels: 'env=production, versionApp=1'
  }
</script>
```


**How to setup RUM Client**
```javascript
<head>
	<!-- your client scripts -->
	...
	<!-- insert before </head> element -->
	<script>
		(function(w,d,u,a,o){
		w=w[o]=w[o];w=document.createElement(u);w.async=1;w.id=o;w.src=a
		o=d.getElementsByTagName(u)[0];o.parentNode.insertBefore(w,o)
		})(window,document,'script','https://your-domain.com/rum','CRUM')
		CRUM = {
			samplingRate: 3000,
			viewId: 'homePageManual',
			labels: 'env=production, versionApp=1',
			trackResources: false,
			trackHeroes: false,
			trackErrors: false,
			trackConsole: false,
		}
	</script>
</head>
```


### Debug
RUM Client defaultně vypisuje pouze chybové zprávy. Chceteli vidět životní cyklus a data, které RUM Client sbírá a odesílá na RUM server, zapněte si debug mód pomocí parametru v querystring.

- `https://canarytrace.com/?debug=1` bude do console v DevTools vypisovat životní cyklus a payload, který se odesílá do RUM Server
- `https://canarytrace.com/?debug=dry` stejné jako `debug=1` a navíc neodesílá data na RUM Server


### Životní cyklus

**První Spuštění**
RUM Client čeká na událost `load` a potom se spustí. Událost `load` se spustí, když je celá stránka načtená, včetně všech závislých zdrojů, jako jsou CSS, javascript skripty, iframy a obrázky.
- Po události [[window.onload]] nebo `loadEventEnd` nebo [[DOMContentLoaded]] 
- RUM Client se snaží získat všechny údaje a odeslat je na server

**Sampling**
- Po prvním odesláním dat se čeká na nastavený `samplingRate` a další kolečku sbírání a odeslání dat se opakuje. Jde o nekonečnou smyčku. Smyslem je, nečekat na všechny data ( někdy nemusejí být k dispozici), ale odeslat co nejdříve data, které jsou k dispozici a následně sbírání všech nových hodnot po dobu používání webové aplikace uživatelem.

**Odesílaná data**
- RUM Client odesílá nasbíraná data po uplynutí nastavené doby `samplingRate`. Někdy můžete vidět, že některá data nejsou k dispozici, nebo se odešlou až při další smyčce - je to v závislosti na dostupných API použitého webového prohlížeče, jeho verzi a platformě. Nejvíce hodnot získáte z Google Chrome.

### Nastavení RUM Clienta

**CRUM Properties**
> Umožňuje měnit nastavení, zapínat či vypínat funkce RUM Clienta, při jeho startu.
- [x] `samplingRate: 5000`  Nastavuje, jak často má collector sbírat z APIs webového browseru nové hodnoty a jak často se mají odesílat další získáné hodnoty do RUM Server. Default je 5000 ms
- [x] `entriesRate: 500` Entries se odesílají zvlášť, protože to může být kolikrát velký počet záznamů a přechodem na `sendBeacon` se entries odesílají v textové podobě. Cílem je entries co nejdříve odeslat na server ale ne jako celé pole ale po kusech. Default je 500 ms
- [x] `maxEntries: 50` Kolik entries se mají v jednom requestu odeslat. `Default je 50`. Pokud by byla překročena únosná hodnota, server by jí nepřijal a zůstal by ve stavu pending.
- [x] `ignoreResources: '/rum'` Collector bude ignorovat resources, které v url obsahují uvedený řetězec. Default je `/rum`. Pokud chcete sbírat všechny resources, použijte hodnotu `no`.
- [x] `savingMode: true` V úsporném režimu se porovnává poslední a aktuální payload. Pokud jsou stejné, nebude payload odeslán. Default je `true`. Vypnout úsporný režim lze pomocí `savingMode: false`
- [x] `newSessionAfter: 300` Po jaké době nečinnosti uživatele na stránce má být vytvořené nové `session.id` a `session.startTime`. Default je 300s. Tato vlastnost je použita, pokud uživatel stránku zavře a znovu otevře. Limit pro vytvoření nové `session.id` a `session.startTime` pro pouze skrytou stránku nastavuje vlastnost `stopCollectorAfter`.
- [x] `stopCollectorAfter: 60` Po jaké době se má zastavit sběr dat a odesílání na RUM Server v případě nečinnosti uživatele. Stránku uživatel aktivně nepoužívá, je sice otevřená, ale je skryta. Default je 60s. Collector se znovu spustí, když je stránka opět viditelná. Při znovuspuštění Collectoru je nastaveno nové `session.id` a `session.startTime`. Je užitečné nastavit spíše vyšší než nižší hodnotu, pokud chcete sbírat data o webovém prohlížeči a o webové aplikaci, která se načítá na pozadí.
- [x] `viewId: 'production-home-page'` Jak má RUM Client pojmenovat aktuální stránku. Pokud se nepoužije, bude vzgenerováno UUID.
- [x] `labels: 'env=production, versionApp=1'` Umožňuje k datům odesílaným do RUM serveru přidat příznaky, které se společně s daty uloží do Elasticsearch. Ideální pro označování dat a událostí.
- [x] `trackResources` sbírá requesty odesíláné webovým prohlížečem. Default is `true`
- [x] `trackHeroes` sbírá HeroElements události. Default is `true`
- [ ] `trackErrors` sbírá informace o chybách ve webové aplikaci. Default is `true`
- [x] `trackConsole` sbírá události vytisknuté do console webového prohlížeče. Default is `true` 

**CRUM Functions**
> Umožňuje pomocí funkcí nastavit RUM Clienta.
- [x] `CRUM.setViewId('string')` umožňuje nastavit vlastní pojmenování `view`.
- [x] `CRUM.addToLabels('env=UAT')` umožňuje libovolně přidávat další label.
- [x] `CRUM.addEvent()` umožňuje ukládat libovolné hodnoty během životního cyklu webové aplikace. Například, obsah formulářů, uživatelské akce, výsledky práce requestů atp.
Example:
```javascript
// add events
CRUM.addEvent('addToBasket', {
  'product': 'iPhone',
  'variant': [13,14],
  'vendor': 'apple'
})

// add username from html into labels
let userName = $x('//a[@id="lnkUserProfile"]/text()')[0].nodeValue
CRUM.addToLabels(`user=${userName}`)
```

- [ ] CRUM.trackOnlyOrigin

### WebAPIs
> [! Ověřování api]
> Každé použité api je potřeba ověřit, že funkce nebo api je v daném browseru podporováno, pokud ne, tak hlásit přes RUM Server jako chybu.
> Jako je třeba [[Performance API#Resource Timing API]] a velikost bufferu pro [[PerformanceEntry]]
> - [[Web API Check]]
> - 22 APIs
> 

- [[Page Visibility API]] pro získání informace o tom, jestli je stránka viditelná nebo ne.
- document.hidden vrací true nebo false
-  [[🧪 PerformanceLongTaskTiming]] experimentální api, nefunguje ve FF
- [[Document.referrer]] podpora ve všech prohlizecich.
- [[navigator.getBattery]] pouze v chrome. Poskytuje informaci o tom, jestli se zařízení nabíjí nebo ne.
- [[PerformanceMark]] podporují všechny prohlížeče.
- [[PerformanceObserver]] podporují všechny prohlížeče.
- [[PerformanceEntry]] vrací list zdrojů a dalších entries jako jsou paiting, mark, document atp.
- [[Window.location]] poskytuje detaily o URL a její části
- [[WebVitals RUM implementace]] poskytuje Core Web Vitals metriky.
- [[🧪 navigator.connection]] poskytuje informace o připojení systému.
- navigator.deviceMemory vrací velikost paměti zařízení v gigabytech.
- hardwareConcurrency vrací počet logických procesorů dostupných pro spouštění podprocesů v počítači uživatele.
- localStorage
- [[🧪 performance.measureUserAgentSpecificMemory()]]
- [[⭕ Performance.memory]]
- [[UserAgent a detekce zařízení]] navigator.userAgentData
- [[UserAgent a detekce zařízení]] navigator.userAgent
- crossOriginIsolated vrací `true` pokud je web cross-origin isolation state.
- console.error, console.warn, console.debug
- window.addEventListener
- [[FPS]] a requestAnimationFrame
