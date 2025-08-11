import React from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Back to Home Link */}
        <div className="mb-6 text-left">
          <Link 
            to="/" 
            className="text-blue-600 hover:underline font-semibold"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-blue-500">Contact Locke Steel Co.</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Reach out to request a quote, discuss a project, or ask a question — we’ll get back to you quickly.
        </p>

        {/* Contact Options */}
        <div className="mb-10 space-y-2 text-sm">
          <p>
            📞 <span className="text-gray-700">Phone:</span>{" "}
            <a href="tel:6105976045" className="text-blue-600 hover:underline">
              (610) 597-6045
            </a>
          </p>
          <p>
            📧 <span className="text-gray-700">Email:</span>{" "}
            <a href="mailto:contact@lockesteel.com" className="text-blue-600 hover:underline">
              contact@lockesteel.com
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-gray-100 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-gray-100 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="How can we help you?"
            rows="6"
            required
            className="w-full p-4 bg-gray-100 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
