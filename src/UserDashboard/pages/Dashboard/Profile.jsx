import React, { useState, useEffect, useCallback } from "react";
import { 
  IoPersonOutline, 
  IoMailOutline, 
  IoCallOutline, 
  IoLocationOutline, 
  IoShieldCheckmarkOutline,
  IoHomeOutline,
  IoChevronForwardOutline
} from "react-icons/io5";
import api from "../../../api/api";
import toast from "react-hot-toast";
import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    addresses: [],
  });

  const [loading, setLoading] = useState(true);

  const content = {
    en: {
      title: "My Profile",
      personalInfo: "Personal Information",
      savedAddresses: "Saved Addresses",
      manageAddresses: "Manage",
      noAddresses: "No addresses saved yet.",
      labels: {
        name: "Full Name",
        email: "Email Address",
        phone: "Mobile Number",
        default: "Primary Address"
      },
      loading: "Gathering your info...",
      error: "Failed to load profile data."
    },
    ar: {
      title: "ملفي الشخصي",
      personalInfo: "المعلومات الشخصية",
      savedAddresses: "العناوين المحفوظة",
      manageAddresses: "إدارة",
      noAddresses: "لا توجد عناوين محفوظة حتى الآن.",
      labels: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الجوال",
        default: "العنوان الرئيسي"
      },
      loading: "جاري جلب بياناتك...",
      error: "فشل تحميل بيانات الملف الشخصي"
    }
  };

  const currentContent = content[lang];

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      const resUser = await api.get("/users/me");
      const userData = resUser.data?.user || resUser.data?.data;
      if (!userData) throw new Error("User data not found");

      const resAddresses = await api.get("/user-addresses/me");
      const addresses = resAddresses.data || [];

      setUser({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        addresses,
      });
    } catch (err) {
      toast.error(currentContent.error);
    } finally {
      setLoading(false);
    }
  }, [currentContent.error]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    window.addEventListener("profile-refresh", fetchUser);
    return () => window.removeEventListener("profile-refresh", fetchUser);
  }, [fetchUser]);

  const sortedAddresses = [...user.addresses].sort((a, b) => b.is_default - a.is_default);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 font-bold animate-pulse">{currentContent.loading}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-20 pt-6 lg:pt-0" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-10 px-2 sm:px-0">
        <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-100">
          <IoPersonOutline size={28} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">{currentContent.title}</h2>
      </div>

      <div className="grid gap-8">
        {/* Personal Info Card */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden group">
          <div className="bg-gray-900 p-8 text-white relative">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center text-3xl font-black shadow-2xl">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </div>
              <div>
                <h3 className="text-xl font-black">{user.name}</h3>
                <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                  <IoShieldCheckmarkOutline className="text-green-400" />
                  Verified Customer
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-8 grid sm:grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">{currentContent.labels.email}</p>
              <div className="flex items-center gap-3 text-gray-700 font-bold">
                <IoMailOutline className="text-blue-600" size={20} />
                {user.email}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">{currentContent.labels.phone}</p>
              <div className="flex items-center gap-3 text-gray-700 font-bold">
                <IoCallOutline className="text-blue-600" size={20} />
                {user.phone || "---"}
              </div>
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-black text-gray-900">{currentContent.savedAddresses}</h3>
            <Link 
              to="/dashboard/addresses" 
              className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:underline"
            >
              {currentContent.manageAddresses}
              <IoChevronForwardOutline className={isArabic ? "rotate-180" : ""} />
            </Link>
          </div>

          {sortedAddresses.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-gray-100 p-12 rounded-[2.5rem] text-center">
              <IoLocationOutline size={48} className="mx-auto mb-4 text-gray-200" />
              <p className="font-bold text-gray-400">{currentContent.noAddresses}</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {sortedAddresses.map((addr) => (
                <div 
                  key={addr.id} 
                  className={`bg-white p-6 rounded-[2.5rem] border-2 transition-all group ${
                    addr.is_default ? 'border-blue-600 shadow-xl shadow-blue-50' : 'border-transparent shadow-sm border-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-xl ${addr.is_default ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <IoHomeOutline size={18} />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-sm">{addr.full_name}</h4>
                      {addr.is_default && (
                        <p className="text-blue-600 text-[9px] font-black uppercase tracking-tighter">
                          {currentContent.labels.default}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    {addr.address_line1}, {addr.city} <br />
                    {addr.country}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;