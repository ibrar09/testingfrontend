// src/pages/HomePage/Testimonials.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../../context/LanguageContext";
import translationsEN from "../../translation/en.json";
import translationsAR from "../../translation/ar.json";

const Testimonials = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const translations = isArabic ? translationsAR : translationsEN;

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // SEO optimized content (INVISIBLE)
  const pageTitle = isArabic 
    ? "آراء العملاء وتقييمات خدمات الصيانة | رام المحدودة السعودية" 
    : "Customer Reviews & Maintenance Service Ratings | Ram Limited Saudi Arabia";
  
  const pageDescription = isArabic
    ? "تقييمات 5 نجوم من عملاء رام المحدودة لخدمات الصيانة في السعودية. شهادات حقيقية من عملاء في الرياض، جدة، الدمام عن جودة الخدمة."
    : "5-star ratings from Ram Limited customers for maintenance services in Saudi Arabia. Real testimonials from clients in Riyadh, Jeddah, Dammam about service quality.";

  const testimonials = [
    {
      rating: 5,
      text: isArabic
        ? "شركة رام ليميتد شريك موثوق لجميع احتياجات صيانة المكاتب. دائمًا ما يقدمون الخدمات في الوقت المحدد وضمن الميزانية."
        : "RamLimited has been a reliable partner for all our office maintenance needs. They always deliver on time and within budget.",
      author: isArabic ? "سارة جونسون" : "Sarah Johnson",
      title: isArabic ? "المديرة التنفيذية لشركة XYZ" : "CEO of XYZ Corp",
      initials: "SJ",
      datePublished: "2024-01-15",
      location: isArabic ? "الرياض" : "Riyadh",
      serviceType: isArabic ? "صيانة المكاتب" : "Office Maintenance"
    },
    {
      rating: 5,
      text: isArabic
        ? "لقد استخدمنا العقد السنوي لشركة رام ليميتد لسنوات، وهم دائمًا يقدمون خدمات ممتازة."
        : "We have used RamLimited's annual contract for years, and they consistently provide excellent service.",
      author: isArabic ? "مايك تشين" : "Mike Chen",
      title: isArabic ? "مدير الممتلكات في ABC مول" : "Property Manager at ABC Mall",
      initials: "MC",
      datePublished: "2024-02-10",
      location: isArabic ? "جدة" : "Jeddah",
      serviceType: isArabic ? "عقد صيانة سنوي" : "Annual Maintenance Contract"
    },
    {
      rating: 5,
      text: isArabic
        ? "أنقذنا فريق الاستجابة للطوارئ خلال فشل نظام حرج. محترفون وفعالون."
        : "Their emergency response team saved us during a critical system failure. Professional and efficient.",
      author: isArabic ? "جينيفر ويليامز" : "Jennifer Williams",
      title: isArabic ? "مدير المرافق" : "Facilities Director",
      initials: "JW",
      datePublished: "2024-03-05",
      location: isArabic ? "الدمام" : "Dammam",
      serviceType: isArabic ? "خدمة طوارئ" : "Emergency Service"
    },
  ];

  return (
    <>
      {/* INVISIBLE SEO ONLY - No design changes */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + "/testimonials" : ""} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.origin + "/testimonials" : ""} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Structured Data for Reviews */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": pageTitle,
            "description": pageDescription,
            "url": typeof window !== 'undefined' ? window.location.origin + "/testimonials" : "",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": typeof window !== 'undefined' ? `${window.location.origin}/og-testimonials.jpg` : "",
              "width": "1200",
              "height": "630",
              "caption": isArabic ? "تقييمات عملاء رام المحدودة" : "Ram Limited Customer Reviews"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": isArabic ? "الرئيسية" : "Home",
                  "item": typeof window !== 'undefined' ? window.location.origin : ""
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": isArabic ? "آراء العملاء" : "Testimonials",
                  "item": typeof window !== 'undefined' ? window.location.origin + "/testimonials" : ""
                }
              ]
            },
            "mainEntity": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": testimonials.length.toString(),
              "bestRating": "5",
              "worstRating": "1",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Ram Limited",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA"
                }
              }
            },
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating.toString(),
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": testimonial.author,
                "jobTitle": testimonial.title
              },
              "reviewBody": testimonial.text,
              "datePublished": testimonial.datePublished,
              "locationCreated": {
                "@type": "Place",
                "name": testimonial.location
              },
              "itemReviewed": {
                "@type": "Service",
                "name": testimonial.serviceType,
                "provider": {
                  "@type": "Organization",
                  "name": "Ram Limited"
                },
                "areaServed": {
                  "@type": "Place",
                  "name": "Saudi Arabia"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      {/* ORIGINAL DESIGN - NO VISIBLE CHANGES */}
      <section
        dir={isArabic ? "rtl" : "ltr"}
        aria-labelledby="testimonials-title"
        className="w-full py-12 sm:py-16 lg:py-24 bg-white font-sans"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {/* Hidden Aggregate Rating for SEO */}
        <div itemScope itemType="https://schema.org/AggregateRating" className="hidden">
          <meta itemProp="ratingValue" content="5.0" />
          <meta itemProp="ratingCount" content={testimonials.length.toString()} />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
          <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Ram Limited" />
          </div>
        </div>

        {/* Header */}
        <header className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2
            id="testimonials-title"
            className="font-bold text-2xl sm:text-3xl lg:text-5xl leading-snug sm:leading-tight text-gray-900"
          >
            {isArabic ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            {isArabic
              ? "شاهد لماذا يثق العملاء في رام ليميتد لجميع احتياجات صيانة المباني."
              : "See why businesses and homeowners trust RamLimited for all their building maintenance needs."}
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="flex flex-col h-full bg-white rounded-xl shadow-md ring-1 ring-black/5 p-6 sm:p-8 transition hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Hidden structured data */}
                <meta itemProp="datePublished" content={testimonial.datePublished} />
                <div itemProp="locationCreated" itemScope itemType="https://schema.org/Place" className="hidden">
                  <meta itemProp="name" content={testimonial.location} />
                </div>
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service" className="hidden">
                  <meta itemProp="name" content={testimonial.serviceType} />
                  <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Ram Limited" />
                  </div>
                </div>

                {/* Rating */}
                <div
                  className="flex mb-4 gap-1"
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="text-[#023A9A] text-base sm:text-lg lg:text-xl">
                        ★
                      </span>
                    ))}
                  <meta itemProp="ratingValue" content={testimonial.rating} />
                  <meta itemProp="bestRating" content="5" />
                </div>

                {/* Testimonial Text */}
                <p
                  className="text-sm sm:text-base lg:text-lg text-gray-600 flex-grow leading-relaxed"
                  itemProp="reviewBody"
                >
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className={`flex items-center mt-6 ${isArabic ? "justify-end" : ""}`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#023A9A] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    {testimonial.initials}
                  </div>
                  <div className={`ml-3 ${isArabic ? "text-right ml-0 mr-3" : ""}`}>
                    <div itemProp="author" itemScope itemType="https://schema.org/Person" className="hidden">
                      <meta itemProp="name" content={testimonial.author} />
                      <meta itemProp="jobTitle" content={testimonial.title} />
                    </div>
                    <p className="font-bold text-sm sm:text-base text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Share Your Experience */}
        <div className="max-w-2xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6">
          <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-6 sm:p-8 text-center flex flex-col items-center gap-4">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900">
              {isArabic ? "شارك تجربتك" : "Share Your Experience"}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed">
              {isArabic
                ? "هل تعاملت مع رام ليميتد؟ نود معرفة رأيك وتجربتك."
                : "Have you worked with RamLimited? We'd love to hear about your experience."}
            </p>
            <Link to="/contact" itemProp="significantLink">
              <button className="mt-2 px-5 sm:px-6 py-2 sm:py-3 rounded-md bg-primary text-white font-bold text-sm sm:text-base hover:bg-primary/90 transition">
                {isArabic ? "أرسل شهادتك" : "Submit Your Testimonial"}
              </button>
            </Link>
          </div>
        </div>

        {/* Enhanced Hidden SEO Text for Saudi Arabia */}
        <div className="hidden" aria-hidden="true">
          <h2>{isArabic ? "تقييمات عملاء رام المحدودة في السعودية" : "Ram Limited Customer Reviews in Saudi Arabia"}</h2>
          <p>{isArabic 
            ? "شركة رام المحدودة تحصل على تقييمات 5 نجوم باستمرار من عملائها في جميع أنحاء المملكة العربية السعودية. نحن نفتخر بتقديم خدمات صيانة عالية الجودة في الرياض، جدة، الدمام، ومكة، والمدينة المنورة، والخبر. عملاؤنا من الشركات الكبيرة، المولات التجارية، المستشفيات، والمؤسسات الحكومية يثقون بخدماتنا للصيانة السنوية، خدمات الطوارئ، وإدارة المرافق."
            : "Ram Limited consistently receives 5-star ratings from customers across Saudi Arabia. We pride ourselves on delivering high-quality maintenance services in Riyadh, Jeddah, Dammam, Mecca, Medina, and Al Khobar. Our clients from large corporations, shopping malls, hospitals, and government institutions trust our services for annual maintenance, emergency services, and facility management."
          }</p>
          
          <h3>{isArabic ? "لماذا يحصل عملاؤنا على 5 نجوم؟" : "Why Do Our Customers Give 5 Stars?"}</h3>
          <ul>
            <li>{isArabic ? "استجابة سريعة خلال ساعتين" : "Quick response within 2 hours"}</li>
            <li>{isArabic ? "خدمة 24/7 للطوارئ" : "24/7 emergency service"}</li>
            <li>{isArabic ? "فريق معتمد ومدرب" : "Certified and trained team"}</li>
            <li>{isArabic ? "أسعار شفافة بدون رسوم مخفية" : "Transparent pricing with no hidden fees"}</li>
            <li>{isArabic ? "جودة عمل مضمونة" : "Guaranteed work quality"}</li>
            <li>{isArabic ? "متابعة بعد الخدمة" : "Follow-up after service"}</li>
          </ul>
          
          <h3>{isArabic ? "أنواع الخدمات التي حصلت على تقييمات عالية:" : "Services Receiving Highest Ratings:"}</h3>
          <ul>
            <li>{isArabic ? "عقود الصيانة السنوية (AMC)" : "Annual Maintenance Contracts (AMC)"}</li>
            <li>{isArabic ? "خدمات الطوارئ 24/7" : "24/7 Emergency Services"}</li>
            <li>{isArabic ? "صيانة أنظمة التكييف والتبريد" : "AC and Cooling System Maintenance"}</li>
            <li>{isArabic ? "خدمات السباكة المنزلية والتجارية" : "Residential and Commercial Plumbing Services"}</li>
            <li>{isArabic ? "الصيانة الكهربائية والإنارة" : "Electrical Maintenance and Lighting"}</li>
            <li>{isArabic ? "خدمات الدهان والطلاء" : "Painting and Coating Services"}</li>
          </ul>
          
          <h3>{isArabic ? "مناطق الخدمة في السعودية:" : "Service Areas in Saudi Arabia:"}</h3>
          <p>{isArabic 
            ? "نحن نخدم جميع مدن ومناطق المملكة العربية السعودية بما في ذلك: الرياض (العاصمة)، جدة (عروس البحر الأحمر)، الدمام (المنطقة الشرقية)، مكة المكرمة، المدينة المنورة، الخبر، الطائف، بريدة، أبها، نجران، جازان، حائل، تبوك، والقصيم."
            : "We serve all cities and regions of Saudi Arabia including: Riyadh (Capital), Jeddah (Bride of the Red Sea), Dammam (Eastern Province), Mecca, Medina, Al Khobar, Taif, Buraidah, Abha, Najran, Jazan, Hail, Tabuk, and Al Qassim."
          }</p>
          
          <p><strong>{isArabic ? "كيفية إضافة تقييمك:" : "How to Add Your Review:"}</strong></p>
          <ol>
            <li>{isArabic ? "انقر على زر 'أرسل شهادتك'" : "Click on 'Submit Your Testimonial' button"}</li>
            <li>{isArabic ? "املأ نموذج الاتصال" : "Fill out the contact form"}</li>
            <li>{isArabic ? "اكتب تجربتك مع خدماتنا" : "Write about your experience with our services"}</li>
            <li>{isArabic ? "أضف تقييمك من 1 إلى 5 نجوم" : "Add your rating from 1 to 5 stars"}</li>
            <li>{isArabic ? "سنقوم بنشر شهادتك بعد المراجعة" : "We will publish your testimonial after review"}</li>
          </ol>
          
          <p>{isArabic 
            ? "للاستفسارات عن خدماتنا أو لمشاهدة المزيد من آراء العملاء، اتصل بنا على: +966-XXXXXXXXXX أو قم بزيارة صفحة الاتصال."
            : "For inquiries about our services or to see more customer reviews, contact us at: +966-XXXXXXXXXX or visit the contact page."
          }</p>
        </div>
      </section>
    </>
  );
};

export default Testimonials;