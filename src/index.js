import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About'; // ✅ Add this line

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} /> {/* ✅ This line fixes it */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
