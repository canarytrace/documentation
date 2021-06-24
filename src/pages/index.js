/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const featuresFirstLine = [
  {
    title: 'Performance Audit',
    imageUrl: 'img/performance.svg',
    description: (
      <>
        Start a performance audit and evaluate requirements every 3 min. We measure the speed of loading web applications in great detail. You will receive regular recommendations for improvements.
      </>
    ),
  },
  {
    title: 'More metrics, more information, more opportunities',
    imageUrl: 'img/metrics.svg',
    description: (
      <>
        The more you know, the more accurately you identify the problem. Smoke Pro detects and logs more than 60 metrics already available. A lot of speed metrics as Web Vitals, TTFB, Response Time, Speed Index and many more will help you to meet all of your requirement.
      </>
    ),
  },
  {
    title: 'From user perspective',
    imageUrl: 'img/users.svg',
    description: (
      <>
        We see it the same way<br/>
        Monitor conditions as your users. This is great added value and irreplaceable access.
      </>
    ),
  },
  {
    title: 'Trends',
    imageUrl: 'img/trends.svg',
    description: (
      <>
        View last week’s or months metrics and error rates.<br/>
        You can create trends over any available metrics such as ResponseTime or Performance Score. Couple of dashboard are ready for you.
      </>
    ),
  },
  {
    title: 'Live Reporting',
    imageUrl: 'img/reporting.svg',
    description: (
      <>
        Results and measured values are instantly send - the whole team know actual state. Smoke Pro is fully ready to be part of CI pipelines.
      </>
    ),
  },
  {
    title: 'Every minute',
    imageUrl: 'img/bug.svg',
    description: (
      <>
        Smoke Pro is checking availability of your web every minute - practically non-stop. You won’t miss any defect anymore.
      </>
    ),
  }
];


const featuresSecondLine = [
  {
    title: 'Device mix',
    imageUrl: 'img/devices.svg',
    description: (
      <>
        Computer and mobile devices are main channels today. Surprise for you and your web how it’s running on weak mobile devices of on slow networks. Or you can simply combine desktop and mobile device
      </>
    ),
  },
  {
    title: 'Hero Elements',
    imageUrl: 'img/hero.svg',
    description: (
      <>
        Point to interested part of your web page.<br/>
        We’ll tag the different parts of the site with Hero Elements and you’ll know exactly when the user will see a banner or product for example.
      </>
    ),
  },
  {
    title: 'You will be first to know',
    imageUrl: 'img/message.svg',
    description: (
      <>
        You can get notification on Slack, email, or we’ll call you. If you like graphs, we have plenty of them for you. 
        <br/>
        Smoke Pro evaluates a lot of metrics, based on thresholds or their combinations, notifications are triggered.
      </>
    ),
  }
]
function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Canarytrace ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p>
          Just enough <code>docker-compose up</code> or <code>kubectl create -f smoke.yml</code>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/docs/canary/start/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div id="features">
          <h1 className={styles.featuresTopic}>What sets Canarytrace apart?</h1>
          {featuresFirstLine && featuresFirstLine.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {featuresFirstLine.map(({title, imageUrl, description}) => (
                    <Feature
                      key={title}
                      title={title}
                      imageUrl={imageUrl}
                      description={description}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}
          <section className={styles.featuresSecond}>
            <div className="container">
              <div className="row">
                {featuresSecondLine.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
        <div id="features">
        <h2 className={styles.featuresTopic}>Who's using Canarytrace</h2>
          <br />
          <div className="container" id="clients">
            <div className="row">
              <div className="col col--4">
                <a href="https://www.kosik.cz/" target="_blank">
                  <img src="clients/kosik.png" alt="Kosik.cz" width="300" height="121" />
                </a>
              </div>
              <div className="col col--4">
                <a href="https://www.ifortuna.cz/" target="_blank">
                  <img src="clients/feg.png" alt="FEG" width="300" height="121" />
                </a>
              </div>
              <div className="col col--4">
                <a href="https://nakit.cz/" target="_blank">
                  <img src="clients/nakit.png" alt="Nakit" width="300" height="121" />
                </a>
              </div>
            </div>
          </div>
          <br />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
