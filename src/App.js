import './App.css';
import React from "react";
import './index.css';
import { Link } from 'react-router-dom';
import {
  FaWrench,
  FaFireAlt,
  FaRulerCombined,
  FaTools,
  FaTruckMoving,
  FaBuilding
} from 'react-icons/fa';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="bg-white text-black p-4 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/Jobsite-Pictures/caeee713-fc04-4691-9200-c26cebe2bde4.png"
              alt="L logo"
              className="h-20 w-auto"
            />
            <span className="text-xl font-semibold tracking-wide">Locke Steel Co.</span>
          </div>
          <nav className="space-x-4 text-sm md:text-base">
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <a href="#gallery" className="hover:text-blue-600">Gallery</a>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-center py-32 px-4 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/Jobsite-Pictures//IMG_6307.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Precision Stainless. Trusted Results.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Locke Steel Co. delivers professional-grade stainless steel solutions for kitchens,
            fabrication, and architectural needs — combining old-school quality with modern reliability.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl shadow-md"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-blue-600 text-center">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4">
              <FaWrench className="text-5xl" />
            </div>
            <h4 className="text-xl font-semibold mb-1 text-center">Custom Stainless Fabrication</h4>
            <p className="text-sm text-center">Tailored fabrication of stainless steel parts and assemblies.</p>
          </div>
          <div className="bg-emerald-600 text-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4">
              <FaFireAlt className="text-5xl" />
            </div>
            <h4 className="text-xl font-semibold mb-1 text-center">TIG Welding</h4>
            <p className="text-sm text-center">High-quality, precision TIG welding for food-grade and architectural use.</p>
          </div>
          <div className="bg-slate-800 text-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4">
              <FaRulerCombined className="text-5xl" />
            </div>
            <h4 className="text-xl font-semibold mb-1 text-center">Corner Guards & Gap Trim</h4>
            <p className="text-sm text-center">Pre-finished stainless details for clean, compliant finishes.</p>
          </div>
          <div className="bg-indigo-600 text-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4">
              <FaTools className="text-5xl" />
            </div>
            <h4 className="text-xl font-semibold mb-1 text-center">Kitchen Equipment Installation</h4>
            <p className="text-sm text-center">Precision installs for prep tables, sinks, shelving, and exhausts.</p>
          </div>
          <div className="bg-cyan-700 text-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4">
              <FaTruckMoving className="text-5xl" />
            </div>
            <h4 className="text-xl font-semibold mb-1 text-center">On-Site Modifications</h4>
            <p className="text-sm text-center">Field welding, cutouts, or retrofits to adapt to real-world site conditions.</p>
          </div>
          <div className="bg-orange-600 text-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4">
              <FaBuilding className="text-5xl" />
            </div>
            <h4 className="text-xl font-semibold mb-1 text-center">Structural Steel Fabrication</h4>
            <p className="text-sm text-center">Framing, bracing, and support steel for commercial construction (coming soon).</p>
          </div>
        </div>
      </section>

      {/* Gallery Section (Centered) */}
      <section id="gallery" className="py-16 px-4 bg-white text-black text-center">
        <h3 className="text-3xl font-bold mb-8 text-blue-600">Our Work</h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto text-sm">
          From raw sheet to final polish — Locke Steel Co. handles every detail of stainless installation.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <img src="/Jobsite-Pictures/IMG_6307.jpeg" className="w-full h-60 object-cover rounded-xl shadow" alt="Jobsite 1" />
          <img src="/Jobsite-Pictures/IMG_2463.jpeg" className="w-full h-60 object-cover rounded-xl shadow" alt="Jobsite 2" />
          <img src="/Jobsite-Pictures/IMG_3421.jpeg" className="w-full h-60 object-cover rounded-xl shadow" alt="Jobsite 3" />
          <img src="/Jobsite-Pictures/IMG_3416.jpeg" className="w-full h-60 object-cover rounded-xl shadow" alt="Jobsite 4" />
        </div>
      </section>

      {/* About Section (Centered) */}
      <section id="about" className="py-16 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-blue-600">About Locke Steel Co.</h3>
          <p className="text-gray-700 text-sm">
            Founded by Manny Locke, Locke Steel Co. is built on experience in high-end kitchen installations and
            stainless steel craftsmanship. From small business kitchens to multimillion-dollar designer builds,
            our reputation is forged through precision and trust.
          </p>
        </div>
      </section>

      {/* Contact Section (Centered) */}
      <section id="contact" className="py-16 px-4 bg-white text-black text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-600">Get in Touch</h3>
        <form className="max-w-xl mx-auto space-y-4 text-left">
          <input className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded" type="text" placeholder="Name" required />
          <input className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded" type="email" placeholder="Email" required />
          <textarea className="w-full p-3 bg-gray-100 text-black border border-gray-300 rounded" rows="5" placeholder="How can we help you?" required />
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl">
            Send Message
          </button>
        </form>
        <p className="text-center mt-6 text-sm text-gray-600">Or email us directly: contact@lockesteel.com</p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-xs bg-white border-t border-gray-300">
        &copy; {new Date().getFullYear()} Locke Steel Co. | Built for precision. Trusted for quality.
      </footer>
    </main>
  );
}
