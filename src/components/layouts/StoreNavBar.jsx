'use client';

import React, { useState, useEffect, useRef } from "react";
import { IoCartOutline, IoPersonCircleOutline, IoSearch, IoClose, IoLogOutOutline, IoGridOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import NavMenu from "./NavMenu";
import AuthModal from "../../pages/Login/components/AuthModals";
import { motion, AnimatePresence } from "framer-motion";
import LogoImage from "../../assets/images/1.png";
import { useLanguage } from "../../context/LanguageContext";
// Import your centralized API instance
import api from "../../api/api"; 

export default function StoreNavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const { cart = [] } = useCart();
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const ref = useRef(null);
  const { lang, toggleLanguage } = useLanguage();
  const isArabic = lang === "ar";

  const SITE_NAME = "RAM LIMITED";
  const SITE_NAME_AR = "رام ليمتد";

  // --- LIVE SEARCH LOGIC USING CENTRALIZED API ---
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      try {
        // Using the centralized axios instance
        // Your api.js already handles the baseURL (e.g., /api/v1)
        const response = await api.get(`/products/search`, {
          params: { query: searchTerm, limit: 5 },
          signal: controller.signal
        });

        if (response.data) {
          setSearchResults(response.data.data || []);
        }
      } catch (err) {
        if (err.name !== 'CanceledError' && err.name !== 'AbortError') {
          console.error('Search error:', err);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [searchTerm]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setSearchResults([]);
      setShowMobileSearch(false);
    }
  };

  // Close everything on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowCategories(false);
        setShowUserDropdown(false);
        setShowMobileSearch(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleDashboardRedirect = () => {
    navigate(user?.role === 'admin' ? '/admin/dashboard' : '/dashboard/overview');
    setShowUserDropdown(false);
  };

  return (
    <>
      <header ref={ref} dir={isArabic ? "rtl" : "ltr"} className="sticky top-0 z-[1000] bg-white shadow-sm w-full">
        {/* SALE BANNER */}
        <div className="bg-blue-900 text-white py-1 text-center overflow-hidden">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-4">
            {isArabic ? `🔥 توصيل مجاني للطلبات فوق 500 ريال 🔥` : `🔥 FREE SHIPPING ON ORDERS OVER SR500 🔥`}
          </p>
        </div>

        {/* MAIN NAV */}
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14 md:h-20 gap-2 md:gap-4">
          
          <Link to="/" className="flex items-center gap-1.5 shrink-0">
            <img src={LogoImage} alt="Logo" className="h-8 w-8 md:h-12 md:w-12 object-contain" />
            <span className="font-black text-sm md:text-xl text-blue-900 whitespace-nowrap">
              {isArabic ? SITE_NAME_AR : SITE_NAME}
            </span>
          </Link>

          {/* DESKTOP SEARCH */}
          <div className="hidden lg:flex flex-grow max-w-lg relative mx-4">
            <form onSubmit={handleSearchSubmit} className="flex w-full group">
              <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={isArabic ? "ابحث..." : "Search..."}
                className="w-full px-4 py-2 bg-gray-100 rounded-l-lg outline-none border border-transparent focus:border-blue-600 focus:bg-white transition-all" 
              />
              <button type="submit" className="bg-blue-600 px-4 text-white rounded-r-lg hover:bg-blue-700">
                <IoSearch size={18}/>
              </button>
            </form>
            <AnimatePresence>
              {searchResults.length > 0 && (
                <motion.div initial={{opacity:0, y:5}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-lg mt-1 border z-[1100]">
                  {searchResults.map(p => (
                    <div key={p.id} onClick={() => { navigate(`/product/${p.slug || p.id}`); setSearchResults([]); setSearchTerm(""); }} className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-none">
                      <img src={p.image_urls?.[0] || "/placeholder.png"} className="w-8 h-8 rounded object-cover" alt="" />
                      <span className="text-sm font-medium truncate">{isArabic ? p.name_ar || p.name : p.name}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-1 md:gap-3">
            <button onClick={() => setShowMobileSearch(!showMobileSearch)} className="lg:hidden p-1.5 text-gray-700">
               {showMobileSearch ? <IoClose size={22}/> : <IoSearch size={22} />}
            </button>

            <button onClick={toggleLanguage} className="font-black text-[10px] md:text-xs border px-1.5 py-1 rounded hover:bg-gray-100 transition-colors">
                {isArabic ? "EN" : "AR"}
            </button>
            
            <Link to="/store/cart" className="relative p-1.5 text-gray-700">
              <IoCartOutline size={24} className="md:w-7 md:h-7" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </Link>

            {!loading && (
              user ? (
                <div className="relative">
                  <button onClick={() => setShowUserDropdown(!showUserDropdown)} className="p-1 text-blue-600">
                    <IoPersonCircleOutline className="w-7 h-7 md:w-9 md:h-9" />
                  </button>
                  <AnimatePresence>
                    {showUserDropdown && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }} 
                        animate={{ opacity: 1, y: 0, scale: 1 }} 
                        exit={{ opacity: 0, y: 10, scale: 0.95 }} 
                        className={`absolute top-full mt-2 w-48 bg-white border shadow-2xl rounded-xl z-[1100] py-2 ${isArabic ? "left-0" : "right-0"}`}
                      >
                        <div className="px-4 py-2 border-b mb-1">
                          <p className="text-[10px] text-gray-400 font-bold uppercase">{isArabic ? "مرحباً" : "Welcome"}</p>
                          <p className="text-sm font-bold text-gray-800 truncate">{user.name || user.email}</p>
                        </div>
                        <button onClick={handleDashboardRedirect} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 flex items-center gap-3 transition-colors">
                          <IoGridOutline className="text-blue-600" /> {isArabic ? "لوحة التحكم" : "Dashboard"}
                        </button>
                        <button onClick={logout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors">
                          <IoLogOutOutline /> {isArabic ? "تسجيل الخروج" : "Logout"}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button onClick={() => setShowAuthModal(true)} className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-[10px] md:text-sm font-bold ml-1">
                  {isArabic ? "دخول" : "Login"}
                </button>
              )
            )}
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        <AnimatePresence>
          {showMobileSearch && (
            <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} className="lg:hidden bg-white px-4 pb-3 overflow-hidden border-b">
               <form onSubmit={handleSearchSubmit} className="relative">
                  <input 
                    autoFocus
                    value={searchTerm} 
                    onChange={(e)=>setSearchTerm(e.target.value)} 
                    className="w-full bg-gray-50 rounded-md px-3 py-2 text-sm outline-none border focus:border-blue-600" 
                    placeholder={isArabic ? "ابحث عن المنتجات..." : "Search products..."} 
                  />
                  {searchResults.length > 0 && (
                    <div className="bg-white border rounded-md mt-1 shadow-xl max-h-60 overflow-y-auto">
                       {searchResults.map(p => (
                         <div key={p.id} onClick={() => { navigate(`/product/${p.id}`); setShowMobileSearch(false); }} className="p-3 border-b last:border-none text-xs flex gap-3 items-center">
                            <img src={p.image_urls?.[0]} className="w-8 h-8 rounded object-cover" />
                            <span className="font-medium text-gray-700">{isArabic ? p.name_ar || p.name : p.name}</span>
                         </div>
                       ))}
                    </div>
                  )}
               </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CATEGORY NAV */}
        <nav className="bg-gray-50 border-y relative">
          <div className="max-w-7xl mx-auto px-4">
            <button 
              onClick={() => setShowCategories(!showCategories)} 
              className="flex items-center gap-2 py-2.5 md:py-3 text-[10px] md:text-xs font-black text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
            >
              <div className="flex flex-col gap-0.5">
                <span className={`h-0.5 w-3.5 bg-current transition-all ${showCategories ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`h-0.5 w-3.5 bg-current ${showCategories ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-3.5 bg-current transition-all ${showCategories ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
              <span>{isArabic ? "الأقسام" : "Categories"}</span>
            </button>
          </div>

          <AnimatePresence>
            {showCategories && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowCategories(false)} className="fixed inset-0 top-[120px] md:top-[160px] bg-black/30 backdrop-blur-sm z-[998]" />
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute top-full left-0 w-full bg-white shadow-2xl z-[999] border-t">
                  <NavMenu onClose={() => setShowCategories(false)} />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </header>
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}