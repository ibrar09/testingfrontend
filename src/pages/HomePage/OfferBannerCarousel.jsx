// // src/pages/HomePage/OfferBannerCarousel.jsx
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // ✅ CORRECT IMPORTS: Import modules from 'swiper/modules'
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// import axios from "axios";

// const OfferBannerCarousel = () => {
//   const [banners, setBanners] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchBanners = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}/banners`);
//       // Assuming the data might be nested under 'data' or be the response root
//       const data = res.data.data || res.data;
//       setBanners(data);
//     } catch (err) {
//       console.error("Failed to fetch banners:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBanners();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         Loading banners...
//       </div>
//     );
//   }

//   if (!banners.length) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         No banners found.
//       </div>
//     );
//   }

//   return (
//     <section className="w-full relative my-8">
//       <Swiper
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]} // register modules here
//         className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
//       >
//         {banners.map((banner) => (
//           <SwiperSlide key={banner.id}>
//             <div className="relative w-full h-full">
//               <img
//                 src={`${BACKEND_URL}${banner.image_url}`}
//                 alt={banner.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-4">
//                 <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
//                   {banner.title}
//                 </h2>
//                 {banner.subtitle && (
//                   <p className="text-white text-sm sm:text-base md:text-lg">
//                     {banner.subtitle}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default OfferBannerCarousel;