import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import Loader from "../common/Loader";
import StatusBadge from "../common/StatusBadge";
import EmptyState from "../common/EmptyState";
import { formatCurrency, formatDate } from "../../utils/format";
import { useLanguage } from "../../../context/LanguageContext";
import { IoBagHandleOutline, IoChevronForwardOutline, IoChevronBackOutline, IoCloseCircleOutline } from "react-icons/io5";
import { BACKEND_URL } from "../../../api/config";

const Orders = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const API_URL = BACKEND_URL;


  const content = {
    en: {
      title: "My Orders",
      loadingError: "Failed to load orders. Please try again later.",
      noOrders: "No orders found.",
      orderNum: "Order #",
      date: "Placed on",
      totalItems: "items",
      viewDetails: "View Details",
      cancelOrder: "Cancel",
      cancelConfirm: "Are you sure you want to cancel this order?",
      orderTotal: "Grand Total",
      refundStatus: "Refund",
      refunded: "Refunded",
      pending: "Pending",
      total: "Total",
      currency: "SAR"
    },
    ar: {
      title: "طلباتي",
      loadingError: "فشل تحميل الطلبات. يرجى المحاولة مرة أخرى لاحقًا.",
      noOrders: "لم يتم العثور على طلبات.",
      orderNum: "طلب رقم #",
      date: "تاريخ الطلب",
      totalItems: "عناصر",
      viewDetails: "التفاصيل",
      cancelOrder: "إلغاء",
      cancelConfirm: "هل أنت متأكد أنك تريد إلغاء هذا الطلب؟",
      orderTotal: "الإجمالي النهائي",
      refundStatus: "الاسترداد",
      refunded: "تم الاسترداد",
      pending: "قيد الانتظار",
      total: "الإجمالي",
      currency: "ريال"
    }
  };

  const currentContent = content[lang];

  const fetchOrders = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.get("/dashboard/orders");
      setOrders(response.data.data || []);
    } catch (err) {
      setError(currentContent.loadingError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCancel = async (orderNumber) => {
    if (!window.confirm(currentContent.cancelConfirm)) return;
    try {
      const response = await api.post(`/orders/${orderNumber}/cancel`);
      alert(response.data.message);
      fetchOrders();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  if (loading) return <Loader lang={lang} />;
  if (error) return <div className="text-red-500 py-10 text-center font-bold">{error}</div>;
  if (!orders.length) return <EmptyState message={currentContent.noOrders} lang={lang} />;

  return (
    <div className="max-w-5xl mx-auto pb-10" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-600 rounded-lg text-white">
          <IoBagHandleOutline size={24} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
          {currentContent.title}
        </h2>
      </div>

      <div className="space-y-8">
        {orders.map((order) => {
          const showCancelButton = !["cancelled", "shipped"].includes(order.status);

          return (
            <div
              key={order.order_number}
              className={`bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${order.status === "cancelled" ? "bg-gray-50/50" : ""
                }`}
            >
              {/* Order Top Bar */}
              <div className="bg-gray-50/80 px-6 py-4 flex flex-wrap justify-between items-center gap-4 border-b border-gray-100">
                <div className="flex flex-wrap gap-4 sm:gap-8">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">
                      {currentContent.orderNum}
                    </p>
                    <p className="font-bold text-gray-900 text-sm">{order.order_number}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">
                      {currentContent.date}
                    </p>
                    <p className="font-bold text-gray-900 text-sm">{formatDate(order.created_at)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">
                      {currentContent.orderTotal}
                    </p>
                    <p className="font-black text-blue-600 text-sm">
                      {formatCurrency(order.order_total)} {currentContent.currency}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <StatusBadge status={order.status} lang={lang} />
                </div>
              </div>

              {/* Order Items List */}
              <div className="px-6 py-4">
                <div className="divide-y divide-gray-50">
                  {order.items.map((item) => {
                    const imageSrc = item.product_image?.startsWith("http")
                      ? item.product_image
                      : `${API_URL}${item.product_image}`;

                    return (
                      <div key={item.item_id} className="py-4 flex items-center gap-4 group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                          <img
                            src={imageSrc}
                            alt={item.product_name}
                            className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => (e.target.src = "/no-image.png")}
                          />
                        </div>

                        <div className="flex-grow min-w-0">
                          <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                            {item.product_name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg">
                              x{item.quantity}
                            </span>
                            <span className="text-xs text-gray-400 font-medium">
                              {formatCurrency(item.unit_price)} {currentContent.currency}
                            </span>
                          </div>
                        </div>

                        <div className="text-right hidden sm:block">
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                            {currentContent.total}
                          </p>
                          <p className="font-bold text-gray-900">
                            {formatCurrency(item.total_price)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order Action Footer */}
              <div className="px-6 py-4 bg-white flex justify-between items-center border-t border-gray-50">
                <div className="flex gap-2">
                  {order.status === "cancelled" && (
                    <span className="text-[10px] font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full uppercase">
                      {currentContent.refundStatus}: {order.payments?.[0]?.status === "refunded" ? currentContent.refunded : currentContent.pending}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {showCancelButton && (
                    <button
                      onClick={() => handleCancel(order.order_number)}
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                    >
                      <IoCloseCircleOutline size={16} />
                      {currentContent.cancelOrder}
                    </button>
                  )}
                  <button
                    onClick={() => navigate(`/dashboard/orders/${order.order_number}`)}
                    className="flex items-center gap-1.5 px-5 py-2 bg-blue-600 text-white text-xs font-black rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95"
                  >
                    {currentContent.viewDetails}
                    {isArabic ? <IoChevronBackOutline size={14} /> : <IoChevronForwardOutline size={14} />}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;