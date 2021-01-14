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

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_observations_mejb.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

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
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div id="features">
          <h2 className={styles.featuresTopic}>What sets Canarytrace apart?</h2>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map(({title, imageUrl, description}) => (
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
                {features.map(({title, imageUrl, description}) => (
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
                <h3>Part two</h3>
                <p>
                  Canarytrace Smoke Pro is a Plug’n'Play stack for testing and monitoring your web application from user perspective. Smoke Pro looking deep into browser actions analyse browser behaviour.
                </p>
              </div>
              <div className="col col--3">
                <img className={styles.featureImage} src="img/undraw_observations_mejb.svg" alt="Ficura" />
              </div>
              <div className="col col--3">
                <h3>Part two</h3>
                <p>
                  Canarytrace Smoke Pro is a Plug’n'Play stack for testing and monitoring your web application from user perspective. Smoke Pro looking deep into browser actions analyse browser behaviour.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col col--3">
                <img className={styles.featureImage} src="img/undraw_observations_mejb.svg" alt="Ficura" />
              </div>
              <div className="col col--3">
                <h3>Part two</h3>
                <p>
                  Canarytrace Smoke Pro is a Plug’n'Play stack for testing and monitoring your web application from user perspective. Smoke Pro looking deep into browser actions analyse browser behaviour.
                </p>
              </div>
              <div className="col col--3">
                <img className={styles.featureImage} src="img/undraw_observations_mejb.svg" alt="Ficura" />
              </div>
              <div className="col col--3">
                <h3>Part two</h3>
                <p>
                  Canarytrace Smoke Pro is a Plug’n'Play stack for testing and monitoring your web application from user perspective. Smoke Pro looking deep into browser actions analyse browser behaviour.
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
