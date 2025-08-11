// src/pages/About.js

import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black font-sans py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">About Locke Steel Co.</h1>
        <section className="mb-12">
          <p className="text-gray-700 text-base leading-relaxed">
            Locke Steel Co. is a precision-driven stainless steel fabrication company committed to delivering top-tier workmanship across commercial kitchens, architectural projects, and industrial applications. We specialize in custom stainless solutions, TIG welding, and on-site modifications — all performed with meticulous attention to detail and a focus on long-term durability.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to set the industry standard for quality and professionalism in stainless steel fabrication. We believe in combining old-school craftsmanship with modern efficiency to serve businesses of all sizes — from local restaurants to large-scale commercial developers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">What We Do</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Custom Stainless Fabrication & Welding</li>
            <li>Commercial Kitchen Equipment Installation</li>
            <li>Architectural Trim & Finishing (Corner Guards, Gap Trim, Wall Panels)</li>
            <li>On-site TIG Welding & Modifications</li>
            <li>Future Expansion: Structural & Prefabricated Steel</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Service Area</h2>
          <p className="text-gray-700 leading-relaxed">
            We proudly serve customers across the Northeast — with regular operations in:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>New York City (all boroughs)</li>
            <li>New Jersey (North, Central, South)</li>
            <li>Eastern Pennsylvania (Philadelphia area)</li>
            <li>Southern Connecticut & Boston Metro Area (by request)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
