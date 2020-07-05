# Canarytrace
> Stack for functional testing web application and for analyze behavior of web browser.

## Features

**Test stack**
- support pattern 1:1:1
- ready for run on AWS, DO, Azure, GCE via Kubernetes
- available as cloud and on-premise
- profesional and developer version
- live reporting
- based on WDIO v6

## Functional testing
- full control over the browser 

## Web Performance Testing

## Frontend analyzer
- JS Coverage
https://www.mattzeunert.com/2017/03/29/how-does-chrome-code-coverage-work.html

## Logging
### Console Intercept
- Slow network is detected. See https://www.chromestatus.com/feature/5636954674692096 for more details. Fallback font will be used while loading: https://www.ifortuna.cz/static/fonts/open_sans_normal.woff"
- Failed to load resource: the server responded with a status of 404 ()

## Elasticsearch saved data

### Performance audit

## Overview

**Monitoring 24/7**

Stálý dohled z uživatelské perspektivy.

**Business case step by step**

Procházení a monitoring nejdůležitějších částí aplikace.

**Aplikaci vidíme stejně jako váš zákazník**

Dohled probíhá nad reálným prohlížečem.

**Rychlost aplikace je kritickým faktorem**

Syntetické měření rychlosti načítání aplikace.

**Vidíme do hloubky**

Z prohlížeče stahujeme další data pro analýzu skrytých problémů.

**Dashboardy, vizualizace a trendy**

Metriky a incidenty vizualizujeme do přehledné podoby.

**Reporting**

Vytváříme periodický report i s komentářem a doporučením.

**O incidentech a nedostupnosti**

V případě problému posíláme notifikaci do emailu nebo slacku.

**V Cloudu**

Nepotřebujete infrastrukturu - o vše se postaráme.

**Více nalezených incidentů s rychlejším zacílením na zdroj**

Umíme rozlišit, jestli mají incident řešit vývojáři, DevOps nebo marketéři.


## Documentation

- [Architecture](https://github.com/canarytrace/canarytrace-documentation/blob/master/architecture.md)

## FAQ

**Potřebuji performance testera?**

Canarytrace umí do určité míry performance testing zastoupit. Zaměřuje se na perspektivu uživatele včetně chování prohlížeče, zatím
co performance testing probíhá na úrovni infrastruktury.

**Je canarytrace náhradou za jiný monitorovací nástroj?**

Canarytrace používá plnohodnotný prohlížeč, stejně jako uživatel. Jiné nástroje pracují spíše na úrovni infrastruktury, takže nedokaží posuzovat skutečný stav webové aplikace.

**Potřebuji školení pro používání canarytrace?**

Vaši testeři využijí dosavadní zkušenosti s psaním E2E funkcionálních GUI testů a my provedeme školení dalších oblastí. Nebo monitoring a analýzu provedeme my.

**Jaké incidenty dokáže canarytrace zachytit?**

Canarytrace zachytí širokou paletu typů incidentů. Od nedostupnosti aplikace, chybové response kódy z infrastruktury, problémy s rychlostí načítání, chybějící nebo špatné nastavení hlaviček requestů a responsů, nefunkční části aplikace, zvýšené spotřeby použité paměti až po nečekané zásahy marketérů nebo chyby v konfiguraci aplikace.

**Co je potřeba z naší strany?**

Definice business cases, které potřebujete monitorovat a měřit, někdy i testovací data, pokud je vyžadováno přihlášení a někdy i prostupy, pokud potřebujete monitorovat na jiném než produkčním prostředí. Například před, během a po performance testech.

**Nebudeme na to sami?**

Jsme připraveni vám poskytnout podporu včetně analýzy vaší aplikace a dodat doporučení co zlepšit.
