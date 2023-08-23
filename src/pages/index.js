import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="bg-slate-white dark:bg-[#21222b]">
      <div className="container mx-auto text-center py-24">
        <h1 className="text-7xl font-bold text-[#333333] dark:text-slate-50 font-sans antialiased">
          Guardians of your 
          <span className="text-7xl font-bold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-orange-500 to-yellow-300 font-sans antialiased"> web bussiness</span>
          </h1>
        <p className="text-2xl py-6 text-[#b2b5d0] dark:text-slate-50 font-sans antialiased">With Canartrace, you can easily protect your web business, <br/>increase sales and make your customers happier.</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Guardians of your web bussiness">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
