import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoTrashOutline, IoRemoveOutline, IoAddOutline, IoBagHandleOutline, IoArrowBackOutline } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext"; // ✅ Language context
import AuthModal from "../Login/components/AuthModals";
import { BACKEND_URL } from "../../api/api";
import { Helmet } from "react-helmet-async";

const CURRENCY = "SAR";
const TAX_RATE = 0.15;

// ----------------- IMAGE NORMALIZATION -----------------
const normalizeImage = (img) => {
  const fallback = "/images/placeholder.png"; 
  if (!img) return fallback;
  if (typeof img === "string") {
    try {
      if (img.startsWith("[") && img.endsWith("]")) {
        const parsed = JSON.parse(img);
        if (Array.isArray(parsed) && parsed.length > 0) return normalizeImage(parsed[0]);
      }
    } catch {}
    if (img.startsWith("http")) return img;
    if (img.startsWith("/uploads") || img.startsWith("uploads")) {
      const path = img.startsWith("/") ? img : `/${img}`;
      return `${BACKEND_URL}${path}`;
    }
    return img || fallback;
  }
  if (Array.isArray(img)) return img.length > 0 ? normalizeImage(img[0]) : fallback;
  if (img && img.image_url) return normalizeImage(img.image_url);
  return fallback;
};

// ------------------ Quantity Controls ------------------
const QuantityControls = ({ id, quantity, stockAmount, inStock, onQuantityChange }) => (
  <div className={`flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden ${!inStock ? "opacity-50 pointer-events-none" : ""}`}>
    <button
      onClick={() => onQuantityChange(id, quantity - 1)}
      disabled={quantity <= 1}
      className="p-2.5 text-blue-600 hover:bg-blue-50 disabled:text-gray-300 transition"
      aria-label="Decrease quantity"
    >
      <IoRemoveOutline size={18} />
    </button>
    <span className="w-10 text-center text-gray-900 font-bold text-sm" aria-live="polite">{quantity}</span>
    <button
      onClick={() => onQuantityChange(id, quantity + 1)}
      disabled={quantity >= stockAmount || !inStock}
      className="p-2.5 text-blue-600 hover:bg-blue-50 transition"
      aria-label="Increase quantity"
    >
      <IoAddOutline size={18} />
    </button>
  </div>
);

// ------------------ Cart Item Row ------------------
const CartItemRow = ({ item, onQuantityChange, onRemove, isRTL }) => {
  const { id, quantity = 1, price = 0, stockAmount = 10, inStock = true, title = "Unknown Product", title_ar = "منتج غير معروف", images = [] } = item;
  const subtotal = Number(price) * quantity;
  const displayImage = images.length > 0 ? normalizeImage(images[0]) : "/images/placeholder.png";

  return (
    <div 
      className="flex flex-col sm:flex-row items-center gap-4 py-6 border-b border-gray-100 last:border-0"
      itemScope 
      itemType="https://schema.org/OrderItem"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Product Image */}
      <div className="w-28 h-28 flex-shrink-0 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
        <img
          src={displayImage}
          alt={isRTL ? title_ar : title}
          onError={(e) => { e.target.src = "/images/placeholder.png"; }}
          className="w-full h-full object-contain p-2"
          itemProp="image"
        />
      </div>

      {/* Details */}
      <div className={`flex flex-col flex-grow w-full ${isRTL ? "text-right" : "text-left"}`}>
        <div className="flex justify-between items-start">
          <h3 className="text-md sm:text-lg font-bold text-gray-900 line-clamp-1" itemProp="name">
            {isRTL ? title_ar : title}
          </h3>
          <button 
            onClick={() => onRemove(id)} 
            className="hidden sm:block text-gray-300 hover:text-red-500 transition-colors"
            aria-label={isRTL ? `إزالة ${title_ar} من السلة` : `Remove ${title} from cart`}
          >
            <IoTrashOutline size={22} />
          </button>
        </div>

        <p className="text-blue-600 font-black text-lg mt-1" itemProp="price">
          {CURRENCY} {Number(price).toFixed(2)}
        </p>

        {!inStock && (
          <span className="inline-block text-[10px] font-bold text-white bg-red-500 px-2 py-0.5 rounded-full mt-1 self-center sm:self-start">
            {isRTL ? "غير متوفر" : "Out of Stock"}
          </span>
        )}

        {/* Mobile Quantity & Trash */}
        <div className="flex items-center justify-between mt-4 sm:hidden">
          <QuantityControls id={id} quantity={quantity} stockAmount={stockAmount} inStock={inStock} onQuantityChange={onQuantityChange} />
          <div className="flex items-center gap-4">
            <span className="font-black text-gray-900" itemProp="subtotal">
              {CURRENCY} {subtotal.toFixed(2)}
            </span>
            <button 
              onClick={() => onRemove(id)} 
              className="text-red-500 p-2 bg-red-50 rounded-lg"
              aria-label={isRTL ? `إزالة ${title_ar} من السلة` : `Remove ${title} from cart`}
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Controls */}
      <div className="hidden sm:flex items-center gap-8">
        <QuantityControls id={id} quantity={quantity} stockAmount={stockAmount} inStock={inStock} onQuantityChange={onQuantityChange} />
        <div className={`w-24 ${isRTL ? "text-left" : "text-right"}`}>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{isRTL ? "المجموع" : "Total"}</p>
          <span className="text-lg font-black text-gray-900" itemProp="subtotal">
            {CURRENCY} {subtotal.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

// ------------------ Cart Page ------------------
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { user } = useAuth();
  const { lang } = useLanguage(); // ✅ Language hook
  const isRTL = lang === "ar"; // RTL detection
  const navigate = useNavigate();
  const location = useLocation();

  const [promoCode, setPromoCode] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1), 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  const generateCartSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Order",
      "merchant": {
        "@type": "Organization",
        "name": "Ram Limited",
        "url": typeof window !== 'undefined' ? window.location.origin : ""
      },
      "orderNumber": `CART-${Date.now()}`,
      "orderStatus": "https://schema.org/OrderPaymentDue",
      "acceptedOffer": cart.map((item, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": isRTL ? item.title_ar || item.title : item.title || "Unknown Product",
          "image": item.images && item.images.length > 0 ? normalizeImage(item.images[0]) : "",
          "sku": item.sku || item.id
        },
        "price": Number(item.price) || 0,
        "priceCurrency": CURRENCY,
        "eligibleQuantity": item.quantity || 1
      })),
      "priceCurrency": CURRENCY,
      "price": total,
      "discount": 0,
      "totalPaymentDue": {
        "@type": "PriceSpecification",
        "price": total,
        "priceCurrency": CURRENCY
      }
    };
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-blue-600 animate-pulse">{isRTL ? "جارٍ تحميل سلة التسوق..." : "Loading Your Cart..."}</div>;

  const pageTitle = cart.length === 0 
    ? isRTL ? "سلة التسوق فارغة | Ram Limited" : "Empty Shopping Cart | Ram Limited"
    : isRTL ? `سلة التسوق (${cart.length} ${cart.length === 1 ? 'عنصر' : 'عناصر'}) | Ram Limited` 
            : `Shopping Cart (${cart.length} ${cart.length === 1 ? 'item' : 'items'}) | Ram Limited`;
  
  const pageDescription = cart.length === 0
    ? isRTL ? "سلة التسوق فارغة. ابدأ بالتسوق لمنتجات عالية الجودة مع Ram Limited." 
            : "Your shopping cart is empty. Start shopping for quality products at Ram Limited with fast shipping and secure payments."
    : isRTL ? `سلة التسوق الخاصة بك تحتوي على ${cart.length} عنصر${cart.length > 1 ? 'ات' : ''} بمجموع ${CURRENCY} ${total.toFixed(2)}. شحن مجاني وطرق دفع آمنة متاحة.` 
            : `Your shopping cart has ${cart.length} item${cart.length > 1 ? 's' : ''} with total of ${CURRENCY} ${total.toFixed(2)}. Free shipping and secure checkout available.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${typeof window !== 'undefined' ? window.location.origin : ''}/cart`} />
        {cart.length === 0 && <meta name="robots" content="noindex, follow" />}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${typeof window !== 'undefined' ? window.location.origin : ''}/cart`} />
        {cart.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(generateCartSchema())}
          </script>
        )}
      </Helmet>

      {!cart || cart.length === 0 ? (
        <div className="bg-[#FBFCFE] min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20" dir={isRTL ? "rtl" : "ltr"}>
          <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-6">
            <IoBagHandleOutline size={60} className="text-blue-200" />
          </div>
          <h1 className="text-2xl font-black text-gray-900">{isRTL ? "سلة التسوق فارغة" : "Your cart is empty"}</h1>
          <p className="text-gray-500 mt-2 mb-8 max-w-xs">{isRTL ? "يبدو أنك لم تضف أي منتجات بعد." : "Looks like you haven't added anything to your cart yet."}</p>
          <Link to="/store" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
            {isRTL ? "ابدأ التسوق" : "Start Shopping"}
          </Link>
        </div>
      ) : (
        <div className="bg-[#FBFCFE] min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8" dir={isRTL ? "rtl" : "ltr"}>
          <div className="max-w-7xl mx-auto">
            <div className={`flex items-center gap-4 mb-10 ${isRTL ? "justify-end" : ""}`}>
              <div className="w-2 h-10 bg-blue-600 rounded-full" />
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">{isRTL ? "سلة التسوق" : "Shopping Bag"}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: Items */}
              <div className="lg:col-span-8 space-y-4">
                <div 
                  className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-gray-100"
                  itemScope
                  itemType="https://schema.org/Order"
                >
                  {cart.map(item => (
                    <CartItemRow
                      key={item.id || item.product_id}
                      item={item}
                      onQuantityChange={updateQuantity}
                      onRemove={removeFromCart}
                      isRTL={isRTL} // Pass RTL
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => navigate("/store")}
                  className={`flex items-center gap-2 ${isRTL ? "justify-end ml-0 mr-4" : "ml-4"} text-gray-400 font-bold hover:text-blue-600 transition-colors`}
                  aria-label={isRTL ? "متابعة التسوق" : "Continue shopping"}
                >
                  <IoArrowBackOutline /> {isRTL ? "متابعة التسوق" : "Continue Shopping"}
                </button>
              </div>

              {/* Right: Summary */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 sticky top-32">
                  <h2 className="text-xl font-black text-gray-900 mb-6">{isRTL ? "ملخص الطلب" : "Order Summary"}</h2>
                  
                  <div className="space-y-4 pb-6 border-b border-gray-100">
                    <div className="flex justify-between text-gray-500 font-medium">
                      <span>{isRTL ? "المجموع الفرعي" : "Subtotal"}</span>
                      <span className="text-gray-900 font-bold" itemProp="subtotal">{CURRENCY} {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 font-medium">
                      <span>{isRTL ? "الشحن" : "Shipping"}</span>
                      <span className="text-green-600 font-bold">{isRTL ? "مجاني" : "FREE"}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 font-medium">
                      <span>{isRTL ? "الضريبة المقدرة (15%)" : "Estimated Tax (15%)"}</span>
                      <span className="text-gray-900 font-bold">{CURRENCY} {tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-6">
                    <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{isRTL ? "المبلغ الإجمالي" : "Total Amount"}</span>
                    <span className="text-3xl font-black text-blue-600" itemProp="totalPaymentDue">{CURRENCY} {total.toFixed(2)}</span>
                  </div>

                  {/* Promo Section inside Summary */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder={isRTL ? "رمز ترويجي" : "Promo Code"}
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-grow p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                        aria-label={isRTL ? "أدخل الرمز الترويجي" : "Enter promo code"}
                      />
                      <button 
                        className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-blue-600 transition-colors"
                        aria-label={isRTL ? "تطبيق الرمز الترويجي" : "Apply promo code"}
                      >
                        {isRTL ? "تطبيق" : "Apply"}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => user ? navigate("/store/checkout") : setShowAuthModal(true)}
                    className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:translate-y-[-2px] active:scale-95"
                    aria-label={isRTL ? "الدفع الآن" : "Proceed to checkout"}
                  >
                    {isRTL ? "الدفع الآن" : "Checkout Now"}
                  </button>
                  
                  <p className="mt-4 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    {isRTL ? "100% مدفوعات آمنة" : "100% Secure Payments"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            onLoginSuccess={() => {
              setShowAuthModal(false);
              navigate("/store/checkout");
            }}
          />
        </div>
      )}
    </>
  );
};

export default CartPage;
