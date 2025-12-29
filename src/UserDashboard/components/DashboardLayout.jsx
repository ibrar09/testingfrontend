import React, { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiBox, FiCreditCard, FiUser, FiMapPin, FiLogOut, FiMenu, FiX, FiTruck } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { toast } from "react-hot-toast";
import StoreNavBar from "../../components/layouts/StoreNavBar";

const SidebarContent = ({ closeSidebar }) => {
  const { lang } = useLanguage();
  const location = useLocation();
  const isArabic = lang === "ar";
  const navigate = useNavigate();

  const navLabels = {
    en: {
      myAccount: "My Account",
      overview: "Overview",
      orders: "Orders",
      payments: "Payments",
      addresses: "Addresses",
      shipment: "Shipment",
      profile: "Profile",
      logout: "Logout",
      logoutSuccess: "Logged out successfully!",
      logoutConfirm: "Are you sure you want to logout?"
    },
    ar: {
      myAccount: "حسابي",
      overview: "نظرة عامة",
      orders: "الطلبات",
      payments: "المدفوعات",
      addresses: "العناوين",
      shipment: "الشحن",
      profile: "الملف الشخصي",
      logout: "تسجيل الخروج",
      logoutSuccess: "تم تسجيل الخروج بنجاح!",
      logoutConfirm: "هل أنت متأكد أنك تريد تسجيل الخروج؟"
    }
  };

  const currentLabels = navLabels[lang];

  const menuItems = [
    { path: "/dashboard/overview", label: currentLabels.overview, icon: <FiHome /> },
    { path: "/dashboard/orders", label: currentLabels.orders, icon: <FiBox /> },
    { path: "/dashboard/payments", label: currentLabels.payments, icon: <FiCreditCard /> },
    { path: "/dashboard/addresses", label: currentLabels.addresses, icon: <FiMapPin /> },
    { path: "/dashboard/shipment", label: currentLabels.shipment, icon: <FiTruck /> },
    { path: "/dashboard/profile", label: currentLabels.profile, icon: <FiUser /> },
  ];

  const handleLogout = () => {
    if (!window.confirm(currentLabels.logoutConfirm)) return;
    localStorage.clear();
    sessionStorage.clear();
    toast.success(currentLabels.logoutSuccess);
    navigate("/store", { replace: true });
    window.location.reload();
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-6 flex items-center justify-between border-b border-gray-100">
        <h1 className="text-xl font-black text-gray-900 tracking-tight">
          {currentLabels.myAccount}
        </h1>
        <button onClick={closeSidebar} className="lg:hidden p-2 rounded-xl bg-gray-50 text-gray-500">
          <FiX size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all group ${
                isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                  : "text-gray-500 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <span className={`${isActive ? "text-white" : "text-blue-600 group-hover:scale-110 transition-transform"}`}>
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all"
        >
          <FiLogOut className={isArabic ? "" : "scale-x-[-1]"} />
          <span className="text-sm">{currentLabels.logout}</span>
        </button>
      </div>
    </div>
  );
};
const DashboardLayout = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    // 'h-screen' and 'flex-col' are the keys here. 
    // It creates a container exactly the height of the window.
    <div dir={isArabic ? "rtl" : "ltr"} className="h-screen flex flex-col bg-[#FBFCFE] overflow-hidden">
      
      {/* 1. THE NAVBAR 
          We remove 'fixed' and use a standard block. 
          This forces the content below it to START where the navbar ENDS.
      */}
      <header className="w-full bg-white border-b border-gray-100 flex-shrink-0 z-[110]">
        <StoreNavBar />
      </header>

      {/* 2. THE MAIN DASHBOARD AREA 
          'flex-1' tells this div to take up all space left after the header.
          'overflow-hidden' prevents the whole page from scrolling.
      */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* 3. DESKTOP SIDEBAR 
            It now fills the space from the bottom of the navbar to the bottom of the screen.
        */}
        <aside className="hidden lg:block w-72 h-full border-r border-gray-100 bg-white overflow-y-auto">
          <SidebarContent />
        </aside>

        {/* 4. MAIN CONTENT (OVERVIEW/OUTLET) */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#FBFCFE]">
          
          {/* MOBILE TOGGLE (Hidden on Desktop) */}
          <div className="lg:hidden flex items-center px-6 py-4 bg-white border-b border-gray-50">
            <button
              onClick={toggleSidebar}
              className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200"
            >
              <FiMenu size={22} />
            </button>
            <span className="mx-4 font-black text-gray-900 text-sm tracking-tight">
                {isArabic ? "لوحة التحكم" : "Dashboard Menu"}
            </span>
          </div>

          {/* 5. SCROLLABLE CONTAINER
              This is the only part that will scroll. 
              This prevents the navbar from ever overlapping your content.
          */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-4 md:p-8 lg:p-10 max-w-7xl mx-auto pb-32">
              <Outlet />
            </div>
          </div>
        </main>

        {/* 6. MOBILE SIDEBAR OVERLAY */}
        <div 
          className={`fixed inset-0 z-[200] lg:hidden transition-all duration-300 ${
            isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={toggleSidebar} />
          <div className={`absolute top-0 bottom-0 w-72 bg-white transition-transform duration-500 shadow-2xl ${
            isSidebarOpen 
              ? "translate-x-0" 
              : isArabic ? "translate-x-full" : "-translate-x-full"
          } ${isArabic ? "right-0" : "left-0"}`}>
            <SidebarContent closeSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;