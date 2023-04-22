---
sidebar_position: 2
description: How and Why to use a RUM for your usecases.
title: Use Cases
tags:
  - rum
---

Canarytrace RUM je měřící skript, který se vkládá do šablon webové aplikace a díky tomu změří, jak funguje webová aplikace ve webový prohlížeči vašeho zákazníka a jak je vás zákazník spokojený.

Canarytrace RUM is important tool for guarding your web business. You will be know, how your web application works for your customers. Canarytrace RUM provides a lot of data, which can be used for next scenarios.

- Monitoring of end-user satisfaction on your production environment.
- Monitoring the quality of the web application (speed, security and error rate).
- Canarytrace RUM can be also used on the test environments as a supplement for manual testers, automated tests and developers.
- It measures how fast the communication between the backend and frontend is.
- Měří, jak rychle se načítají jednotlivé části webové aplikace.
- Měří, které části webové aplikace jsou nejvíce využívané a kolik uživatelů aktivně s webovou aplikací pracuje.
- Jaké akce uživatel ve webové aplikaci udělal a jaká byla její odezva.
- Měří, jaké zdroje si webová aplikace načetla a jaká je jejich velikost a typ.
- Měří nefunkcionální parametry webové aplikace, což je vhodné sledovat na testovacím prostředí, na produkci a před a po releasu.
- Umí sbírat informace o rychlosti backendových služeb, pokud je správně nakonfigurován response header.
- Umí sbírat informace o porušení zásad CSP.
- RUM sbírá data z webového prohlížeče o samotném prohlížeči a webové aplikaci - přidejme Listener, který získaná data automaticky vyhodnocuje a upozorňuje na nalezené problémy.

## Co se chceme z RUM dozvědět

**Otázky**
- [x] Za jak dlouho se uživateli načte stránka
	- `duration`
- [x] Na jakých stránkách se uživatel pohyboval
	- `view.href`, `view.id`
- [x] Jaké má zařízení, model, výkon (CPU  & RAM) a typ sítě
	- `attributes.device.*`, `attributes.connection.*`, `view.usedMemory`
- [x] Jak rychle se načetli resources
	- seznam zdrojů: `view.resources`
- [x] Jaké typy zdrojů webová stránka načetla
	- `view.resourceTypes`
- [ ] ~~Z Jakého regionu uživatel je~~
	- Má nízkou prioritu [[GEO Location]]
	- Data nejsou vždy dostupná a hlavně zanášíme do RUM problém s lokací uživatele
- [ ] Vykazovala stránka nějaké Javascriptové chyby?
	- Výpis z console `error`, `warn`, `debug`
	- Chybí zaznamenávání chyb, které nejsou zapsány do console, které vyvolal Javascript a chybu zachytil interpretr.
- [x] Jak rychlý byl backend vs frontend?
	- document: `metrics.ttfb` a `metrics.fp` popřípadě `metrics.fcp`
	- resources: `view.resources`
- [x] Kolik uživatelů právě teď stránku používá
	- Vypište všechny unikátní `session.id`, které nemají `session.lastLoop` starší několika minut. Například dvě minuty.
- [x] Jak dlouho uživatel na stránce byl
	- Vyberte uživatele podle `session.id` a stránku podle `view.id` popř. `view.href` a odečtěte poslední `session.lastLoop` od `session.startTime`. Výsledek je délka `session.id` v ms.
- [x] Jaké stránky uživatel otevřel?
	- `view.href` nebo `view.id` podle `session.id`
- [x] Jaké akce uživatel udělal.
	- sledování uživatelských kliknutí `view.actions` pomocí atributů `crum-action="name"``
	- přidávání událostí během celého životního cyklu webové aplikace `view.events` pomocí `crum.addEvent`
- [x] Jak rychle se uživately načetly jednotlivé části stránky
	- `view.marks`
- [x] Načítá a používá se stránka plynule
	- `view.fps`
- [x] Kolik zdrojů stránka spotřebuje
	- `view.usedMemory`
- [x] Kolik se přenese dat.
	- `view.resources.transferSize` (https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/transferSize)
- [x] Který ze zdrojů je blokující.
	- `view.resources[1].renderBlockingStatus`
- [x] Které stránky jsou nejvíce navštěvované
	- agregace podle nejvíce `view.href` nebo `view.id`