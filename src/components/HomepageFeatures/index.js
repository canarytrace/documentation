import React from 'react';
import { Link } from 'react-router-dom';

export default function HomepageFeatures() {
  return (
    <>
    <section className="font-sans antialiased mx-auto flex items-center py-16 px-20 dark:bg-[#21222b]">
      <div className="container mx-auto px-4 md:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-18 md:gap-8">
          <div className="bg-gray-100 dark:bg-[#282a34] p-4 rounded-lg flex flex-col justify-between h-full">
            <div>
              <h2 className="font-sans antialiased text-2xl font-semibold text-center mb-8 mt-4">Canarytrace Synthetic</h2>
              <ul className="list-none pl-10 text-left text-[#535569] dark:text-[#b2b5d0] space-y-2 mb-6">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Plug’n'Play stack build on Playwright.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">In-depth browser behavior analysis.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Solution for web-perf pain points.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Device performance insights..</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Front-end optimization tool.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Incident capture during development.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Kubernetes-ready deployment.</li>
              </ul>
            </div>
            <Link to='/docs/synthetic/introduction' className="bg-transparent text-lg text-center font-sans antialiased hover:bg-gray-300 text-gray-500 font-semibold hover:text-gray-500 py-2 px-4 border-0 rounded hover:no-underline">Get Synthetic</Link>
          </div>
          <div className="bg-gray-100 dark:bg-[#282a34] p-4 rounded-lg flex flex-col justify-between h-full">
            <div>
              <h2 className="font-sans antialiased text-2xl font-semibold text-center mb-8 mt-4">Canarytrace RUM</h2>
              <ul className="list-none pl-10 text-left text-[#535569] dark:text-[#b2b5d0] space-y-2 mb-6">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Quick RUM Kubernetes deployment.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">End user performance.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Security threat detection.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Performance bottleneck identification.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Communication & loading speed.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Browser & device diagnostics.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">User experience optimization.</li>
              </ul>
            </div>
            <Link to='/docs/rum/introduction' className="bg-transparent text-lg text-center font-sans antialiased hover:bg-gray-300 text-gray-500 font-semibold hover:text-gray-500 py-2 px-4 border-0 rounded hover:no-underline">Get RUM</Link>
          </div>
          <div className="bg-gray-100 dark:bg-[#282a34] p-4 rounded-lg flex flex-col justify-between h-full">
            <div>
              <h2 className="font-sans antialiased text-2xl font-bold text-center mb-8 mt-4">Canarytrace Listener</h2>
              <ul className="list-none pl-10 text-left text-[#535569] dark:text-[#b2b5d0] space-y-2 mb-6">
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Intelligent web app monitoring.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Built-in rule evaluations.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Customizable business rules.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Autonomous experiments.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Severity-based alerting.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Anomaly detection insights.</li>
                <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Kubernetes-ready deployment.</li>
              </ul>
            </div>
            <Link to='/docs/listener/introduction' className="bg-transparent text-lg text-center font-sans antialiased hover:bg-gray-300 text-gray-500 font-semibold hover:text-gray-500 py-2 px-4 border-0 rounded hover:no-underline">Get Listener</Link>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-gray-200 py-4">
      <h2 className="text-2xl font-bold text-center">See live demo</h2>
    </div>
    </>
  );
}
