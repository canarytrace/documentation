import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <div class="container">
          <div class="row">
            <div class="col col--4">
              <p>
                Edit <code>pages/hello.js</code> and save to reload.
              </p>
            </div>
            <div class="col col--4">
            <div class="avatar">
              <img
                class="avatar__photo avatar__photo--lg"
                src="https://avatars0.githubusercontent.com/u/230124?s=460"
              />
              <div class="avatar__intro">
                <h4 class="avatar__name">Radim Daniel Pánek</h4>
                <small class="avatar__subtitle">CEO, SDET & Performance Tester</small>
              </div>
            </div>
            </div>
            <div class="col col--4">
            <div class="card-demo">
            <div class="card">
              <div class="card__header">
                <div class="avatar">
                  <img
                    class="avatar__photo"
                    src="https://avatars1.githubusercontent.com/u/4060187?s=460&amp;v=4"
                  />
                  <div class="avatar__intro">
                    <h4 class="avatar__name">Miroslav Kret</h4>
                    <small class="avatar__subtitle">
                      Co-Founder & Monitoring specialist
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Hello;