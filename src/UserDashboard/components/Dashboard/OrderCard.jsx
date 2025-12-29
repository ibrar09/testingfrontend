// src/components/dashboard/OrderCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "../common/StatusBadge";
import { useLanguage } from "../../context/LanguageContext";

const OrderCard = ({ order }) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const totalAmount = order.items.reduce((sum, item) => sum + item.qty * item.price, 0);

  // Bilingual labels
  const labels = {
    en: {
      order: "Order",
      date: "Date",
      total: "Total",
      currency: "SAR"
    },
    ar: {
      order: "طلب",
      date: "التاريخ",
      total: "المجموع",
      currency: "ريال سعودي"
    }
  };

  const currentLabels = labels[lang];

  return (
    <Link 
      to={`/dashboard/orders/${order.id}`} 
      className="block bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className={`flex ${isArabic ? 'flex-row-reverse' : ''} justify-between items-center mb-2`}>
        <span className={`font-medium text-gray-700 ${isArabic ? 'font-arabic' : ''}`}>
          {currentLabels.order} #{order.orderNumber}
        </span>
        <StatusBadge status={order.status} lang={lang} />
      </div>
      <p className={`text-gray-500 text-sm mb-1 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
        {currentLabels.date}: {order.date}
      </p>
      <p className={`text-gray-500 text-sm ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
        {currentLabels.total}: {currentLabels.currency} {totalAmount}
      </p>
    </Link>
  );
};

export default OrderCard;