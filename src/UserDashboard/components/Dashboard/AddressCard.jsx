// src/components/dashboard/AddressCard.jsx
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const AddressCard = ({ address }) => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  // Bilingual labels
  const labels = {
    en: {
      edit: "Edit",
      default: "Default",
      home: "Home",
      office: "Office",
      other: "Other"
    },
    ar: {
      edit: "تعديل",
      default: "افتراضي",
      home: "المنزل",
      office: "المكتب",
      other: "أخرى"
    }
  };

  const currentLabels = labels[lang];

  // Get address type in current language
  const getAddressType = (type) => {
    const typeMap = {
      'default': currentLabels.default,
      'home': currentLabels.home,
      'office': currentLabels.office,
      'other': currentLabels.other
    };
    return typeMap[type] || type;
  };

  return (
    <div 
      className="bg-white shadow rounded-lg p-6 hover:shadow-md transition duration-200 relative"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className={`flex ${isArabic ? 'flex-row-reverse' : ''} justify-between items-center mb-4`}>
        <span className={`text-sm font-semibold text-gray-700 ${isArabic ? 'font-arabic' : ''}`}>
          {getAddressType(address.type)}
        </span>
        <button
          className={`text-gray-400 hover:text-gray-600 ${isArabic ? 'font-arabic' : ''}`}
          onClick={() => alert(isArabic ? `تعديل العنوان ID ${address.id}` : `Edit address ID ${address.addressId}`)}
        >
          {currentLabels.edit}
        </button>
      </div>
      <p className={`text-gray-900 font-medium mb-1 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
        {address.fullName}
      </p>
      <p className={`text-gray-600 mb-1 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
        {address.phone}
      </p>
      <p className={`text-gray-600 mb-1 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
        {address.addressLine1}
      </p>
      {address.addressLine2 && (
        <p className={`text-gray-600 mb-1 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
          {address.addressLine2}
        </p>
      )}
      <p className={`text-gray-600 mb-1 ${isArabic ? 'font-arabic text-right' : 'text-left'}`}>
        {address.city}, {address.postalCode}
      </p>
    </div>
  );
};

export default AddressCard;