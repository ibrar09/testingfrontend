// src/pages/TermsOfService.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <main className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Terms of Service | MAAJ Maintenance</title>
        <meta
          name="description"
          content="Read the Terms of Service of MAAJ Maintenance. Learn about the rules, responsibilities, and guidelines for using our website and services in Saudi Arabia."
        />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
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
            "hasPolicy": "TermsOfService"
          }
          `}
        </script>
      </Helmet>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Terms of <span className="text-[#023A9A]">Service</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          These terms outline the rules and regulations for using MAAJ Maintenance's website and services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-xl shadow-md space-y-6">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            By using our website or services, you agree to comply with these terms and all applicable Saudi laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">2. Services</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We provide professional building maintenance services, including general repairs, emergency services, and annual contracts.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">3. User Responsibilities</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Users must provide accurate information when contacting us and use our services responsibly.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            MAAJ Maintenance is not liable for indirect, incidental, or consequential damages arising from the use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">5. Contact Information</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            For any questions about these Terms, contact us at 
            <a href="mailto:ramlimited.sa@gmail.com" className="text-[#023A9A] hover:underline ml-1">
              ramlimited.sa@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsOfService;
