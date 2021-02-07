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
        <div id="contact us">
          <h2 className={styles.featuresTopic}>What sets Canarytrace apart?</h2>
          <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
          <div id="mc_embed_signup">
            <form action="https://canarytrace.us7.list-manage.com/subscribe/post?u=0d360a761b492b97cd84da039&amp;id=04902e6668" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <label for="mce-EMAIL">Send news to my inbox</label>
                <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                    <input type="text" name="b_0d360a761b492b97cd84da039_04902e6668" tabindex="-1" value="" />
                  </div>
                  <div className="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                  </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
