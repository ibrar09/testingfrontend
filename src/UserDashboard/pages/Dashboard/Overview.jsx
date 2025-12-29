import React, { useState, useEffect } from "react";
import { 
  FiPackage, FiClock, FiCheckCircle, FiTruck, 
  FiArrowUpRight, FiCreditCard, FiActivity 
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import { useLanguage } from "../../../context/LanguageContext";

const Overview = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Dashboard Overview",
      subtitle: "Welcome back! Here's what's happening with your orders.",
      loading: "Gathering your data...",
      error: "Failed to fetch data",
      stats: {
        totalOrders: "Total Orders",
        pendingPayment: "Pending Payment",
        shippedOrders: "In Transit",
        deliveredOrders: "Delivered"
      },
      tables: {
        recentOrders: "Recent Orders",
        recentPayments: "Recent Payments",
        recentShipments: "Live Shipments",
        noData: {
          orders: "No orders found.",
          payments: "No payment history.",
          shipments: "No active shipments."
        },
        headers: {
          orderNumber: "Order ID",
          date: "Date",
          status: "Status",
          total: "Amount",
          action: "Details",
          paymentNumber: "Payment Ref",
          method: "Method",
          courier: "Carrier",
          trackingNumber: "Tracking",
        },
        currency: "SAR",
        viewAll: "View All"
      },
      statusLabels: {
        'successful': 'Paid',
        'failed': 'Failed',
        'pending': 'Pending',
        'delivered': 'Delivered',
        'shipped': 'Shipped',
        'processing': 'Processing',
        'cancelled': 'Cancelled',
        'refunded': 'Refunded',
        'unpaid': 'Unpaid'
      }
    },
    ar: {
      title: "نظرة عامة",
      subtitle: "أهلاً بك مجدداً! إليك آخر تحديثات طلباتك.",
      loading: "جاري تحميل البيانات...",
      error: "فشل جلب البيانات",
      stats: {
        totalOrders: "إجمالي الطلبات",
        pendingPayment: "في انتظار الدفع",
        shippedOrders: "قيد الشحن",
        deliveredOrders: "تم التوصيل"
      },
      tables: {
        recentOrders: "آخر الطلبات",
        recentPayments: "آخر المدفوعات",
        recentShipments: "الشحنات الحالية",
        noData: {
          orders: "لا توجد طلبات.",
          payments: "لا يوجد سجل مدفوعات.",
          shipments: "لا توجد شحنات نشطة."
        },
        headers: {
          orderNumber: "رقم الطلب",
          date: "التاريخ",
          status: "الحالة",
          total: "المبلغ",
          action: "تفاصيل",
          paymentNumber: "مرجع الدفع",
          method: "الطريقة",
          courier: "الشركة",
          trackingNumber: "التتبع",
        },
        currency: "ر.س",
        viewAll: "عرض الكل"
      },
      statusLabels: {
        'successful': 'تم الدفع',
        'failed': 'فشل',
        'pending': 'قيد الانتظار',
        'delivered': 'تم التوصيل',
        'shipped': 'تم الشحن',
        'processing': 'قيد المعالجة',
        'cancelled': 'ملغي',
        'refunded': 'تم الاسترداد',
        'unpaid': 'غير مدفوع'
      }
    }
  };

  const currentContent = content[lang];

  const translateStatus = (status) => {
    if (!status) return "-";
    const key = status.toLowerCase();
    return currentContent.statusLabels[key] || status;
  };

  const getStatusColor = (status) => {
    const s = status?.toLowerCase();
    if (['successful', 'delivered', 'paid'].includes(s)) return 'bg-green-100 text-green-700';
    if (['pending', 'processing', 'shipped'].includes(s)) return 'bg-blue-100 text-blue-700';
    if (['failed', 'cancelled', 'unpaid'].includes(s)) return 'bg-red-100 text-red-700';
    return 'bg-gray-100 text-gray-700';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [ordersRes, paymentsRes, shipmentsRes] = await Promise.all([
          api.get("/dashboard/orders"),
          api.get("/dashboard/payments"),
          api.get("/dashboard/shipments/my")
        ]);
        setOrders(Array.isArray(ordersRes.data.data) ? ordersRes.data.data.slice(0, 5) : []);
        setPayments(Array.isArray(paymentsRes.data.data) ? paymentsRes.data.data.slice(0, 5) : []);
        setShipments(Array.isArray(shipmentsRes.data.data) ? shipmentsRes.data.data.slice(0, 5) : []);
      } catch (err) {
        setError(currentContent.error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [lang]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 font-bold animate-pulse">{currentContent.loading}</p>
    </div>
  );

  const stats = [
    { title: currentContent.stats.totalOrders, value: orders.length, icon: <FiPackage />, color: "text-blue-600", bg: "bg-blue-50" },
    { title: currentContent.stats.pendingPayment, value: orders.filter(o => o.payment_status === "unpaid").length, icon: <FiClock />, color: "text-amber-600", bg: "bg-amber-50" },
    { title: currentContent.stats.shippedOrders, value: orders.filter(o => o.status === "shipped").length, icon: <FiTruck />, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: currentContent.stats.deliveredOrders, value: orders.filter(o => o.status === "delivered").length, icon: <FiCheckCircle />, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-20 pt-6 lg:pt-0 px-4 sm:px-0" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
          <FiActivity className="text-blue-600" />
          {currentContent.title}
        </h1>
        <p className="text-gray-500 font-medium mt-1">{currentContent.subtitle}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} mb-4`}>
              {React.cloneElement(stat.icon, { size: 24 })}
            </div>
            <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Recent Orders Table */}
        <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h2 className="text-lg font-black text-gray-900">{currentContent.tables.recentOrders}</h2>
            <button onClick={() => navigate('/dashboard/orders')} className="text-blue-600 text-sm font-bold hover:underline">
              {currentContent.tables.viewAll}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50/50 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                <tr>
                  <th className="px-6 py-4 text-start">{currentContent.tables.headers.orderNumber}</th>
                  <th className="px-6 py-4 text-start">{currentContent.tables.headers.status}</th>
                  <th className="px-6 py-4 text-start">{currentContent.tables.headers.total}</th>
                  <th className="px-6 py-4 text-center">{currentContent.tables.headers.action}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {orders.length === 0 ? (
                  <tr><td colSpan="4" className="p-10 text-center text-gray-400 font-bold">{currentContent.tables.noData.orders}</td></tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.order_number} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-black text-gray-900">#{order.order_number}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${getStatusColor(order.status)}`}>
                          {translateStatus(order.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-600">
                        {order.order_total} <span className="text-[10px] opacity-60">{currentContent.tables.currency}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button 
                          onClick={() => navigate(`/dashboard/orders/${order.order_number}`)}
                          className="p-2 bg-gray-100 rounded-xl hover:bg-blue-600 hover:text-white transition-all inline-block"
                        >
                          <FiArrowUpRight size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Payments & Shipments Column */}
        <div className="space-y-8">
           {/* Recent Payments */}
           <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center gap-2">
              <FiCreditCard className="text-blue-600" />
              <h2 className="text-lg font-black text-gray-900">{currentContent.tables.recentPayments}</h2>
            </div>
            <div className="p-2">
              {payments.length === 0 ? (
                <p className="p-10 text-center text-gray-400 font-bold">{currentContent.tables.noData.payments}</p>
              ) : (
                payments.map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-3xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        <FiCreditCard size={20} />
                      </div>
                      <div>
                        <p className="font-black text-gray-900 text-sm">{p.method || 'Online Payment'}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">REF: {p.payment_id || p.id}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="font-black text-gray-900">{p.amount} <span className="text-[10px] opacity-50">{currentContent.tables.currency}</span></p>
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md ${getStatusColor(p.status)}`}>
                        {translateStatus(p.status)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Recent Shipments */}
          <section className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center gap-2">
              <FiTruck className="text-indigo-600" />
              <h2 className="text-lg font-black text-gray-900">{currentContent.tables.recentShipments}</h2>
            </div>
            <div className="p-2">
              {shipments.length === 0 ? (
                <p className="p-10 text-center text-gray-400 font-bold">{currentContent.tables.noData.shipments}</p>
              ) : (
                shipments.map((s) => (
                  <div key={s.shipment_id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-3xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                        <FiPackage size={20} />
                      </div>
                      <div>
                        <p className="font-black text-gray-900 text-sm">{s.courier_name}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Track: {s.tracking_number}</p>
                      </div>
                    </div>
                    <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-full ${getStatusColor(s.status)}`}>
                      {translateStatus(s.status)}
                    </span>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Overview;