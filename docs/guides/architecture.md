---
id: architecture
title: Architecture
sidebar_label: Architecture
custom_edit_url: false
---

Architektura Canarytrace je založená na dockerizovaných komponentách, které jsou orchestrovány v Kubernetes. Díky tomu lze Canarytrace provozovat v cloudech jako jsou AWS, DigitalOcean, Google Cloud Engine, Azure Cloud, nebo kdekoli jinde, kde lze provozovat Kubernetes nebo alespoň Minikube. Stejně tak lze Canarytrace provozovat v OpenShiftu.

![Architecture](../../static/docs-img/canarytrace-v3.0.png)

### Canarytrace

Canarytrace je test stack založený na https://webdriver.io/ a využívá hybridního přístupu k testování webových aplikací. Využívá se kombinace selenium a debugovacího portu browseru pro plnou kontrolu nad testovanou aplikací. Není náhradou za Zabbix nebo Nagios, Canarytrace monitoruje browser na nejvyšší / E2E úrovni. Canarytrace rotuje na úrovni infrastruktury pomocí Kubernetes CronJobu a díky tomu může běžet v nespočet instancích paralelně a izolovaně od ostatních instancí. Při spuštění dojde k naklonování git repozitáře s monitorovacími skripty a spuštění konkrétního skriptu.

**Hlavní zodpovědnosti**

- Naklonování repozitáře s měřícími skripty

- Spuštění vybraného skriptu

- Přístup do prohlížeče během testování frontendu a sbírání nefunkcionálních metrik

- Assertace funkcionálních požadavků

- Průběžné odesílání nasbíraných dat do Elasticsearch

Canarytrace nic neměří, tuto zodpovědnost nechává čistě na straně browseru, který se v ten moment stává garantem za správnost dat. Canarytrace řeší pouze logiku sbírání a filtrování nasbíraných dat a následné odesílání k analýze. Jedna instance Canarytrace se nikdy nespouští paralelně a to kvůli stálosti prostředí ve kterém měří. Paralelizace se řeší na vyšší úrovni a to pomocí Kubernetes CronJobu. Canarytrace neodesílá žádné alerty a ani nereaguje na žádné threshlody. Toto deleguje na další komponentu Canarytrace Listener.

### Canarytrace Smoke Pro

### Browser instance

Docker container s nainstalovanou konkrétní verzí prohlížeče představuje izolovaný prostor s přesně nastavenými resources pro prohlížeč. Je důležité aby měl browser dostatek prostředků a nebyl ovlivňován jinými procesy.

Canarytrace a browser jsou v rámci PODu na localhostu a to umožňuje přistupovat k debug protokolu browseru a využívat jeho API. Výhoda je v tom, že Canarytrace ovládá celý browser a neběží u vnitř a tím neblokuje některé možnosti při automatizovaných testech.

Docker container s instancí browseru obsahuje i VNC server, který umožňuje vizuální kontrolu.

### Filebeat & Metricbeat
Filebeat a Metricbeat jsou Lightweight data shippers. Jejich úkolem je sbírat logy (stdout/stderr) a metriky z docker contejnerů. Místo Metricbeat lze použít například AWS CloudWatch.

Každý POD s Canarytrace má svůj vlastní POD s Filebeat a Metricbeat.

**Hlavní zodpovědnosti**

- Odesílání logů do Elasticsearch

- Odesílání metric do Elasticsearch

### Elasticsearch cluster

Elasticsearch je distribuovaný search and analytics engine a je středobodem test automatizace. Do Elasticsearch se ukládají testreporty, data z browser api, logy a metriky z beats. Data z Elasticsearch využívá Kibana pro vizualizaci nasbíraných dat a Canarytrace Listener pro alertování a tvorbu reportů.

**Hlavní zodpovědnosti**

- Ukládání dat z Canarytrace.

- Ukládání dat z Beats.

### Kibana
Kibana slouží k prohlížení a vizualizaci dat uložených v Elasticsearch. V Kibaně lze data vyhledávat, filtrovat, ukládat vyhledávání, vytvářet reporty, grafy, tabulkové výpisy a vizualizace s vlastní firemní grafikou.

**Hlavní zodpovědnosti**

- Vyhledávání a analýza dat z testování, měření a z dat z Browser API

- Vizualizace dat a tvorba reportů.

### Canarytrace Listener
Canarytrace je komponenta, která automatizovaně analyzuje data z Elasticsearch a podle nastavených thresholdů alertuje na výstupní kanály typu slack či email. Canarytrace Listener slouží jako observer a monitoruje zda Canarytrace že běží a odesílá data do Elasticsearch. Canarytrace porovnává typ chyb a jejich četnost. Také například monitoruje požadovaný obsah hlaviček v requestech a responsech.

**Hlavní zodpovědnosti**

- Kontinuálně analyzuje nasbíraná data v Elasticsearch.

- Alertuje v případě překročení nastavených thresholdů.

### Reporting, Slack, Email
Canarytrace Listener vystavuje kompletní reporty za zvolené období a za vybraný monitor script, stejně tak odesílá průběh aktuálně nalezených incidentů do slack channelu c.service-reporting. Defaultně od slacku posílá mini reporty a na email kompletní reporty.

### GIT
V Gitu jsou uložené monitor scripty a konfigurace test stacku Canarytrace. Při spuštění Canarytrace dojde k naklonování repozitáře s monitor scripty do běžícího docker containeru.

### Persistent storage
Canarytrace ukládá attachmenty do persistentního úložiště, například. snímky obrazovky, HAR soubory, kopie vyrenderovaného DOMu pro pozdější analýzu.

---

Do you find mistake or have any questions? Please [create issue](https://github.com/canarytrace/documentation/issues/new/choose), thanks 👍