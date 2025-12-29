//         console.error("Error fetching payments:", err);
//         setError("Failed to load payment history.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPayments();
//   }, []);

//   if (loading)
//     return <p className="p-6 text-center text-gray-500">Loading payments...</p>;

//   if (error)
//     return (
//       <div className="p-6 text-center text-red-500">
//         <IoAlertCircleOutline className="inline-block mr-2 text-xl" />
//         {error}
//       </div>
//     );

//   if (!payments || payments.length === 0)
//     return (
//       <div className="p-6 text-center text-gray-400">
//         <IoCashOutline className="inline-block mb-1 text-2xl" />
//         <p>No payment history found.</p>
//       </div>
//     );

//   return (
//     <div className="p-6">
//       <h2 className="mb-4 text-2xl font-semibold text-gray-700">💳 Payment History</h2>
//       <div className="overflow-x-auto shadow rounded-lg border border-gray-100">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr className="bg-gray-50 text-sm text-gray-700 uppercase">
//               <th className="px-4 py-3 text-left">#</th>
//               <th className="px-4 py-3 text-left">Order Number</th>
//               <th className="px-4 py-3 text-left">Method</th>
//               <th className="px-4 py-3 text-left">Amount</th>
//               <th className="px-4 py-3 text-left">Status</th>
//               <th className="px-4 py-3 text-left">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((p, index) => (
//               <tr key={p.id} className="border-t text-sm hover:bg-gray-50 transition">
//                 <td className="px-4 py-2 text-gray-500">{index + 1}</td>
//                 <td className="px-4 py-2 font-medium text-gray-700">{p.order?.order_number || "-"}</td>
//                 <td className="px-4 py-2 capitalize text-gray-600">{p.payment_method || "-"}</td>
//                 <td className="px-4 py-2 text-gray-700">
//                   SAR {p.amount ? Number(p.amount).toFixed(2) : "-"}
//                 </td>
//                 <td
//                   className={`px-4 py-2 font-semibold ${
//                     p.status === "successful"
//                       ? "text-green-600"
//                       : p.status === "failed"
//                       ? "text-red-500"
//                       : "text-yellow-500"
//                   }`}
//                 >
//                   {p.status || "-"}
//                 </td>
//                 <td className="px-4 py-2 text-gray-500">
//                   {p.transaction_date ? new Date(p.transaction_date).toLocaleDateString() : "-"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
