'use client';
import React, { useState, useEffect } from "react";
import api from "../../api/api";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";
import { IoShieldCheckmarkOutline, IoLocationOutline, IoBagCheckOutline, IoLockClosedOutline } from "react-icons/io5";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const { lang: language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [address, setAddress] = useState({
    fullName: "",
    email: user?.email || "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const rtl = language === "ar";
  const currency = rtl ? "ر.س" : "SAR";

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const status = query.get("status");
    const orderId = query.get("orderId");
    if (status && orderId) {
      setPaymentStatus(status);
      if (status === "SUCCESS") clearCart();
    }
  }, [location, clearCart]);

  const validateForm = () => {
    const requiredFields = ["fullName", "email", "phone", "addressLine1", "city", "state", "postalCode", "country"];
    let valid = true;
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!address[field] || address[field].trim() === "") {
        newErrors[field] = rtl ? "هذا الحقل مطلوب" : "Required";
        valid = false;
      }
    });
    setErrors(newErrors);
    return valid;
  };

  const handlePlaceOrder = async () => {
    if (!user) return alert(rtl ? "يرجى تسجيل الدخول أولاً." : "Please log in first.");
    if (!cart.length) return alert(rtl ? "عربة التسوق فارغة!" : "Your cart is empty!");
    if (!validateForm()) return;

    const items = cart.map((item) => ({
      product_id: item.product_id,
      variant_id: item.variantId || null,
      quantity: item.quantity,
      price: item.price,
    }));

    const payload = {
      user_id: user.id,
      items,
      address: {
        full_name: address.fullName,
        email: address.email,
        phone: address.phone,
        address_line1: address.addressLine1,
        address_line2: address.addressLine2 || "",
        city: address.city,
        state: address.state,
        postal_code: address.postalCode,
        country: address.country,
      },
      payment_method: "tap",
    };

    setLoading(true);
    try {
      const { data } = await api.post("/orders", payload);
      if (data.tap_checkout_url) {
        window.location.href = data.tap_checkout_url;
      } else {
        alert(rtl ? "تم إنشاء الطلب بنجاح!" : "Order placed successfully!");
        clearCart();
        navigate("/store");
      }
    } catch (err) {
      alert(err.response?.data?.message || err.message || (rtl ? "حدث خطأ ما" : "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  const InputField = ({ name, placeholder, type = "text", label }) => (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={address[name]}
        onChange={handleChange}
        className={`w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
          errors[name] ? "border-red-500 bg-red-50" : ""
        }`}
      />
      {errors[name] && <span className="text-red-500 text-[10px] font-bold px-1 uppercase">{errors[name]}</span>}
    </div>
  );

  const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="bg-[#FBFCFE] min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              {rtl ? "إتمام عملية الشراء" : "Checkout"}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {rtl ? "يرجى إدخال تفاصيل الشحن لإتمام الطلب" : "Please enter your shipping details to complete the order"}
            </p>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold border border-blue-100 uppercase tracking-widest">
            <IoLockClosedOutline size={16} />
            {rtl ? "دفع آمن ومشفّر" : "Secure & Encrypted Payment"}
          </div>
        </div>

        {paymentStatus && (
          <div className={`p-4 rounded-2xl mb-8 flex items-center gap-3 border ${
            paymentStatus === "SUCCESS" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
          }`}>
            <IoShieldCheckmarkOutline size={24} />
            <span className="font-bold">
              {rtl ? "حالة الدفع" : "Payment Status"}: {paymentStatus === "SUCCESS" ? (rtl ? "تم بنجاح" : "Success") : (rtl ? "فشلت العملية" : "Failed")}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Shipping Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <IoLocationOutline size={20} />
              </div>
              <h2 className="text-xl font-black text-gray-900">{rtl ? "عنوان الشحن" : "Shipping Address"}</h2>
            </div>

            <div className="space-y-6">
              <InputField name="fullName" label={rtl ? "الاسم الكامل" : "Full Name"} placeholder="e.g. Abdullah Ahmed" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField name="email" label={rtl ? "البريد الإلكتروني" : "Email Address"} type="email" placeholder="name@example.com" />
                <InputField name="phone" label={rtl ? "رقم الجوال" : "Phone Number"} placeholder="+966 50 XXX XXXX" />
              </div>

              <div className="space-y-4">
                <InputField name="addressLine1" label={rtl ? "العنوان (السطر الأول)" : "Address Line 1"} placeholder={rtl ? "اسم الشارع، رقم المنزل" : "Street name, House number"} />
                <InputField name="addressLine2" label={rtl ? "العنوان (السطر الثاني)" : "Address Line 2 (Optional)"} placeholder={rtl ? "شقة، مبنى، علامة مميزة" : "Apartment, suite, unit, etc."} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField name="city" label={rtl ? "المدينة" : "City"} placeholder="Riyadh" />
                <InputField name="state" label={rtl ? "المنطقة / الولاية" : "State / Province"} placeholder="Najd" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField name="postalCode" label={rtl ? "الرمز البريدي" : "Postal Code"} placeholder="12345" />
                <InputField name="country" label={rtl ? "الدولة" : "Country"} placeholder="Saudi Arabia" />
              </div>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-2xl">
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                <IoBagCheckOutline size={24} className="text-blue-500" />
                <h2 className="text-xl font-black">{rtl ? "ملخص الطلب" : "Order Summary"}</h2>
              </div>

              {/* Mini Cart Items */}
              <div className="max-h-48 overflow-y-auto mb-8 space-y-4 custom-scrollbar pr-2">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold">
                        {item.quantity}x
                      </span>
                      <span className="text-gray-300 line-clamp-1 max-w-[150px]">{item.title}</span>
                    </div>
                    <span className="font-bold">{currency} {Number(item.price).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 mb-8">
                <div className="flex justify-between text-gray-400 font-medium">
                  <span>{rtl ? "المجموع الفرعي" : "Subtotal"}</span>
                  <span className="text-white">{currency} {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400 font-medium">
                  <span>{rtl ? "ضريبة القيمة المضافة (15%)" : "VAT (15%)"}</span>
                  <span className="text-white">{currency} {tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400 font-medium">
                  <span>{rtl ? "الشحن" : "Shipping"}</span>
                  <span className="text-green-400 font-bold uppercase text-xs">{rtl ? "مجاني" : "Free"}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-10">
                <span className="text-gray-500 font-black uppercase text-xs tracking-[0.2em]">{rtl ? "الإجمالي النهائي" : "Grand Total"}</span>
                <span className="text-4xl font-black text-blue-500">{currency} {total.toLocaleString()}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading || !cart.length}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/40 ${
                  loading ? "bg-gray-700 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 active:scale-[0.98]"
                }`}
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {rtl ? "تأكيد الدفع" : "Confirm & Pay"}
                    {rtl ? <IoShieldCheckmarkOutline size={22} /> : <IoBagCheckOutline size={22} />}
                  </>
                )}
              </button>

              <p className="mt-6 text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                {rtl ? "بالنقر على تأكيد الدفع، أنت توافق على شروط الخدمة" : "By clicking Confirm, you agree to our Terms of Service"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;