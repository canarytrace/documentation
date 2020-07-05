![](https://raw.githubusercontent.com/canarytrace/documentation/master/docs/Canarytrace_v3.0_num_transparent.png)

**Czech version**

Architektura Canarytrace je založená na dockerizovaných komponentách, které jsou orchestrovány v Kubernetes. Díky tomu lze Canarytrace provozovat v cloudech jako jsou [AWS](https://aws.amazon.com/), [DigitalOcean](https://www.digitalocean.com/), [Google Cloud Engine](https://console.cloud.google.com/), [Azure Cloud](https://azure.microsoft.com/), nebo kdekoli jinde, kde lze provozovat [Kubernetes](https://kubernetes.io/) nebo alespoň [Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/).
Stejně tak lze Canarytrace provozovat v [OpenShiftu](https://www.openshift.com/).

### 1. Canarytrace

Canarytrace je test stack založený na [https://webdriver.io/](https://webdriver.io/) a využívá hybridního přístupu k testování webových aplikací. Využívá se kombinace selenium a debugovacího portu browseru pro plnou kontrolu nad testovanou aplikací. Není náhradou za Zabbix nebo Nagios, Canarytrace monitoruje browser na nejvyšší / E2E úrovni.
Canarytrace rotuje na úrovni infrastruktury pomocí Kubernetes [CronJobu](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/) a díky tomu může běžet v nespočet instancích paralelně a izolovaně od ostatních instancí. 
Při spuštění dojde k naklonování git repozitáře s monitorovacími skripty a spuštění konkrétního skriptu.

![](https://raw.githubusercontent.com/canarytrace/canarytrace-documentation/master/docs/Canarytrace_v3.1_1_1_transparent_2.png)

**Hlavní zodpovědnosti**
- Naklonování repozitáře s měřícími skripty
- Spuštění vybraného skriptu
- Přístup do prohlížeče během testování frontendu a sbírání nefunkcionálních metrik
- Assertace funkcionálních požadavků
- Průběžné odesílání nasbíraných dat do Elasticsearch

Canarytrace nic neměří, tuto zodpovědnost nechává čistě na straně browseru, který se v ten moment stává garantem za správnost dat. Canarytrace řeší pouze logiku sbírání a filtrování nasbíraných dat a následné odesílání k analýze.
Jedna instance Canarytrace se nikdy nespouští paralelně a to kvůli stálosti prostředí ve kterém měří. Paralelizace se řeší na vyšší úrovni a to pomocí Kubernetes [CronJobu](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/). Canarytrace neodesílá žádné alerty a ani nereaguje na žádné threshlody. Toto deleguje na další komponentu Canarytrace Listener.  

### 2. Browser instance
Docker container s nainstalovanou konkrétní verzí prohlížeče představuje izolovaný prostor s přesně nastavenými resources pro prohlížeč. Je důležité aby měl browser dostatek prostředků a nebyl ovlivňován jinými procesy.

Canarytrace a browser jsou v rámci PODu na localhostu a to umožňuje přistupovat k debug protokolu browseru a využívat jeho API. Výhoda je v tom, že Canarytrace ovládá celý browser a neběží u vnitř a tím neblokuje některé možnosti při automatizovaných testech.

Docker container s instancí browseru obsahuje i VNC server, který umožňuje vizuální kontrolu.

### 3. Filebeat & Metricbeat
[Filebeat](https://www.elastic.co/beats/) a [Metricbeat](https://www.elastic.co/beats/) jsou Lightweight data shippers. Jejich úkolem je sbírat logy (stdout/stderr) a metriky z docker contejnerů. Místo Metricbeat lze použít například AWS CloudWatch.

Každý POD s Canarytrace má svůj vlastní POD s Filebeat a Metricbeat.

**Hlavní zodpovědnosti**
- Odesílání logů do Elasticsearch
- Odesílání metric do Elasticsearch


### 4. Elasticsearch cluster
[Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html) je distribuovaný search and analytics engine a je středobodem test automatizace. Do Elasticsearch se ukládají testreporty, data z browser api, logy a metriky z beats.
Data z Elasticsearch využívá Kibana pro vizualizaci nasbíraných dat a Canarytrace Listener pro alertování a tvorbu reportů.

**Hlavní zodpovědnosti**
- Ukládání dat z Canarytrace.
- Ukládání dat z Beats.

### 5. Kibana
Kibana slouží k prohlížení a vizualizaci dat uložených v Elasticsearch. V Kibaně lze data vyhledávat, filtrovat, ukládat vyhledávání, vytvářet reporty, grafy, tabulkové výpisy a vizualizace s vlastní firemní grafikou.

**Hlavní zodpovědnosti**
- Vyhledávání a analýza dat z testování, měření a z dat z Browser API
- Vizualizace dat a tvorba reportů.


### 6. Canarytrace Listener
Canarytrace je komponenta, která automatizovaně analyzuje data z Elasticsearch a podle nastavených thresholdů alertuje na výstupní kanály typu slack či email. 
Canarytrace Listener slouží jako observer a monitoruje zda Canarytrace že běží a odesílá data do Elasticsearch.
Canarytrace porovnává typ chyb a jejich četnost. Také například monitoruje požadovaný obsah hlaviček v requestech a responsech.

**Hlavní zodpovědnosti**
- Kontinuálně analyzuje nasbíraná data v Elasticsearch.
- Alertuje v případě překročení nastavených thresholdů.


### 7. Reporting, Slack, Email
Canarytrace Listener vystavuje kompletní reporty za zvolené období a za vybraný monitor script, stejně tak odesílá průběh aktuálně nalezených incidentů do slack channelu `c.service-reporting`. Defaultně od slacku posílá mini reporty a na email kompletní reporty.

### 8. GIT
V Gitu jsou uložené monitor scripty a konfigurace test stacku Canarytrace.
Při spuštění Canarytrace dojde k naklonování repozitáře s monitor scripty do běžícího docker containeru.


### 9. Persistent storage
Canarytrace ukládá attachmenty do persistentního úložiště, například. snímky obrazovky, HAR soubory, kopie vyrenderovaného DOMu pro pozdější analýzu.
