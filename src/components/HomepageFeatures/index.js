import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <>
    <section className={styles.features}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col">
            <h2 className="text-xl font-bold text-center mb-4">Canarytrace Synthetic</h2>
            <ul className="list-none pl-4 text-left">
              <li className="mb-2">Odrazka 1</li>
              <li className="mb-2">Odrazka 2</li>
              <li className="mb-2">Odrazka 3</li>
            </ul>
            <button className="bg-transparent text-lg hover:bg-gray-300 text-gray-500 font-semibold hover:text-gray-500 py-2 px-4 border-0 rounded">Get Synthetic</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col">
            <h2 className="text-xl font-bold text-center mb-4">Canarytrace RUM</h2>
            <ul className="list-none pl-4 text-left">
              <li className="mb-2">Odrazka 1</li>
              <li className="mb-2">Odrazka 2</li>
              <li className="mb-2">Odrazka 3</li>
            </ul>
            <button className="bg-transparent text-lg hover:bg-gray-300 text-gray-500 font-semibold hover:text-gray-500 py-2 px-4 border-0 rounded">Get RUM</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex flex-col">
            <h2 className="text-xl font-bold text-center mb-4">Canarytrace Listener</h2>
            <ul className="list-none pl-4 text-left">
              <li className="mb-2">Odrazka 1</li>
              <li className="mb-2">Odrazka 2</li>
              <li className="mb-2">Odrazka 3</li>
            </ul>
            <button className="bg-transparent text-lg hover:bg-gray-300 text-gray-500 font-semibold hover:text-gray-500 py-2 px-4 border-0 rounded">Get Listener</button>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-gray-200 py-4">
      <h2 class="text-2xl font-bold text-center">See live demo</h2>
    </div>
    </>
  );
}
