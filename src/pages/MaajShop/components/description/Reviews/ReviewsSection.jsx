import React, { useEffect, useState, useMemo } from "react";
import api from "../../../../../api/api";
import {
  IoStar,
  IoStarOutline,
  IoPersonCircleOutline,
  IoPencilOutline,
  IoLockClosedOutline,
  IoAlertCircleOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";
import { useLanguage } from "../../../../../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const DUMMY_REVIEWS = [
  { id: "d1", rating: 5, review_text: "Excellent quality and fast shipping!", createdAt: new Date(), reviewer_name: "Ahmad M.", dummy: true },
  { id: "d2", rating: 4, review_text: "Very good product, matches the description.", createdAt: new Date(), reviewer_name: "Sarah K.", dummy: true },
];

const ReviewsSection = ({ productId }) => {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";
  
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [canReview, setCanReview] = useState(false);
  const [checkingPurchase, setCheckingPurchase] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });

  useEffect(() => {
    if (!productId) return;
    const fetchReviews = async () => {
      try {
        const res = await api.get(`/product-reviews/product/${productId}`);
        setReviews(res.data.data || []);
      } catch (err) {
        setError(isArabic ? "تعذر تحميل التقييمات" : "Unable to load reviews.");
      } finally { setLoading(false); }
    };
    fetchReviews();
  }, [productId, isArabic]);

  useEffect(() => {
    if (!productId) return;
    const checkPurchase = async () => {
      try {
        const res = await api.get(`/orders/has-purchased/${productId}`);
        setCanReview(res.data.purchased === true);
      } catch { setCanReview(false); }
      finally { setCheckingPurchase(false); }
    };
    checkPurchase();
  }, [productId]);

  const displayedReviews = useMemo(() => {
    if (reviews.length >= 2) return reviews;
    return [...reviews, ...DUMMY_REVIEWS.slice(0, 2 - reviews.length)];
  }, [reviews]);

  const avgRating = displayedReviews.length > 0
    ? (displayedReviews.reduce((sum, r) => sum + r.rating, 0) / displayedReviews.length).toFixed(1)
    : "5.0";

  const renderStars = (rating, editable = false, onChange) => (
    <div className="flex gap-0.5 text-amber-400">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          disabled={!editable}
          onClick={() => editable && onChange(i)}
          className={`${editable ? "hover:scale-125 transition-transform" : "cursor-default"}`}
        >
          {i <= rating ? <IoStar size={editable ? 24 : 16} /> : <IoStarOutline size={editable ? 24 : 16} />}
        </button>
      ))}
    </div>
  );

  const handleSubmitReview = async () => {
    if (!newReview.rating || !newReview.comment.trim()) {
      setError(isArabic ? "يرجى كتابة تعليق واختيار تقييم" : "Please provide rating and comment.");
      return;
    }
    try {
      setSubmitting(true);
      const res = await api.post("/product-reviews", {
        product_id: productId,
        rating: newReview.rating,
        review_text: newReview.comment,
      });
      setReviews([res.data.data, ...reviews]);
      setShowAddForm(false);
      setNewReview({ rating: 0, comment: "" });
    } catch (err) {
      setError(isArabic ? "يجب تسجيل الدخول وتقييم منتج تم شراؤه" : "Login required and product must be purchased.");
    } finally { setSubmitting(false); }
  };

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="flex flex-col lg:flex-row gap-8 mt-12 px-2">
      
      {/* --- Left: Rating Summary --- */}
      <div className="w-full lg:w-[350px] space-y-6">
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center">
          <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
            {isArabic ? "إجمالي التقييمات" : "Overall Rating"}
          </h3>
          <div className="text-6xl font-black text-blue-900 mb-2">{avgRating}</div>
          <div className="flex justify-center mb-4">{renderStars(Math.round(avgRating))}</div>
          <p className="text-xs text-gray-400 font-medium">
            {isArabic ? `بناءً على ${displayedReviews.length} تقييم` : `Based on ${displayedReviews.length} reviews`}
          </p>
          
          <div className="mt-8">
            {checkingPurchase ? (
              <div className="h-12 bg-gray-50 animate-pulse rounded-xl" />
            ) : canReview ? (
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="w-full h-12 bg-blue-600 hover:bg-blue-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-100"
              >
                <IoPencilOutline size={18} />
                {showAddForm ? (isArabic ? "إلغاء" : "Cancel") : (isArabic ? "اكتب تقييمك" : "Write a Review")}
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 border border-dashed border-gray-200 rounded-xl text-[11px] font-bold text-gray-400 uppercase">
                <IoLockClosedOutline />
                {isArabic ? "اشترِ المنتج للتقييم" : "Purchase to Review"}
              </div>
            )}
          </div>
        </div>

        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold flex gap-2">
            <IoAlertCircleOutline size={16} /> {error}
          </motion.div>
        )}
      </div>

      {/* --- Right: Reviews List --- */}
      <div className="flex-1 space-y-6">
        <AnimatePresence>
          {showAddForm && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100 mb-8"
            >
              <h4 className="font-black text-blue-900 mb-4">{isArabic ? "ما هو رأيك؟" : "What is your opinion?"}</h4>
              <div className="mb-4">{renderStars(newReview.rating, true, (v) => setNewReview({ ...newReview, rating: v }))}</div>
              <textarea
                className="w-full p-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                rows="3"
                placeholder={isArabic ? "اكتب تجربتك هنا..." : "Share your experience..."}
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
              <button
                disabled={submitting}
                onClick={handleSubmitReview}
                className="mt-4 px-8 py-3 bg-blue-900 text-white rounded-xl font-black text-sm hover:bg-black transition-colors disabled:opacity-50"
              >
                {submitting ? (isArabic ? "جارٍ الإرسال..." : "Submitting...") : (isArabic ? "إرسال التقييم" : "Post Review")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          {displayedReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <IoPersonCircleOutline size={30} />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-black text-sm text-gray-900">{review.reviewer_name || "Verified User"}</p>
                      <IoCheckmarkCircle className="text-blue-500" size={14} />
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                      {new Date(review.createdAt || review.created_at).toLocaleDateString(isArabic ? 'ar-EG' : 'en-US')}
                    </p>
                  </div>
                </div>
                {renderStars(review.rating)}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">"{review.review_text}"</p>
              {review.dummy && (
                <span className="inline-block mt-3 px-2 py-0.5 bg-gray-100 text-[9px] font-bold text-gray-400 rounded-md uppercase">
                   {isArabic ? "تقييم عينة" : "Sample Review"}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;