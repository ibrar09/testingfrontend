import React, { useEffect, useState } from "react";
import { 
  IoWalletOutline, 
  IoAlertCircleOutline, 
  IoCardOutline, 
  IoCashOutline, 
  IoLogoApple, 
  IoReceiptOutline,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoTimeOutline
} from "react-icons/io5";
import api from "../../../api/api";
import { useLanguage } from "../../../context/LanguageContext";
import Loader from "../common/Loader";

export default function UserPayments() {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';
  
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const content = {
    en: {
      title: "Transaction History",
      loading: "Updating your records...",
      noLogin: "Please log in to view payments.",
      loadError: "We couldn't load your history right now.",
      noPayments: "No transactions found yet.",
      headers: {
        order: "Order",
        method: "Method",
        amount: "Amount",
        status: "Status",
        date: "Date"
      },
      methods: {
        'Credit Card': 'Credit Card',
        'Debit Card': 'Debit Card',
        'Bank Transfer': 'Bank Transfer',
        'Cash': 'Cash',
        'Apple Pay': 'Apple Pay',
        'Mada': 'Mada',
        'PayPal': 'PayPal'
      },
      status: {
        'successful': 'Successful',
        'failed': 'Failed',
        'pending': 'Pending',
        'refunded': 'Refunded',
        'cancelled': 'Cancelled'
      },
      currency: "SAR"
    },
    ar: {
      title: "سجل المعاملات",
      loading: "جاري تحديث سجلاتك...",
      noLogin: "يرجى تسجيل الدخول لعرض المدفوعات.",
      loadError: "تعذر تحميل سجل المدفوعات حالياً.",
      noPayments: "لم يتم العثور على عمليات دفع حتى الآن.",
      headers: {
        order: "الطلب",
        method: "الطريقة",
        amount: "المبلغ",
        status: "الحالة",
        date: "التاريخ"
      },
      methods: {
        'Credit Card': 'بطاقة ائتمان',
        'Debit Card': 'بطاقة خصم',
        'Bank Transfer': 'تحويل بنكي',
        'Cash': 'نقداً',
        'Apple Pay': 'أبل باي',
        'Mada': 'مدى',
        'PayPal': 'باي بال'
      },
      status: {
        'successful': 'ناجح',
        'failed': 'فشل',
        'pending': 'قيد الانتظار',
        'refunded': 'مسترد',
        'cancelled': 'ملغي'
      },
      currency: "ريال"
    }
  };

  const currentContent = content[lang];

  const getMethodIcon = (method) => {
    if (method?.includes('Apple')) return <IoLogoApple className="text-black" />;
    if (method?.includes('Cash')) return <IoCashOutline className="text-green-600" />;
    return <IoCardOutline className="text-blue-600" />;
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'successful': return { bg: 'bg-green-50', text: 'text-green-700', icon: <IoCheckmarkCircle /> };
      case 'failed': return { bg: 'bg-red-50', text: 'text-red-700', icon: <IoCloseCircle /> };
      default: return { bg: 'bg-amber-50', text: 'text-amber-700', icon: <IoTimeOutline /> };
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  };

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) { setError(currentContent.noLogin); return; }

        const res = await api.get("/dashboard/payments");
        setPayments(res.data.data || []);
      } catch (err) {
        setError(currentContent.loadError);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, [lang]);

  if (loading) return <Loader lang={lang} />;

  return (
    /* ADDED: pt-6 (Mobile) and lg:pt-0 (Desktop). 
       Since DashboardLayout handles the main 20rem/80px padding, 
       this ensures the title doesn't touch the mobile menu bar.
    */
    <div className="max-w-6xl mx-auto pb-20 pt-6 lg:pt-0" dir={isArabic ? 'rtl' : 'ltr'}>
      
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-10 px-2 lg:px-0">
        <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-100">
          <IoWalletOutline size={28} />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
          {currentContent.title}
        </h2>
      </div>

      {error ? (
        <div className="bg-red-50 p-6 rounded-[2rem] text-center text-red-600 font-bold flex flex-col items-center gap-2 mx-2">
          <IoAlertCircleOutline size={40} />
          {error}
        </div>
      ) : payments.length === 0 ? (
        <div className="bg-white border border-dashed border-gray-200 p-20 rounded-[3rem] text-center text-gray-400 mx-2">
          <IoReceiptOutline size={60} className="mx-auto mb-4 opacity-20" />
          <p className="font-bold">{currentContent.noPayments}</p>
        </div>
      ) : (
        <div className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm mx-2 lg:mx-0">
          
          {/* Desktop Table View */}
          <table className="w-full hidden md:table">
            <thead>
              <tr className="bg-gray-50/50 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50">
                <th className="px-8 py-5 text-start">{currentContent.headers.order}</th>
                <th className="px-8 py-5 text-start">{currentContent.headers.method}</th>
                <th className="px-8 py-5 text-start">{currentContent.headers.date}</th>
                <th className="px-8 py-5 text-start">{currentContent.headers.status}</th>
                <th className="px-8 py-5 text-end">{currentContent.headers.amount}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {payments.map((p) => {
                const style = getStatusStyle(p.status);
                return (
                  <tr key={p.payment_id} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <p className="font-bold text-gray-900">#{p.order_number}</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 font-bold text-gray-600 text-sm">
                        {getMethodIcon(p.method)}
                        {currentContent.methods[p.method] || p.method}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-400 text-sm font-medium">
                      {formatDate(p.date)}
                    </td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-tighter ${style.bg} ${style.text}`}>
                        {style.icon}
                        {currentContent.status[p.status] || p.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-end">
                      <p className="font-black text-gray-900">
                        {Number(p.amount).toFixed(2)} <span className="text-[10px] text-gray-400">{currentContent.currency}</span>
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-gray-50">
            {payments.map((p) => {
              const style = getStatusStyle(p.status);
              return (
                <div key={p.payment_id} className="p-6 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">#{p.order_number}</p>
                    <div className="flex items-center gap-1.5 font-bold text-gray-900">
                      {getMethodIcon(p.method)}
                      <span className="text-sm">{currentContent.methods[p.method] || p.method}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{formatDate(p.date)}</p>
                  </div>
                  <div className="text-end space-y-2">
                    <p className="font-black text-blue-600">
                      {Number(p.amount).toFixed(2)} <span className="text-[9px]">{currentContent.currency}</span>
                    </p>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-tighter ${style.bg} ${style.text}`}>
                      {currentContent.status[p.status] || p.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}