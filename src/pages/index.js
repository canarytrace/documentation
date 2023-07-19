import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="bg-slate-50 dark:bg-[#21222b]">
      <div className="container mx-auto text-center py-24">
        <h1 className="text-7xl font-bold text-gray-900 dark:text-slate-50 font-sans antialiased">
          Guardians of your 
          <span className="text-7xl font-bold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-orange-500 to-yellow-300 font-sans antialiased"> web bussiness</span>
          </h1>
        <p className="text-2xl py-6 text-slate-600 dark:text-slate-50 font-sans antialiased">With Canartrace, you can easily protect your web business, increase sales and make your customers happier.</p>

        <div className="py-10">
          <Link className="bg-slate-50 rounded-md text-gray-500 px-4 py-2" to="docs/introduction/intro">
            Start
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
