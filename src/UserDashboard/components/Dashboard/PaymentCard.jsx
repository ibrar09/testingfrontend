// src/components/dashboard/PaymentCard.jsx
import React from "react";
import StatusBadge from "../common/StatusBadge";
import { useLanguage } from "../../context/LanguageContext";

const PaymentCard = ({ payment }) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  // Bilingual labels
  const labels = {
    en: {
      date: "Date",
      method: "Method",
      amount: "Amount",
      currency: "SAR"
    },
    ar: {
      date: "التاريخ",
      method: "الطريقة",
      amount: "المبلغ",
      currency: "ريال سعودي"
    }
  };

  const currentLabels = labels[lang];

  // Translate payment method if needed
  const getPaymentMethod = (method) => {
    const methodTranslations = {
      'Credit Card': { en: 'Credit Card', ar: 'بطاقة ائتمان' },
      'Debit Card': { en: 'Debit Card', ar: 'بطاقة خصم' },
      'Bank Transfer': { en: 'Bank Transfer', ar: 'تحويل بنكي' },
      'Cash': { en: 'Cash', ar: 'نقداً' },
      'Apple Pay': { en: 'Apple Pay', ar: 'أبل باي' },
      'Google Pay': { en: 'Google Pay', ar: 'جوجل باي' },
      'Mada': { en: 'Mada', ar: 'مدى' },
      'PayPal': { en: 'PayPal', ar: 'باي بال' }
    };

    if (methodTranslations[method]) {
      return methodTranslations[method][lang];
    }
    
    // If payment method is already bilingual object
    if (typeof method === 'object' && method[lang]) {
      return method[lang];
    }
    
    return method;
  };

  return (
    <div 
      className="bg-white shadow rounded-lg p-6 hover:shadow-md transition duration-200 relative"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className={`flex ${isArabic ? 'flex-row-reverse' : ''} justify-between items-center mb-4`}>
        <span className={`text-sm font-semibold text-gray-700 ${isArabic ? 'font-arabic' : ''}`}>
          {payment.orderNumber}
        </span>
        <StatusBadge status={payment.status} lang={lang} />
      </div>
      <p className={`text-gray-600 mb-1 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
        {currentLabels.date}: {payment.date}
      </p>
      <p className={`text-gray-600 mb-1 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
        {currentLabels.method}: {getPaymentMethod(payment.method)}
      </p>
      <p className={`text-gray-900 font-medium text-lg ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
        {currentLabels.amount}: {currentLabels.currency} {payment.amount}
      </p>
    </div>
  );
};

export default PaymentCard;