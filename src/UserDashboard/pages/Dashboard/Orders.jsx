// import React, { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import Loader from "../../components/common/Loader";
// import { getUserOrders } from "../../api/ordersApi";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       const response = await getUserOrders(); // Your API call
//       setOrders(response || []);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 15000);
//     return () => clearInterval(interval);
//   }, []);

//   // Filter orders by ID
//   const filteredOrders = orders.filter((order) =>
//     order.order_id?.toString().includes(searchTerm)
//   );

//   if (loading) return <Loader />;

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Header + Search */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold text-gray-800">My Orders</h1>
//         <div className="flex items-center bg-white shadow-sm border rounded-lg px-3 py-2 w-72">
//           <FiSearch className="text-gray-500 mr-2" />
//           <input
//             type="text"
//             placeholder="Search by order ID"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full outline-none"
//           />
//         </div>
//       </div>

//       {filteredOrders.length === 0 ? (
//         <p className="text-gray-500 text-center">No orders found.</p>
//       ) : (
//         filteredOrders.map((order) => (
//           <div
//             key={order.order_id}
//             className="bg-white rounded-lg shadow mb-6 p-4 space-y-4"
//           >
//             {/* Order Header */}
//             <div className="flex justify-between items-center border-b pb-2">
//               <div>
//                 <h2 className="font-semibold text-lg">
//                   Order #{order.order_id}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   Placed on: {new Date(order.created_at).toLocaleDateString()}
//                 </p>
//               </div>
//               <span
//                 className={`px-3 py-1 rounded-full text-sm font-medium ${
//                   order.status === "Delivered"
//                     ? "bg-green-100 text-green-700"
//                     : order.status === "In Transit"
//                     ? "bg-blue-100 text-blue-700"
//                     : order.status === "Cancelled"
//                     ? "bg-red-100 text-red-700"
//                     : "bg-yellow-100 text-yellow-700"
//                 }`}
//               >
//                 {order.status || "Pending"}
//               </span>
//             </div>

//             {/* Shipping Info */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-2">
//               <div>
//                 <h3 className="font-semibold text-gray-700 mb-1">Shipping Info</h3>
//                 <p>{order.shipping?.name}</p>
//                 <p>{order.shipping?.address}</p>
//                 <p>{order.shipping?.phone}</p>
//                 <p>{order.shipping?.email}</p>
//                 <p>Method: {order.shipping?.method}</p>
//                 {order.shipping?.tracking_link && (
//                   <a
//                     href={order.shipping.tracking_link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-blue-600 hover:underline text-sm"
//                   >
//                     Track Package
//                   </a>
//                 )}
//               </div>

//               {/* Payment Info */}
//               <div>
//                 <h3 className="font-semibold text-gray-700 mb-1">Payment Info</h3>
//                 <p>Method: {order.payment?.method}</p>
//                 <p>Status: {order.payment?.status}</p>
//                 <p>Subtotal: {order.payment?.subtotal} SAR</p>
//                 {order.payment?.discount && <p>Discount: {order.payment.discount} SAR</p>}
//                 {order.payment?.tax && <p>Tax: {order.payment.tax} SAR</p>}
//                 {order.payment?.delivery_charges && (
//                   <p>Delivery Charges: {order.payment.delivery_charges} SAR</p>
//                 )}
//                 <p className="font-semibold">Total: {order.payment?.total} SAR</p>
//               </div>
//             </div>

//             {/* Items */}
//             <div>
//               <h3 className="font-semibold text-gray-700 mb-2">Items</h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse">
//                   <thead className="bg-gray-100 text-gray-700">
//                     <tr>
//                       <th className="p-2 border-b">Image</th>
//                       <th className="p-2 border-b">Product</th>
//                       <th className="p-2 border-b">Variant</th>
//                       <th className="p-2 border-b">Quantity</th>
//                       <th className="p-2 border-b">Price</th>
//                       <th className="p-2 border-b">Total</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {order.items?.map((item, index) => (
//                       <tr key={index} className="border-b hover:bg-gray-50">
//                         <td className="p-2">
//                           <img
//                             src={item.image}
//                             alt={item.name}
//                             className="w-12 h-12 object-cover rounded"
//                           />
//                         </td>
//                         <td className="p-2">{item.name}</td>
//                         <td className="p-2">{item.variant || "-"}</td>
//                         <td className="p-2">{item.quantity}</td>
//                         <td className="p-2">{item.price} SAR</td>
//                         <td className="p-2">{item.total} SAR</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Notes */}
//             {order.notes && (
//               <div>
//                 <h3 className="font-semibold text-gray-700 mb-1">Notes</h3>
//                 <p>{order.notes}</p>
//               </div>
//             )}

//             {/* Actions */}
//             <div className="flex justify-end space-x-4">
//               <Link
//                 to={`/dashboard/order/${order.order_id}`}
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 View Details
//               </Link>
//               {order.shipping?.tracking_link && (
//                 <a
//                   href={order.shipping.tracking_link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-green-600 hover:underline font-medium"
//                 >
//                   Track Package
//                 </a>
//               )}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Orders;
