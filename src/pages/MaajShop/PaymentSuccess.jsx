// src/pages/MaajShop/PaymentSuccess.jsx
'use client';
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoTimeOutline,
} from "react-icons/io5";

import api from "../../api/api"; // centralized API
import { useLanguage } from "../../context/LanguageContext";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang: language } = useLanguage(); // Arabic or English
  const rtl = language === "ar";

  const [status, setStatus] = useState(rtl ? "جارٍ التحقق من الدفع..." : "Checking your payment...");
  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState(<IoTimeOutline size={90} />);
  const [iconColor, setIconColor] = useState("text-gray-400");

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const tapId = query.get("tap_id");

    if (!tapId) {
      setStatus(rtl ? "معلومات الدفع مفقودة." : "Payment information missing.");
      setIcon(<IoCloseCircleOutline size={90} />);
      setIconColor("text-red-500");
      setLoading(false);
      return;
    }

    let interval;

    const checkPaymentStatus = async () => {
      try {
        const res = await api.get(`/orders/payment/status/${tapId}`);
        const paymentStatus = res.data.status;
        console.log("🔹 Payment status:", paymentStatus);

        if (["CAPTURED", "SETTLED"].includes(paymentStatus)) {
          setStatus(rtl ? "تم الدفع بنجاح!" : "Payment Successful!");
          setIcon(<IoCheckmarkCircleOutline size={110} />);
          setIconColor("text-green-500");
          setLoading(false);
          clearInterval(interval);
          setTimeout(() => navigate("/shop"), 3000);

        } else if (["PENDING", "INITIATED"].includes(paymentStatus)) {
          setStatus(rtl ? "الدفع معلق..." : "Payment Pending...");
          setIcon(<IoTimeOutline size={110} />);
          setIconColor("text-yellow-500");
          setLoading(true);

        } else if (["CANCELLED", "FAILED"].includes(paymentStatus)) {
          setStatus(rtl ? "فشل الدفع أو تم الإلغاء" : "Payment Failed or Cancelled");
          setIcon(<IoCloseCircleOutline size={110} />);
          setIconColor("text-red-500");
          setLoading(false);
          clearInterval(interval);
          setTimeout(() => navigate("/shop"), 5000);

        } else {
          setStatus(rtl ? "حالة دفع غير معروفة" : "Unknown Payment Status");
          setIcon(<IoTimeOutline size={110} />);
          setIconColor("text-gray-500");
          setLoading(true);
        }

      } catch (err) {
        console.error("❌ Payment status check error:", err.response || err);
        setStatus(rtl ? "حدث خطأ أثناء التحقق من الدفع." : "Something went wrong while verifying your payment.");
        setIcon(<IoCloseCircleOutline size={90} />);
        setIconColor("text-red-500");
        setLoading(false);
        clearInterval(interval);
      }
    };

    checkPaymentStatus();
    interval = setInterval(checkPaymentStatus, 5000);
    return () => clearInterval(interval);
  }, [location.search, navigate, rtl]);

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="flex justify-center items-center mt-20 px-5">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        <div className={`flex justify-center mb-5 animate-[zoomIn_0.4s] ${iconColor}`}>
          {icon}
        </div>

        <h1 className="text-2xl font-bold mb-2">{status}</h1>

        {loading && (
          <p className="text-gray-500 mb-2">
            {rtl ? "يرجى الانتظار..." : "Please wait..."}
          </p>
        )}

        <p className="text-gray-400 text-sm">
          {rtl ? "سيتم إعادة توجيهك تلقائيًا..." : "You will be redirected automatically..."}
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
