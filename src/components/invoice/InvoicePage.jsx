import React, { forwardRef } from "react";

// ✅ Using forwardRef so parent can capture this div for PDF export
const InvoiceGenerator = forwardRef(({ order }, ref) => {
  if (!order) return <p>Loading invoice...</p>;

  const formatCurrency = (amount) =>
    amount ? `${Number(amount).toFixed(2)} SAR` : "0.00 SAR";

  const subtotal = order.subtotal || 0;
  const tax = order.vat || subtotal * 0.15;
  const total = order.total || subtotal + tax + (order.shipping || 0);

  return (
    <div ref={ref} className="min-h-screen bg-gray-100 p-4 sm:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6 sm:p-10 border border-gray-200 print:shadow-none print:border-0 print:p-0">

        {/* Header */}
        <header className="flex justify-between items-start pb-8 border-b-4 border-indigo-600">
          <div>
            <img src="/images/logo.png" alt="Logo" className="h-16 mb-2" />
            <h1 className="text-4xl font-extrabold text-indigo-600 mb-2">INVOICE</h1>
            <p className="text-sm text-gray-500"># {order.order_number}</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-gray-800">{order.company?.name || "Your Company"}</h2>
            <p className="text-sm text-gray-600">{order.company?.address || "Company Address"}</p>
            <p className="text-sm text-gray-600">Email: {order.company?.email || "info@example.com"}</p>
            <p className="text-sm text-gray-600">Phone: {order.company?.phone || "123456789"}</p>
          </div>
        </header>

        {/* Dates & Billing */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-indigo-700">Invoice Date</h3>
            <p className="text-gray-800 text-lg font-mono">{order.created_at}</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-red-700">Payment Method</h3>
            <p className="text-gray-800 text-lg font-mono">{order.payment_method}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-gray-700">Billed To:</h3>
            <p className="text-gray-800 font-medium">{order.shipping_address?.name}</p>
            <p className="text-sm text-gray-600">{order.shipping_address?.address}</p>
            <p className="text-sm text-gray-600">{order.shipping_address?.email}</p>
          </div>
        </section>

        {/* Item Table */}
        <section className="mt-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Items</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {order.items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.product_name}</td>
                    <td className="px-6 py-4 text-right text-sm text-gray-700">{item.quantity}</td>
                    <td className="px-6 py-4 text-right text-sm text-gray-700">{formatCurrency(item.unit_price)}</td>
                    <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">{formatCurrency(item.total_price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Totals */}
        <section className="mt-8 flex justify-end">
          <div className="w-full md:w-1/2">
            <div className="space-y-2 text-right">
              <div className="flex justify-between items-center text-gray-700">
                <span className="font-medium">Subtotal:</span>
                <span className="font-mono">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-700">
                <span className="font-medium">VAT (15%):</span>
                <span className="font-mono">{formatCurrency(tax)}</span>
              </div>
              <div className="flex justify-between items-center text-gray-700">
                <span className="font-medium">Shipping:</span>
                <span className="font-mono">{formatCurrency(order.shipping || 0)}</span>
              </div>
              <div className="pt-3 border-t-2 border-indigo-200 flex justify-between items-center text-xl font-bold text-indigo-600">
                <span>GRAND TOTAL:</span>
                <span className="font-mono text-2xl">{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default InvoiceGenerator;
