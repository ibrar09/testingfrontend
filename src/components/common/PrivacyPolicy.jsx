// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <main className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Privacy Policy | MAAJ Maintenance</title>
        <meta
          name="description"
          content="Read the Privacy Policy of MAAJ Maintenance. Learn how we collect, use, and protect personal information responsibly and securely in Saudi Arabia."
        />
        <meta name="robots" content="index, follow" />

        {/* Structured Data for Legal Page */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "MAAJ Maintenance",
            "url": "https://www.ramlimited.sa",
            "logo": "https://www.ramlimited.sa/assets/images/002.png",
            "sameAs": [
              "https://www.linkedin.com/company/ram-limited/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "ramlimited.sa@gmail.com",
              "contactType": "customer service",
              "areaServed": "SA",
              "availableLanguage": "Arabic"
            },
            "hasPolicy": "PrivacyPolicy"
          }
          `}
        </script>
      </Helmet>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Privacy <span className="text-[#023A9A]">Policy</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information in compliance with Saudi Arabian regulations.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-md space-y-6">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We may collect personal information such as your name, email, phone number, and service preferences when you contact us or use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Your information is used to provide, maintain, and improve our services, respond to inquiries, and send service updates or offers.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            3. Data Protection
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We implement appropriate security measures to protect your personal data from unauthorized access, disclosure, or misuse, following Saudi data protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We may use trusted third-party services for analytics, payment processing, and marketing. These providers adhere to strict privacy standards.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            5. Contact Us
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            For questions regarding this Privacy Policy, contact us at 
            <a href="mailto:ramlimited.sa@gmail.com" className="text-[#023A9A] hover:underline ml-1">
              ramlimited.sa@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
