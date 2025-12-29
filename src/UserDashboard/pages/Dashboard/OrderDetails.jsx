// // src/pages/Dashboard/OrderDetails.jsx
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import Loader from "../../components/common/Loader";
// import StatusBadge from "../../components/common/StatusBadge";
// import { getOrderById } from "../../api/ordersApi";

// const OrderDetails = () => {
//   const { id } = useParams();
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       setLoading(true);
//       try {
//         let data = await getOrderById(id);

//         // If API wraps data inside { success, data }
//         if (data?.data) data = data.data;

//         // Fallback to empty object
//         setOrder(data || {});
//       } catch (err) {
//         console.error("Error fetching order details:", err);
//         setOrder({});
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrder();
//   }, [id]);

//   if (loading) return <Loader />;

//   if (!order || Object.keys(order).length === 0)
//     return (
//       <div className="p-6">
//         <p className="text-gray-500">Order not found.</p>
//       </div>
//     );

//   const items = order.OrderItems || order.items || [];
//   const totalAmount = items.reduce((sum, item) => {
//     const price = item.price || item.Product?.price || 0;
//     const qty = item.quantity || item.qty || 1;
//     return sum + price * qty;
//   }, 0);

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-semibold text-gray-900">Order Details</h1>

//       {/* Order Summary */}
//       <div className="bg-white shadow rounded-lg p-6">
//         <div className="flex justify-between items-center mb-4">
//           <span className="font-semibold text-gray-700">
//             Order #{order.order_number || `ORD-${order.id}`}
//           </span>
//           <StatusBadge status={order.status} />
//         </div>
//         <p className="text-gray-600 mb-1">
//           Order Date: {order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A"}
//         </p>
//         <p className="text-gray-600 mb-1">
//           Payment Status:{" "}
//           <StatusBadge status={order.payment_status || order.Payment?.status || "pending"} />
//         </p>
//         <p className="text-gray-600">
//           Payment Method: {order.payment_method || order.Payment?.payment_method || "N/A"}
//         </p>
//       </div>

//       {/* Shipping Address */}
//       {order.address || order.UserAddress ? (
//         <div className="bg-white shadow rounded-lg p-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4">Shipping Address</h2>
//           <p>{order.address?.name || order.UserAddress?.name}</p>
//           <p>{order.address?.phone || order.UserAddress?.phone}</p>
//           <p>
//             {order.address?.addressLine1 || order.UserAddress?.addressLine1},{" "}
//             {order.address?.addressLine2 || order.UserAddress?.addressLine2}
//           </p>
//           <p>
//             {order.address?.city || order.UserAddress?.city},{" "}
//             {order.address?.postalCode || order.UserAddress?.postalCode}
//           </p>
//           <p>{order.address?.country || order.UserAddress?.country}</p>
//         </div>
//       ) : null}

//       {/* Items */}
//       <div className="bg-white shadow rounded-lg p-6">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Items</h2>
//         <div className="space-y-4">
//           {items.length > 0 ? (
//             items.map((item) => (
//               <div key={item.id} className="flex justify-between items-center border-b pb-2">
//                 <div>
//                   <p className="font-medium">{item.Product?.name || item.productName || "Unknown Product"}</p>
//                   {item.ProductVariant && (
//                     <p className="text-sm text-gray-500">Variant: {item.ProductVariant.name}</p>
//                   )}
//                   <p className="text-sm text-gray-500">Qty: {item.quantity || item.qty || 1}</p>
//                 </div>
//                 <span className="font-medium">
//                   SAR {((item.price || item.Product?.price || 0) * (item.quantity || item.qty || 1)).toFixed(2)}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-400">No items found.</p>
//           )}
//         </div>
//         <div className="flex justify-between font-semibold text-gray-900 mt-4">
//           <span>Total</span>
//           <span>SAR {totalAmount.toFixed(2)}</span>
//         </div>
//       </div>

//       <Link to="/dashboard/orders" className="inline-block mt-2 text-blue-600 font-medium hover:underline">
//         &larr; Back to Orders
//       </Link>
//     </div>
//   );
// };

// export default OrderDetails;
