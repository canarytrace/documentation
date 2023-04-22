---
sidebar_position: 1
description: Create a doc page with rich content.
title: Introduction
tags:
  - rum
---

# Real User Monitoring

RUM pomáhá zjistit, jak webová aplikace funguje koncovému uživateli. Měří výkon webové aplikace a webového browseru, zjišťuje, kdy přesně se načetla jaká část webové aplikace, jak je rychlá komunikace mezi prohlížečem a serverem a jakou má server odezvu. Zachytává kliknutí uživatele na tlačítka a další uživatelskou interakci a měří výkonnostní problémy webové aplikace jako je například plynulost a odezvu na uživatelskou interakci.

RUM získává informace o použitém prohlížeči, zařízení koncového uživatele, jeho typu a výkonu. Zároveň zachytává chyby webové aplikace, porušení bezpečnostních zásad CSP, uživatelské události jako je například - uživatel něco zobrazil nebo uživatel odeslal formulář atp.

RUM je nástroj, který se skládá z RUM Serveru, který běží v Kubernetes a RUM Client, který se vkládá v podobě Javascriptu do šablony webové aplikace.
Všechna získaná data se odesílají na RUM Server, který je Dockerizovaný a běží v Kubernetes. Data z RUM Serveru se ukládají přímo do Elasticsearch - vše se děje ve firmním serveru a nic se neodesílá ven.

RUM je bez údržový nástroj, pouze se vloží měřící skript a měřící značky do šablony webové aplikace a to je vše. Není potřeba psát žádné testovací scénáře a není potřeba žádné testy udržovat.

:::note Poznámka
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

In JavaScript, trying to access properties on `null` will error.

```js
const name = null;
// highlight
console.log(name.toUpperCase());
// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
```