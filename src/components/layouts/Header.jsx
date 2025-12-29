// src/components/layouts/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import RamLogo from "../../assets/images/1.png";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../translation"; 

const Header = ({ onQuoteClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const location = useLocation();
  const isArabic = lang === "ar";

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { key: "home", path: "/" },
    { key: "about", path: "/aboutus" },
    { key: "projects", path: "/projects" },
    { key: "services", path: "/services" },
    { key: "careers", path: "/career" },
    { key: "contact", path: "/contact" },
  ];

  // Reverting to your original NavLink styles
  const navLinkClass = ({ isActive }) =>
    `relative transition-colors duration-200 font-medium ${
      isActive ? "text-primary" : "text-gray-800 hover:text-primary"
    } group text-sm sm:text-base`;

  const shopLinkClass = ({ isActive }) =>
    `relative inline-block px-4 sm:px-6 py-1 sm:py-2 font-bold rounded-lg shadow-lg transform transition-transform duration-300 ${
      isActive ? "bg-primary text-white border-primary" : "bg-yellow-500 text-black"
    } hover:scale-105 hover:shadow-2xl`;

  return (
    <header
      dir={isArabic ? "rtl" : "ltr"}
      /* Lowered z-index to 40 so the Modal (usually z-50 or z-100) stays on top */
      className="sticky top-0 z-[40] bg-white/95 backdrop-blur-md shadow-md"
    >
      {/* Original Accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section - Reverted to your original style */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={RamLogo}
              alt="Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
            />
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide">
              <span className="bg-gradient-to-b from-[#023A9A] to-[#1392E0] bg-clip-text text-transparent">
                {isArabic ? "رام ليمتد" : "RAM LIMITED"}
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <NavLink to={link.path} className={navLinkClass}>
                    {translations[lang][link.key]}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </NavLink>
                </li>
              ))}
              
              <li className="relative">
                <NavLink to="/shop" className={shopLinkClass}>
                  <span className="inline-block animate-cart-wiggle">🛒</span>{" "}
                  {translations[lang]["shop"]}
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
               <button onClick={toggleLanguage} className="text-sm font-medium border px-2 py-1 rounded hover:bg-gray-100">
                {translations[lang]["language"]}
              </button>

              <button
                onClick={onQuoteClick}
                className="bg-primary text-white font-semibold text-sm px-6 py-2 rounded-lg shadow-md hover:bg-primary/90 transition"
              >
                {translations[lang]["requestQuote"]}
              </button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden text-2xl text-gray-800">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
           {navLinks.map((link) => (
              <NavLink key={link.key} to={link.path} className="block font-medium text-gray-800 py-2">
                {translations[lang][link.key]}
              </NavLink>
            ))}
            <NavLink to="/shop" className="block w-full text-center bg-yellow-500 py-3 rounded-lg font-bold">
               🛒 {translations[lang]["shop"]}
            </NavLink>
            <button onClick={onQuoteClick} className="w-full bg-primary text-white py-3 rounded-lg font-bold">
               {translations[lang]["requestQuote"]}
            </button>
        </div>
      )}
    </header>
  );
};

export default Header;