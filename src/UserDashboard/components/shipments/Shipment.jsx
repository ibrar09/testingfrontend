import React, { useState, useEffect } from "react";
import api from "../../../api/api";
import Loader from "../common/Loader";
import { 
  IoBusOutline, // Use this for the main shipment icon
  IoNavigateCircleOutline, 
  IoChatboxEllipsesOutline, 
  IoCubeOutline,
  IoCalendarOutline,
  IoBarcodeOutline 
} from "react-icons/io5";
import { useLanguage } from "../../../context/LanguageContext";

const REFRESH_INTERVAL = 10000;

export default function UserShipments() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const content = {
    en: {
      title: "My Shipments",
      loadingError: "Failed to load tracking data.",
      noShipments: "Your shipments will appear here once they are on the way.",
      order: "Order",
      shipmentId: "Shipment ID",
      courier: "Courier",
      trackingNumber: "Tracking Code",
      status: "Status",
      deliveryDate: "Est. Delivery",
      adminComment: "Admin Note",
      trackShipment: "Track Package",
      statusLabels: {
        'delivered': 'Delivered',
        'shipped': 'Shipped',
        'pending': 'Pending',
        'processing': 'Processing',
        'in_transit': 'In Transit',
        'out_for_delivery': 'Out for Delivery',
        'failed': 'Failed',
        'returned': 'Returned'
      },
      notAvailable: "Awaiting Update"
    },
    ar: {
      title: "شحناتي",
      loadingError: "فشل تحميل بيانات التتبع.",
      noShipments: "ستظهر شحناتك هنا بمجرد أن تصبح في الطريق.",
      order: "رقم الطلب",
      shipmentId: "معرف الشحنة",
      courier: "الناقل",
      trackingNumber: "رقم التتبع",
      status: "الحالة",
      deliveryDate: "التوصيل المتوقع",
      adminComment: "ملاحظة المسؤول",
      trackShipment: "تتبع الطرد",
      statusLabels: {
        'delivered': 'تم التوصيل',
        'shipped': 'تم الشحن',
        'pending': 'قيد الانتظار',
        'processing': 'جاري المعالجة',
        'in_transit': 'في الطريق',
        'out_for_delivery': 'خرج للتوصيل',
        'failed': 'فشل',
        'returned': 'مرتجع'
      },
      notAvailable: "في انتظار التحديث"
    }
  };

  const currentContent = content[lang];

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-green-50 text-green-700 border-green-100';
      case 'shipped': case 'in_transit': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'out_for_delivery': return 'bg-purple-50 text-purple-700 border-purple-100';
      case 'failed': return 'bg-red-50 text-red-700 border-red-100';
      default: return 'bg-amber-50 text-amber-700 border-amber-100';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return currentContent.notAvailable;
    return new Date(dateString).toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  const fetchShipments = async () => {
    try {
      const res = await api.get("/dashboard/shipments/my");
      if (res.data.success) setShipments(res.data.data || []);
    } catch (err) {
      setError(currentContent.loadingError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
    const interval = setInterval(fetchShipments, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader lang={lang} />;

  return (
    <div className="max-w-7xl mx-auto pb-10" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="flex items-center gap-4 mb-10 px-4">
        <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg">
          <IoBusOutline size={28} />
        </div>
        <h2 className="text-3xl font-black text-gray-900">{currentContent.title}</h2>
      </div>

      {error ? (
        <div className="mx-4 p-10 bg-red-50 rounded-[2.5rem] text-center text-red-600 font-bold">{error}</div>
      ) : shipments.length === 0 ? (
        <div className="mx-4 p-20 bg-white border border-dashed border-gray-200 rounded-[3rem] text-center text-gray-400">
          <IoCubeOutline size={64} className="mx-auto mb-4 opacity-10" />
          <p className="font-bold max-w-xs mx-auto">{currentContent.noShipments}</p>
        </div>
      ) : (
        <div className="grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {shipments.map((s) => (
            <div
              key={s.shipment_id}
              className="bg-white border border-gray-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Card Header: Order # & Status */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-gray-400 mb-1">{currentContent.order}</p>
                  <p className="font-black text-lg text-gray-900">#{s.order_number || "-"}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border ${getStatusColor(s.status)}`}>
                  {currentContent.statusLabels[s.status] || s.status}
                </span>
              </div>

              {/* Card Content: Icons and Info */}
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-50 text-gray-400 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <IoBarcodeOutline size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{currentContent.trackingNumber}</p>
                    <p className="text-sm font-black text-gray-800">{s.tracking_number || currentContent.notAvailable}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-50 text-gray-400 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <IoNavigateCircleOutline size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{currentContent.courier}</p>
                    <p className="text-sm font-black text-blue-600">{s.courier_name || currentContent.notAvailable}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pb-4">
                  <div className="p-2 bg-gray-50 text-gray-400 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <IoCalendarOutline size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{currentContent.deliveryDate}</p>
                    <p className="text-sm font-black text-gray-800">{formatDate(s.delivery_date)}</p>
                  </div>
                </div>

                {s.admin_comment && (
                  <div className="bg-gray-50 p-4 rounded-2xl flex gap-3 items-start border border-gray-100">
                    <IoChatboxEllipsesOutline className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                    <p className="text-xs font-medium text-gray-600 italic">"{s.admin_comment}"</p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              {s.tracking_number && (
                <a
                  href={s.tracking_url || `https://www.google.com/search?q=${encodeURIComponent(s.tracking_number + " " + (s.courier_name || ""))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-4 bg-gray-900 text-white text-center rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  <IoNavigateCircleOutline size={20} />
                  {currentContent.trackShipment}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}