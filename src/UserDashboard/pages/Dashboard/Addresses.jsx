import React, { useEffect, useState } from "react";
import { 
  IoLocationOutline, 
  IoAddOutline, 
  IoPencilOutline, 
  IoTrashOutline, 
  IoCallOutline, 
  IoPersonOutline,
  IoGlobeOutline,
  IoCheckmarkCircle
} from "react-icons/io5";
import api from "../../../api/api";
import { useLanguage } from "../../../context/LanguageContext";
import Loader from "../../components/common/Loader";
import { toast } from "react-hot-toast";

const Addresses = () => {
  const { lang } = useLanguage();
  const isArabic = lang === 'ar';

  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    is_default: false,
  });
  const [editingId, setEditingId] = useState(null);

  const content = {
    en: {
      title: "My Addresses",
      formTitle: editingId ? "Edit Address" : "Add New Address",
      addressList: "Saved Locations",
      defaultLabel: "Default Address",
      buttons: {
        addAddress: "Save Address",
        updateAddress: "Update Address",
        edit: "Edit",
        delete: "Delete",
        setDefault: "Set as default shipping address",
        cancel: "Cancel Edit"
      },
      formFields: {
        full_name: "Recipient Name",
        phone: "Mobile Number",
        address_line1: "Street Name / House No.",
        address_line2: "Apartment, suite, etc. (Optional)",
        city: "City",
        state: "State / Province",
        postal_code: "Postal Code",
        country: "Country"
      },
      messages: {
        loading: "Loading addresses...",
        noAddresses: "No addresses saved yet.",
        addFirst: "Your saved addresses will appear here.",
        successAdd: "Address added successfully!",
        successUpdate: "Address updated successfully!",
        confirmDelete: "Are you sure you want to delete this address?"
      }
    },
    ar: {
      title: "عناويني",
      formTitle: editingId ? "تعديل العنوان" : "إضافة عنوان جديد",
      addressList: "المواقع المحفوظة",
      defaultLabel: "العنوان الافتراضي",
      buttons: {
        addAddress: "حفظ العنوان",
        updateAddress: "تحديث العنوان",
        edit: "تعديل",
        delete: "حذف",
        setDefault: "تعيين كعنوان افتراضي للشحن",
        cancel: "إلغاء التعديل"
      },
      formFields: {
        full_name: "اسم المستلم",
        phone: "رقم الجوال",
        address_line1: "اسم الشارع / رقم المنزل",
        address_line2: "شقة، جناح، إلخ (اختياري)",
        city: "المدينة",
        state: "المنطقة / المحافظة",
        postal_code: "الرمز البريدي",
        country: "الدولة"
      },
      messages: {
        loading: "جاري التحميل...",
        noAddresses: "لا توجد عناوين محفوظة.",
        addFirst: "ستظهر عناوينك المحفوظة هنا.",
        successAdd: "تمت إضافة العنوان بنجاح!",
        successUpdate: "تم تحديث العنوان بنجاح!",
        confirmDelete: "هل أنت متأكد من حذف هذا العنوان؟"
      }
    }
  };

  const currentContent = content[lang];

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const res = await api.get("/user-addresses/me");
      setAddresses(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/user-addresses/${editingId}`, form);
        toast.success(currentContent.messages.successUpdate);
      } else {
        await api.post("/user-addresses/create", form);
        toast.success(currentContent.messages.successAdd);
      }
      resetForm();
      fetchAddresses();
      window.dispatchEvent(new Event("profile-refresh"));
    } catch (err) {
      toast.error("Error saving address");
    }
  };

  const resetForm = () => {
    setForm({
      full_name: "", phone: "", address_line1: "", address_line2: "",
      city: "", state: "", postal_code: "", country: "", is_default: false,
    });
    setEditingId(null);
  };

  const handleEdit = (addr) => {
    setForm(addr);
    setEditingId(addr.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm(currentContent.messages.confirmDelete)) return;
    try {
      await api.delete(`/user-addresses/${id}`);
      fetchAddresses();
      window.dispatchEvent(new Event("profile-refresh"));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading && addresses.length === 0) return <Loader lang={lang} />;

  return (
    <div className="max-w-5xl mx-auto pb-20 pt-6 lg:pt-0 px-4 sm:px-0" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-100">
          <IoLocationOutline size={28} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">{currentContent.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* FORM SIDE (40%) */}
        <div className="lg:col-span-5">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 sticky top-4">
            <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
              <IoAddOutline className="text-blue-600" size={24} />
              {currentContent.formTitle}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="relative">
                  <IoPersonOutline className="absolute top-4 left-4 text-gray-400" />
                  <input
                    type="text" name="full_name"
                    placeholder={currentContent.formFields.full_name}
                    value={form.full_name} onChange={handleChange}
                    className={`w-full bg-gray-50 border-none p-4 ${isArabic ? 'pr-4 pl-12' : 'pl-12'} rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold text-sm`}
                    required
                  />
                </div>

                <div className="relative">
                  <IoCallOutline className="absolute top-4 left-4 text-gray-400" />
                  <input
                    type="text" name="phone"
                    placeholder={currentContent.formFields.phone}
                    value={form.phone} onChange={handleChange}
                    className={`w-full bg-gray-50 border-none p-4 ${isArabic ? 'pr-4 pl-12' : 'pl-12'} rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold text-sm`}
                    required
                  />
                </div>

                <input
                  type="text" name="address_line1"
                  placeholder={currentContent.formFields.address_line1}
                  value={form.address_line1} onChange={handleChange}
                  className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold text-sm"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text" name="city"
                    placeholder={currentContent.formFields.city}
                    value={form.city} onChange={handleChange}
                    className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold text-sm"
                    required
                  />
                  <input
                    type="text" name="country"
                    placeholder={currentContent.formFields.country}
                    value={form.country} onChange={handleChange}
                    className="w-full bg-gray-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold text-sm"
                    required
                  />
                </div>
              </div>

              <label className="flex items-center gap-3 p-2 cursor-pointer group">
                <input
                  type="checkbox" name="is_default"
                  checked={form.is_default} onChange={handleChange}
                  className="w-5 h-5 rounded-lg text-blue-600 border-gray-200 focus:ring-blue-500"
                />
                <span className="text-xs font-bold text-gray-500 group-hover:text-blue-600 transition-colors">
                  {currentContent.buttons.setDefault}
                </span>
              </label>

              <div className="pt-4 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-gray-200 hover:shadow-blue-100"
                >
                  {editingId ? currentContent.buttons.updateAddress : currentContent.buttons.addAddress}
                </button>
                {editingId && (
                  <button
                    type="button" onClick={resetForm}
                    className="px-6 bg-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-red-50 hover:text-red-500 transition-all"
                  >
                    <IoTrashOutline size={20} />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* LIST SIDE (60%) */}
        <div className="lg:col-span-7">
          <h3 className="text-xl font-black text-gray-900 mb-6 px-2">{currentContent.addressList}</h3>
          
          {addresses.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-gray-100 p-16 rounded-[3rem] text-center">
              <IoGlobeOutline size={64} className="mx-auto mb-4 text-gray-100" />
              <p className="font-bold text-gray-400">{currentContent.messages.addFirst}</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {addresses.map((addr) => (
                <div 
                  key={addr.id} 
                  className={`relative bg-white p-6 rounded-[2.5rem] border-2 transition-all group ${
                    addr.is_default ? 'border-blue-600 shadow-xl shadow-blue-50' : 'border-transparent shadow-sm hover:border-gray-100'
                  }`}
                >
                  {addr.is_default && (
                    <div className={`absolute -top-3 ${isArabic ? 'left-8' : 'right-8'} bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg`}>
                      <IoCheckmarkCircle size={14}/> {currentContent.defaultLabel}
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <IoLocationOutline size={24} />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(addr)}
                        className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all"
                      >
                        <IoPencilOutline size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(addr.id)}
                        className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all"
                      >
                        <IoTrashOutline size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-gray-900">{addr.full_name}</h4>
                    <p className="text-gray-500 font-bold text-sm flex items-center gap-2">
                      <IoCallOutline className="text-blue-600" /> {addr.phone}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mt-2 font-medium">
                      {addr.address_line1}, {addr.city} <br />
                      {addr.state && `${addr.state}, `}{addr.country} {addr.postal_code}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Addresses;