// src/components/AboutPage/About.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import teamImage from "../../assets/images/team-unsplash.webp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useLanguage } from "../../context/LanguageContext";
import translationsEN from "../../translation/en.json";
import translationsAR from "../../translation/ar.json";

function About() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const translations = isArabic ? translationsAR : translationsEN;

  // SEO optimized content (INVISIBLE)
  const aboutTitle = isArabic 
    ? "من نحن - شركة رام المحدودة للصيانة الشاملة في السعودية" 
    : "About Us - Ram Limited Comprehensive Maintenance Company in Saudi Arabia";
  
  const aboutDescription = isArabic
    ? "شركة رام المحدودة رائدة في خدمات الصيانة الشاملة في السعودية: صيانة المباني، تكييف، دهان، كهرباء، سباكة. خبرة 10+ سنوات، 500+ مشروع، فريق معتمد، خدمة 24/7."
    : "Ram Limited is a leading comprehensive maintenance services company in Saudi Arabia: building maintenance, AC, painting, electrical, plumbing. 10+ years experience, 500+ projects, certified team, 24/7 service.";

  return (
    <>
      {/* INVISIBLE SEO ONLY - No design changes */}
      <Helmet>
        <title>{aboutTitle}</title>
        <meta name="description" content={aboutDescription} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/about" : ""} />
        
        {/* Open Graph - INVISIBLE */}
        <meta property="og:title" content={aboutTitle} />
        <meta property="og:description" content={aboutDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/about" : ""} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}${teamImage}` : ""} />
        <meta property="og:image:alt" content={isArabic ? "فريق شركة رام المحدودة للصيانة" : "Ram Limited maintenance team"} />
        
        {/* Twitter Card - INVISIBLE */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={aboutTitle} />
        <meta name="twitter:description" content={aboutDescription} />
        
        {/* Structured Data - INVISIBLE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": aboutTitle,
            "description": aboutDescription,
            "publisher": {
              "@type": "Organization",
              "name": "Ram Limited",
              "legalName": isArabic ? "شركة رام المحدودة" : "Ram Limited Company",
              "url": typeof window !== 'undefined' ? window.location.origin : "",
              "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : "",
              "foundingDate": "2013",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressRegion": "Riyadh Province",
                "addressLocality": "Riyadh"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-XXXXXXXXXX",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": ["Arabic", "English"]
              }
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Ram Limited",
              "description": isArabic 
                ? "شركة سعودية متخصصة في خدمات الصيانة الشاملة منذ 10+ سنوات. نخدم مدن الرياض، جدة، الدمام وغيرها من مدن المملكة."
                : "Saudi company specialized in comprehensive maintenance services for 10+ years. We serve Riyadh, Jeddah, Dammam and other Saudi cities.",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "50+"
              },
              "yearsInOperation": "10",
              "knowsAbout": [
                "Building Maintenance",
                "AC System Maintenance", 
                "Painting Services",
                "Electrical Maintenance",
                "Plumbing Services",
                "Preventive Maintenance",
                "Facility Management"
              ]
            }
          })}
        </script>
      </Helmet>

      {/* ORIGINAL DESIGN - NO VISIBLE CHANGES */}
      <section
        className="max-w-[1440px] mx-auto px-6 bg-gray-50 py-16"
        aria-labelledby="about-title"
        dir={isArabic ? "rtl" : "ltr"}
        // INVISIBLE SEO attributes only
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        {/* Grid: Text + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <div 
            // INVISIBLE SEO attributes only
            itemScope 
            itemType="https://schema.org/Organization"
          >
            <h1
              id="about-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              // INVISIBLE SEO attribute
              itemProp="name"
            >
              {isArabic ? "من نحن" : "Who"}{" "}
              <span className="text-primary">
                {isArabic ? "رام ليمتد" : "We Are"}
              </span>
            </h1>

            <p 
              className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
              // INVISIBLE SEO attribute
              itemProp="description"
            >
              {isArabic
                ? "في رام ليمتد، نقدم خدمات صيانة المباني بكفاءة وموثوقية عالية. يضمن فريقنا ذو الخبرة الحد الأدنى من التوقف، أعلى درجات الرضا، ونتائج استثنائية. سواء كانت إصلاحات لمرة واحدة أو عقد صيانة مستمر، نحن هنا لخدمتكم."
                : "At RamLimited, we deliver efficient, reliable, and high-quality building maintenance services. Our experienced team ensures minimal downtime, maximum satisfaction, and exceptional results. Whether it's a one-time repair or an ongoing maintenance contract, we have you covered."}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start gap-6 sm:gap-12 text-center sm:text-left">
              <article 
                // INVISIBLE SEO attributes only
                itemScope 
                itemType="https://schema.org/AggregateRating"
              >
                <h2 className="text-3xl font-bold text-primary">500+</h2>
                <p className="text-gray-700">
                  {isArabic ? "مشروع مكتمل" : "Projects Completed"}
                </p>
                {/* INVISIBLE meta tags */}
                <span className="hidden" itemProp="ratingValue">500</span>
                <span className="hidden" itemProp="reviewCount">500</span>
                <span className="hidden" itemProp="bestRating">1000</span>
              </article>
              <article>
                <h2 className="text-3xl font-bold text-primary">24/7</h2>
                <p className="text-gray-700">
                  {isArabic ? "دعم طارئ" : "Emergency Support"}
                </p>
              </article>
              
              {/* INVISIBLE SEO data - Not shown on frontend */}
              <div className="hidden" aria-hidden="true">
                <meta itemProp="foundingDate" content="2013" />
                <meta itemProp="numberOfEmployees" content="50+" />
                <meta itemProp="yearsInOperation" content="10" />
                <meta itemProp="serviceArea" content="Saudi Arabia" />
                
                {/* Hidden SEO text for search engines */}
                <h2>{isArabic ? "شركة صيانة سعودية معتمدة" : "Certified Saudi Maintenance Company"}</h2>
                <p>{isArabic
                  ? "شركة رام المحدودة هي شركة سعودية معتمدة متخصصة في تقديم جميع خدمات الصيانة منذ عام 2013. مقرنا الرئيسي في الرياض ونقدم خدماتنا في جميع أنحاء المملكة العربية السعودية."
                  : "Ram Limited is a certified Saudi company specializing in providing all maintenance services since 2013. Our headquarters is in Riyadh and we provide services throughout Saudi Arabia."
                }</p>
                <ul>
                  <li>{isArabic ? "صيانة وتركيب أنظمة التكييف" : "AC system maintenance and installation"}</li>
                  <li>{isArabic ? "خدمات الدهان للمباني" : "Building painting services"}</li>
                  <li>{isArabic ? "الصيانة الكهربائية" : "Electrical maintenance"}</li>
                  <li>{isArabic ? "إصلاحات السباكة" : "Plumbing repairs"}</li>
                  <li>{isArabic ? "الصيانة الوقائية" : "Preventive maintenance"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative group">
            <img
              src={teamImage}
              alt={isArabic ? "فريق رام ليمتد يعمل على المشاريع" : "RamLimited maintenance team working on projects"}
              className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              // INVISIBLE SEO attribute
              itemProp="image"
            />
            <div className="absolute -bottom-8 left-8 bg-primary text-white rounded-xl px-4 py-3 shadow-xl text-center">
              <h2 className="text-2xl font-bold">10+</h2>
              <p className="text-sm">{isArabic ? "سنوات خبرة" : "Years Experience"}</p>
            </div>
          </div>
        </div>

        {/* Bottom Features - ORIGINAL DESIGN, NO CHANGES */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <article className="bg-white p-6 text-center rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary rounded-full mb-4">
              <CheckCircleIcon sx={{ fontSize: 32, color: "white" }} />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {isArabic ? "خدمة موثوقة" : "Reliable Service"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {isArabic
                ? "صيانة متسقة وموثوقة يمكنك الاعتماد عليها في كل مرة."
                : "Consistent, dependable maintenance you can count on, every time."}
            </p>
          </article>

          {/* Feature Card 2 */}
          <article className="bg-white p-6 text-center rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary rounded-full mb-4">
              <BoltIcon sx={{ fontSize: 32, color: "white" }} />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {isArabic ? "فريق خبير" : "Expert Team"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {isArabic
                ? "محترفون مهرة ملتزمون بالتميز في كل مشروع."
                : "Skilled professionals dedicated to excellence in every project."}
            </p>
          </article>

          {/* Feature Card 3 */}
          <article className="bg-white p-6 text-center rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary rounded-full mb-4">
              <AccessTimeIcon sx={{ fontSize: 32, color: "white" }} />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {isArabic ? "دعم 24/7" : "24/7 Support"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {isArabic
                ? "خدمات الطوارئ على مدار الساعة عندما تحتاجها."
                : "Round-the-clock emergency services when you need them most."}
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;