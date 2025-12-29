// src/components/ProductDetails/TabNavBar.jsx
import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../../context/LanguageContext"; // ✅ get language

const TabNavBar = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const tabs = [
    { name: isArabic ? "الوصف" : "Description", href: "#description" },
    { name: isArabic ? "التقييمات" : "Reviews", href: "#reviews" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  // --- Handle scroll to update active tab dynamically ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for sticky navbar
      let currentTab = tabs[0].name;

      tabs.forEach((tab) => {
        const section = document.querySelector(tab.href);
        if (section && section.offsetTop <= scrollPosition) {
          currentTab = tab.name;
        }
      });

      setActiveTab(currentTab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);

    const section = document.querySelector(tab.href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Offset for sticky navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="w-full border-b border-gray-300 bg-white sticky top-0 z-30 shadow-sm"
      dir={isArabic ? "rtl" : "ltr"} // ✅ RTL support
    >
      <ul className={`flex ${isArabic ? "space-x-reverse" : "space-x-8"} overflow-x-auto px-4 py-2 scrollbar-hide`}>
        {tabs.map((tab) => {
          const isActive = tab.name === activeTab;

          const tabClasses = [
            "flex items-center pb-[1px] cursor-pointer",
            isActive ? "border-b-2 border-black font-semibold" : "text-gray-600",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <li key={tab.name} className={tabClasses}>
              <button
                onClick={() => handleTabClick(tab)}
                className="text-lg whitespace-nowrap"
              >
                {tab.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabNavBar;
