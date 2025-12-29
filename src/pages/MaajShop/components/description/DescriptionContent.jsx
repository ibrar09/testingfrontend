import React, { useEffect, useState } from "react";
import api from "../../../../api/api";
import { CheckCircle, Package, Clock, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";
import { motion } from "framer-motion";

const DescriptionContent = ({ productId }) => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setError(isArabic ? "معرّف المنتج مفقود." : "Product ID is missing.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${productId}`);
        const data = res.data.data?.[0] || res.data.data || res.data;
        if (!data) throw new Error("Product not found");
        setProduct(data);
      } catch (err) {
        setError(isArabic ? "فشل تحميل بيانات المنتج." : "Failed to load product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, isArabic]);

  if (loading) return <div className="flex justify-center py-20"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" /></div>;
  if (error) return <div className="text-center py-10 text-red-500 font-bold">{error}</div>;

  const details = product.details || {};
  const descriptionData = [
    { label: isArabic ? "المادة" : "Material", value: details.material },
    { label: isArabic ? "اللون" : "Color", value: details.color },
    { label: isArabic ? "المقاس" : "Size", value: details.size },
    { label: isArabic ? "الخاصية" : "Feature", value: details.feature },
    { label: isArabic ? "رقم الموديل" : "Model Number", value: details.model_number },
    { label: isArabic ? "الدفع" : "Payment", value: details.payment },
    { label: isArabic ? "الاستخدام" : "Usage", value: details.usage },
    { label: isArabic ? "مدة التوصيل" : "Delivery Time", value: details.delivery_time },
  ];

  const handleEmail = () => window.location.href = "mailto:Ramlimited.sa@gmail.com";
  const handleWhatsApp = () => {
    const phone = "+966593534881";
    const message = encodeURIComponent(isArabic ? "مرحبًا! أرغب في الاستفسار عن: " + product.name_ar : "Hello! I'm interested in: " + product.name);
    window.open(`https://wa.me/${phone.replace(/\D/g, "")}?text=${message}`, "_blank");
  };

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="flex flex-col lg:flex-row gap-8 mt-4">
      {/* --- Left: Specification Table --- */}
      <div className="w-full lg:w-3/5">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#023A9A] to-[#1392E0] p-6">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              {isArabic ? "المواصفات الفنية" : "Technical Specifications"}
            </h2>
          </div>

          <div className="grid grid-cols-1 divide-y divide-gray-50">
            {descriptionData.map((item, index) => item.value && (
              <div key={index} className="flex flex-col sm:flex-row hover:bg-blue-50/30 transition-colors">
                <div className="sm:w-1/3 p-4 text-xs font-black uppercase tracking-wider text-blue-900 bg-gray-50/50">
                  {item.label}
                </div>
                <div className="sm:w-2/3 p-4 text-sm text-gray-600 font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50 border-t border-amber-100">
            <p className="text-[11px] font-bold text-amber-700 text-center uppercase tracking-tighter">
              {isArabic 
                ? "ملاحظة: جميع التصاميم قابلة للتخصيص حسب الطلب" 
                : "Note: All designs are fully customizable upon request"}
            </p>
          </div>
        </div>
      </div>

      {/* --- Right: Quick Info & Support --- */}
      <div className="w-full lg:w-2/5 space-y-6">
        {/* Quick Overview Card */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
             <div className="w-2 h-6 bg-blue-600 rounded-full" />
             {isArabic ? "نظرة عامة" : "Quick Overview"}
          </h3>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Package size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">{isArabic ? "الفئة" : "Category"}</p>
                <p className="text-sm font-bold text-gray-800">{isArabic ? product.category_name_ar || "عام" : product.category_name || "General"}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-gray-400">{isArabic ? "التوصيل المتوقع" : "Est. Delivery"}</p>
                <p className="text-sm font-bold text-gray-800">{details.delivery_time || (isArabic ? "3-5 أيام" : "3-5 Days")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support Card */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-2">{isArabic ? "تحتاج مساعدة؟" : "Need Help?"}</h3>
            <p className="text-blue-100 text-sm mb-6 opacity-80 leading-relaxed">
              {isArabic 
                ? "تواصل مع خبرائنا لطلبات الجملة أو التصاميم المخصصة." 
                : "Contact our experts for bulk orders or custom design requests."}
            </p>
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleWhatsApp}
                className="w-full h-12 bg-white text-blue-900 rounded-xl font-black text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
              >
                <MessageCircle size={18} className="text-green-500" />
                {isArabic ? "واتساب" : "WhatsApp Support"}
              </button>
              
              <button 
                onClick={handleEmail}
                className="w-full h-12 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Mail size={18} />
                {isArabic ? "البريد الإلكتروني" : "Email Inquiry"}
              </button>
            </div>
          </div>

          {/* Decorative background element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionContent;