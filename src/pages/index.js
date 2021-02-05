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
    imageUrl: 'img/undraw_observations_mejb.svg',
    description: (
      <>
        Start a performance audit and evaluate requirements. A lot of speed metrics as Web Vitals, TTFB, Response Time, Speed Index and many more will help you to meet all of your requirement. You will receive regular recommendations for improvements
      </>
    ),
  },
  {
    title: 'More metrics, more informations, more opportunities',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        The more you know, the more accurately you identify the problem. Smoke Pro detects and logs more than 60 metrics already available.
      </>
    ),
  },
  {
    title: 'From user perspective',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        We see it the same way<br/>
        Monitor conditions as your users. This is great added value and irreplaceable access.
      </>
    ),
  },
  {
    title: 'Trends',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        View last week’s or months metrics and error rates.<br/>
        You can create trends over any available metrics such as ResponseTime or Performance Score. Couple of dashboard are ready for you.
      </>
    ),
  },
  {
    title: 'Do you like data?',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        is it up to you how long history you want to store, couple of weeks or months? Old data are automatically deleted. 
        <br />
        You can backup your stored data or search, filter, aggregate and visualise them.
      </>
    ),
  }
];


const featuresSecondLine = [
  {
    title: 'Device mix',
    imageUrl: 'img/undraw_observations_mejb.svg',
    description: (
      <>
        Computer and mobile devices are main channels today. Surprise for you and your web how it’s running on weak mobile devices of on slow networks. Or you can simply combine desktop and mobile device
      </>
    ),
  },
  {
    title: 'Practically non-stop',
    imageUrl: 'img/undraw_observations_mejb.svg',
    description: (
      <>
        Smoke Pro is checking availability of your web every minute. You won’t miss any defect anymore.
      </>
    ),
  },
  {
    title: 'You will be first to know',
    imageUrl: 'img/undraw_observations_mejb.svg',
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
          <h2 className={styles.featuresTopic}>What sets Canarytrace apart?</h2>
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
        <h2 className={styles.featuresTopic}>Part two</h2>
          <div className="container" id="feature1">
            <div className="row">
              <div className="col col--3">
                <img className={styles.featureImage} src="img/undraw_observations_mejb.svg" alt="Ficura" />
              </div>
              <div className="col col--3">
                <h3>Live Reporting</h3>
                <p>
                Results and measured values are instantly send - the whole team know actual state.<br/>
                Smoke Pro is fully ready to be part of CI pipelines.
                </p>
              </div>
              <div className="col col--3">
                <img className={styles.featureImage} src="img/undraw_observations_mejb.svg" alt="Ficura" />
              </div>
              <div className="col col--3">
                <h3>With 5 µs accuracy</h3>
                <p>
                The speed of the web is complex topic, we are interested in and we take it seriously. We have developed our own methodologies so we can measure and analyse reliably and precisely.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col col--3">
                <img className={styles.featureImage} src="img/undraw_observations_mejb.svg" alt="Ficura" />
              </div>
              <div className="col col--3">
                <h3>Hero Elements</h3>
                <p>
                <b>Point to interested part of your web page.</b><br/>
                We’ll tag the different parts of the site with Hero Elements and you’ll know exactly when the user will see a banner or product for example.
                </p>
              </div>
              <div className="col col--3">
                <img className={styles.featureImage} src="img/undraw_observations_mejb.svg" alt="Ficura" />
              </div>
              <div className="col col--3">
                <h3>Plug'n'Play</h3>
                <p>
                No long installation with dozens of steps. Insert target address of web application and press run.<br/>
                So simple. We can help you with starting or monitoring, and it could be completely easy for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
