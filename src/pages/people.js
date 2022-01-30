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


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Canarytrace ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Our team</h1>
          <p className="hero__subtitle">We create a unique stack that helps ensure the vitality of web applications</p>
        </div>
      </header>
      <main>
        <div id="people">
          <br />
          <div class="container">
            <div class="row">
              <div class="col col--4">
                <div class="avatar avatar--vertical">
                  <img
                    class="avatar__photo avatar__photo--xl"
                    src="/img/radimDanielPanek.png"
                  />
                  <div class="avatar__intro">
                    <br/>
                    <h4 class="avatar__name">Radim Daniel Pánek</h4>
                    <small class="avatar__subtitle">
                      CEO, SDET & Performance Tester <br />
                      <a href="https://twitter.com/rdpanek">@rdpanek</a>
                    </small>
                  </div>
                </div>
              </div>
              <div class="col col--4">
                <div class="avatar avatar--vertical">
                  <img
                    class="avatar__photo avatar__photo--xl"
                    src="/img/miroslavKret.png"
                  />
                  <div class="avatar__intro">
                    <br/>
                    <h4 class="avatar__name">Miroslav Kret</h4>
                    <small class="avatar__subtitle">
                      Co-founder, Project Manager <br/>
                      <a href="https://twitter.com/kret_miroslav">@kret_miroslav</a>
                    </small>
                  </div>
                </div>
              </div>
              <div class="col col--4">
                <div class="avatar avatar--vertical">
                  <img
                    class="avatar__photo avatar__photo--xl"
                    src="/img/veronikaPankova.png"
                  />
                  <div class="avatar__intro">
                    <br/>
                    <h4 class="avatar__name">Veronika Pánková</h4>
                    <small class="avatar__subtitle">
                      Monitoring specialist <br/>
                      <a href="https://twitter.com/Kralovaver">@Kralovaver</a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div class="container">
            <div class="row">
              <div class="col col--4">
                <div class="avatar avatar--vertical">
                  <img
                    class="avatar__photo avatar__photo--xl"
                    src="/img/undefined.png"
                  />
                  <div class="avatar__intro">
                    <br/>
                    <h4 class="avatar__name">Nquyen Le Thinh</h4>
                    <small class="avatar__subtitle">
                      Javascript Developer <br/>
                    </small>
                  </div>
                </div>
              </div>
              <div class="col col--4">
              </div>
            </div>
            <br />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
