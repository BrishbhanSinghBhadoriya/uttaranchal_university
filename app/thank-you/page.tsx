"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ThankYouPage() {

  useEffect(() => {
    let attempts = 0;

    const fireConversion = () => {
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17973411670/H0R4CLKf_YAcENb-sfpC",
        });
      } else if (attempts < 20) {
        attempts++;
        setTimeout(fireConversion, 100);
      } else {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "conversion",
          send_to: "AW-17973411670/H0R4CLKf_YAcENb-sfpC",
        });
      }
    };

    fireConversion();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-900 mb-3">Thank You!</h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Your enquiry has been successfully submitted. Our admission counsellor will contact you shortly.
        </p>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+917042646766" className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
              <span>📞</span> Call Now
            </a>
            <a href="https://wa.me/917042646766" target="_blank" rel="noreferrer" className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
              <span>🟢</span> Live Chat
            </a>
          </div>
          <Link href="/" className="block text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors mt-6">
            ← Back to Home
          </Link>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-100">
          <img src="/logo.png" alt="Uttaranchal University" className="h-10 mx-auto object-contain opacity-80" />
        </div>
      </div>
    </div>
  );
}