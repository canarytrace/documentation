import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
  <div className="flex w-4/5 mx-auto bg-[#21222b]">
    <div className="w-1/2 p-6">
      <h1 className="text-white font-sans text-4xl mb-4">Canarytrace RUM</h1>
      <p className="text-[#b2b5d0] font-sans text-lg mb-4">With Canartrace, you can easily protect your web business,
increase sales and make your customers happier.</p>
      <ul className="list-none pl-5 text-white">
        <li>Odrážka 1</li>
        <li>Odrážka 2</li>
        <li>Odrážka 3</li>
      </ul>
    </div>
    <div className="w-1/2 p-6 relative">
      <img src="cesta-k-obrazku.jpg" alt="Popisek obrázku" className="shadow-lg"></img>
      <div className="absolute inset-0 bg-[#21222b]"></div>
    </div>
  </div>
</Layout>

  );
}