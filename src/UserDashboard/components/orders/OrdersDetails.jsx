import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api/api";
import { BACKEND_URL } from "../../../api/config";
import Loader from "../common/Loader";
import StatusBadge from "../common/StatusBadge";
import { formatCurrency, formatDate } from "../../utils/format";
import { useLanguage } from "../../../context/LanguageContext";
import {
  IoArrowBack, IoArrowForward, IoReceiptOutline, IoLocationOutline,
  IoInformationCircleOutline, IoCloudDownloadOutline, IoTimeOutline
} from "react-icons/io5";

const VAT_RATE = 0.15;

const OrderDetails = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requestingInvoice, setRequestingInvoice] = useState(false);
  const [invoiceStatus, setInvoiceStatus] = useState("none");
  const [invoiceRequest, setInvoiceRequest] = useState(null);
  const [notification, setNotification] = useState(null);

  const content = {
    en: {
      title: "Order Details",
      loadingError: "Failed to load order details.",
      backToOrders: "Back to Orders",
      orderInfo: "Order Information",
      orderNumber: "Order Number",
      orderDate: "Date Placed",
      status: "Order Status",
      paymentMethod: "Payment",
      invoice: "Invoice",
      downloadInvoice: "Download PDF",
      invoicePending: "Request Sent",
      requestInvoice: "Request Invoice",
      requesting: "Processing...",
      products: "Items Ordered",
      product: "Product",
      quantity: "Qty",
      unitPrice: "Price",
      total: "Total",
      subtotal: "Subtotal",
      vat: "VAT (15%)",
      shipping: "Shipping",
      grandTotal: "Total Amount",
      shippingAddress: "Shipping Address",
      currency: "SAR",
      notifications: {
        invoiceRequestSent: "Request sent successfully!",
        invoiceRequestFailed: "Failed to send request.",
        unauthorized: "Please login again.",
        invoiceNotFound: "PDF not ready yet.",
        downloadFailed: "Download failed.",
        downloadSuccess: "Downloaded successfully!"
      }
    },
    ar: {
      title: "تفاصيل الطلب",
      loadingError: "فشل تحميل تفاصيل الطلب.",
      backToOrders: "العودة للطلبات",
      orderInfo: "معلومات الطلب",
      orderNumber: "رقم الطلب",
      orderDate: "تاريخ الطلب",
      status: "حالة الطلب",
      paymentMethod: "طريقة الدفع",
      invoice: "الفاتورة",
      downloadInvoice: "تحميل PDF",
      invoicePending: "تم إرسال الطلب",
      requestInvoice: "طلب فاتورة",
      requesting: "جاري المعالجة...",
      products: "الأصناف المطلوبة",
      product: "المنتج",
      quantity: "الكمية",
      unitPrice: "السعر",
      total: "الإجمالي",
      subtotal: "المجموع الفرعي",
      vat: "الضريبة (15%)",
      shipping: "الشحن",
      grandTotal: "المجموع الكلي",
      shippingAddress: "عنوان الشحن",
      currency: "ريال",
      notifications: {
        invoiceRequestSent: "تم إرسال الطلب بنجاح!",
        invoiceRequestFailed: "فشل إرسال الطلب.",
        unauthorized: "يرجى تسجيل الدخول مجدداً.",
        invoiceNotFound: "الفاتورة ليست جاهزة بعد.",
        downloadFailed: "فشل التحميل.",
        downloadSuccess: "تم التحميل بنجاح!"
      }
    }
  };

  const currentContent = content[lang];

  const fetchOrder = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.get(`/dashboard/orders/${id}`);
      const data = response.data;
      if (!data || !data.orderId) throw new Error("Invalid response");

      const subtotal = data.items.reduce((sum, i) => sum + Number(i.total), 0);
      const vat = subtotal * VAT_RATE;
      const shipping = 0;

      setOrder({
        id: data.orderId,
        order_number: id,
        status: data.status || "confirmed",
        payment_status: data.payments?.[0]?.status || "unknown",
        payment_method: data.payments?.[0]?.payment_method || "-",
        created_at: data.payments?.[0]?.transaction_date || data.createdAt,
        subtotal,
        vat,
        shipping,
        total: subtotal + vat + shipping,
        items: data.items.map((item, index) => ({
          item_id: index + 1,
          product_name: item.productName,
          unit_price: item.price,
          quantity: item.quantity,
          total_price: item.total,
        })),
        shipping_address: data.shippingAddress,
      });
      await fetchInvoiceRequest(data.orderId);
    } catch (err) {
      setError(currentContent.loadingError);
    } finally {
      setLoading(false);
    }
  };

  const fetchInvoiceRequest = async (orderId) => {
    try {
      const res = await api.get(`/invoice-request/order/${orderId}`);
      if (res.data.success && res.data.data) {
        setInvoiceRequest(res.data.data);
        setInvoiceStatus(res.data.data.status);
      }
    } catch (err) { setInvoiceStatus("none"); }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message, visible: true });
    setTimeout(() => setNotification(prev => ({ ...prev, visible: false })), 3000);
  };

  const handleRequestInvoice = async () => {
    if (!order) return;
    setRequestingInvoice(true);
    try {
      await api.post("/invoice-request/request", { order_id: order.id });
      setInvoiceStatus("pending");
      showNotification("success", currentContent.notifications.invoiceRequestSent);
    } catch (err) {
      showNotification("error", currentContent.notifications.invoiceRequestFailed);
    } finally { setRequestingInvoice(false); }
  };

  const handleDownloadInvoice = async () => {
    if (!invoiceRequest) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BACKEND_URL}/api/v1/invoice-request/download/${invoiceRequest.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Invoice-${order.order_number}.pdf`;
      a.click();
      showNotification("success", currentContent.notifications.downloadSuccess);
    } catch (err) {
      showNotification("error", currentContent.notifications.downloadFailed);
    }
  };

  useEffect(() => { fetchOrder(); }, [id]);

  if (loading) return <Loader lang={lang} />;
  if (error) return <div className="p-20 text-center text-red-500 font-bold">{error}</div>;
  if (!order) return null;

  return (
    <div className="max-w-6xl mx-auto pb-20 px-4" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Notifications */}
      {notification?.visible && (
        <div className={`fixed top-10 ${isArabic ? 'left-10' : 'right-10'} z-[100] bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce`}>
          <div className={notification.type === 'success' ? 'text-green-400' : 'text-red-400'}>
            <IoInformationCircleOutline size={24} />
          </div>
          <span className="font-bold text-sm">{notification.message}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4 hover:gap-3 transition-all"
          >
            {isArabic ? <IoArrowForward /> : <IoArrowBack />} {currentContent.backToOrders}
          </button>
          <h1 className="text-3xl font-black text-gray-900">{currentContent.title}</h1>
        </div>

        <div className="flex items-center gap-3">
          {invoiceStatus === "sent" ? (
            <button onClick={handleDownloadInvoice} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
              <IoCloudDownloadOutline size={20} /> {currentContent.downloadInvoice}
            </button>
          ) : (
            <button
              onClick={handleRequestInvoice}
              disabled={invoiceStatus === 'pending' || requestingInvoice}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${invoiceStatus === 'pending' ? 'bg-gray-100 text-gray-400' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
            >
              {invoiceStatus === 'pending' ? <IoTimeOutline size={20} /> : <IoReceiptOutline size={20} />}
              {invoiceStatus === 'pending' ? currentContent.invoicePending : currentContent.requestInvoice}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info Cards */}
        <div className="lg:col-span-2 space-y-8">

          {/* Order Info Card */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><IoInformationCircleOutline size={20} /></div>
              <h3 className="font-black text-lg text-gray-900">{currentContent.orderInfo}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">{currentContent.orderNumber}</p>
                <p className="font-bold text-gray-900">#{order.order_number}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">{currentContent.orderDate}</p>
                <p className="font-bold text-gray-900">{formatDate(order.created_at)}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">{currentContent.status}</p>
                <StatusBadge status={order.status} lang={lang} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">{currentContent.paymentMethod}</p>
                <p className="font-bold text-gray-900 uppercase">{order.payment_method}</p>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="p-8 border-b border-gray-50">
              <h3 className="font-black text-lg text-gray-900">{currentContent.products}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-400 uppercase text-[10px] tracking-widest font-black">
                    <th className="px-8 py-4 text-start">{currentContent.product}</th>
                    <th className="px-4 py-4 text-center">{currentContent.quantity}</th>
                    <th className="px-4 py-4 text-center">{currentContent.unitPrice}</th>
                    <th className="px-8 py-4 text-end">{currentContent.total}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {order.items.map((item) => (
                    <tr key={item.item_id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-5 font-bold text-gray-900">{item.product_name}</td>
                      <td className="px-4 py-5 text-center">
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg font-black text-xs">x{item.quantity}</span>
                      </td>
                      <td className="px-4 py-5 text-center text-gray-500">{formatCurrency(item.unit_price)}</td>
                      <td className="px-8 py-5 text-end font-black text-gray-900">{formatCurrency(item.total_price)} {currentContent.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Address & Summary */}
        <div className="space-y-8">
          {/* Shipping Address Card */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-blue-600">
              <IoLocationOutline size={24} />
              <h3 className="font-black text-lg text-gray-900">{currentContent.shippingAddress}</h3>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed font-medium">
              <p className="text-gray-900 font-bold mb-2">{order.shipping_address?.full_name}</p>
              <p>{order.shipping_address?.address_line1}</p>
              {order.shipping_address?.address_line2 && <p>{order.shipping_address?.address_line2}</p>}
              <p>{order.shipping_address?.city}, {order.shipping_address?.state}</p>
              <p>{order.shipping_address?.country} - {order.shipping_address?.postal_code}</p>
              <p className="mt-4 pt-4 border-t border-gray-50 text-blue-600 font-bold">{order.shipping_address?.phone}</p>
            </div>
          </div>

          {/* Totals Card */}
          <div className="bg-gray-900 text-white rounded-[2.5rem] p-8 shadow-xl">
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400 font-bold text-sm uppercase tracking-widest">
                <span>{currentContent.subtotal}</span>
                <span className="text-white">{formatCurrency(order.subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-400 font-bold text-sm uppercase tracking-widest">
                <span>{currentContent.vat}</span>
                <span className="text-white">{formatCurrency(order.vat)}</span>
              </div>
              <div className="flex justify-between text-gray-400 font-bold text-sm uppercase tracking-widest">
                <span>{currentContent.shipping}</span>
                <span className="text-green-400">{order.shipping === 0 ? (isArabic ? 'مجاني' : 'FREE') : formatCurrency(order.shipping)}</span>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 flex justify-between items-end">
              <p className="text-[10px] font-black uppercase tracking-tighter text-gray-500 mb-1">{currentContent.grandTotal}</p>
              <p className="text-3xl font-black text-blue-500">{formatCurrency(order.total)} <span className="text-xs">{currentContent.currency}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;