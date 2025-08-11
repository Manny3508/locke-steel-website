import React from 'react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-center text-blue-600">Our Services</h1>

        {/* Custom Stainless Fabrication Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-semibold mb-4">Custom Stainless Fabrication</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base leading-relaxed">
            Tailored fabrication of stainless steel parts and assemblies to meet your exact specifications.
            From simple brackets to complex assemblies, we ensure precision and durability in every piece.
          </p>
        </section>

        {/* TIG Welding Section with Image on Left */}
        <section className="mb-20 flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          <img src="/Jobsite-Pictures/IMG_6307.jpeg" alt="TIG Welding" className="w-full md:w-1/2 rounded-xl shadow mb-6 md:mb-0" />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Precision TIG Welding</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              High-quality TIG welding for food-grade and architectural applications. We specialize in distortion control,
              grain matching, and achieving seamless polished finishes that meet the strictest standards.
            </p>
          </div>
        </section>

        {/* On-Site Modifications Section with Image on Right */}
        <section className="mb-20 flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-4">On-Site Modifications</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Field welding, cutouts, and retrofits to adapt stainless steel installations to real-world site conditions.
              Our mobile setup ensures precision adjustments on the spot, eliminating costly reworks.
            </p>
          </div>
          <img src="/Jobsite-Pictures/IMG_3416.jpeg" alt="On-Site Modifications" className="w-full md:w-1/2 rounded-xl shadow order-1 md:order-2 mb-6 md:mb-0" />
        </section>

        {/* Corner Guards & Gap Trim Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-semibold mb-4">Corner Guards & Gap Trim</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base leading-relaxed">
            Pre-finished stainless steel corner guards and gap trim solutions for kitchens, hospitals, and commercial spaces.
            Installed with precision for clean, compliant finishes that hold up to heavy use.
          </p>
        </section>

        {/* Structural Steel Fabrication Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Structural Steel Fabrication (Coming Soon)</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base leading-relaxed">
            Expanding into load-bearing steel fabrication to offer a full suite of metal solutions — from custom sheet metal
            work to structural framing, Locke Steel Co. aims to become your one-stop steel provider.
          </p>
        </section>

      </div>
    </main>
  );
}
