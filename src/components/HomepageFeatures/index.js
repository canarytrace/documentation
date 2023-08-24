import React from 'react';
import { Link } from 'react-router-dom';

export default function HomepageFeatures() {
  return (
    <>
    <section className="font-sans antialiased mx-auto flex items-center py-16 px-20 dark:bg-[#21222b]">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          <div className="bg-gray-100 dark:bg-[#282a34] p-4 rounded-lg flex flex-col">
            <h2 className="font-sans antialiased text-xl font-semibold text-center mb-4">Canarytrace Synthetic</h2>
            <ul className="list-none pl-4 text-left text-[#535569] dark:text-[#b2b5d0] space-y-2 mb-6">
              <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Odrazka 1</li>
              <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Odrazka 2</li>
              <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Odrazka 3</li>
            </ul>
            <Link to='/' className="bg-transparent text-lg text-center font-sans antialiased hover:bg-gray-300 text-gray-500 font-semibold hover:text-gray-500 py-2 px-4 border-0 rounded hover:no-underline">Get Synthetic</Link>
          </div>
          <div className="bg-gray-100 dark:bg-[#282a34] p-4 rounded-lg flex flex-col">
            <h2 className="font-sans antialiased text-xl font-semibold text-center mb-4">Canarytrace RUM</h2>
            <ul className="list-none pl-10 text-left text-[#535569] dark:text-[#b2b5d0] space-y-2 mb-6">
              <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Experience Web Apps User-First.</li>
              <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Effortless Monitoring; Total Security.</li>
              <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Optimize Performance, Boost Conversions</li>
            </ul>
            <Link to='/rum' className="bg-transparent text-lg text-center font-sans antialiased hover:bg-gray-300 text-gray-500 font-semibold hover:text-gray-500 py-2 px-4 border-0 rounded hover:no-underline">Get RUM</Link>
          </div>
          <div className="bg-gray-100 dark:bg-[#282a34] p-4 rounded-lg flex flex-col">
            <h2 className="font-sans antialiased text-xl font-semibold text-center mb-4">Canarytrace Listener</h2>
            <ul className="list-none pl-10 text-left text-[#535569] dark:text-[#b2b5d0] space-y-2 mb-6">
              <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Evaluates data from RUM and Synthetic.</li>
              <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Conducts autonomous experiments.</li>
              <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-yellow-500">Anomaly detection and alerting system.</li>
            </ul>
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
