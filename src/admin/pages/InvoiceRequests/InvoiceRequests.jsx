// src/admin/pages/InvoiceRequests/AdminInvoiceRequests.jsx
import React, { useEffect, useState } from "react";
import api from "../../../api/api";
import { BACKEND_URL } from "../../../api/config";
import Loader from "../components/common/Loader";
import StatusBadge from "../components/common/StatusBadge";

// Simple EmptyState component
const EmptyState = ({ message }) => (
  <div className="text-center text-gray-500 py-8">{message}</div>
);

const AdminInvoiceRequests = () => {
  const [invoiceRequests, setInvoiceRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploadingId, setUploadingId] = useState(null); // track which invoice is uploading

  // ------------------ Fetch all invoice requests ------------------ //
  const fetchInvoiceRequests = async () => {
    try {
      setLoading(true);
      setError("");
      console.log("[AdminInvoiceRequests] Fetching invoice requests...");
      const response = await api.get("/invoice-request"); // backend admin route
      console.log("[AdminInvoiceRequests] Fetch response:", response.data);

      if (response.data.success) {
        setInvoiceRequests(response.data.data || []);
        console.log("[AdminInvoiceRequests] Invoice requests set:", response.data.data?.length);
      } else {
        setError(response.data.message || "Failed to fetch invoices");
        console.warn("[AdminInvoiceRequests] Fetch failed:", response.data.message);
      }
    } catch (err) {
      console.error("[AdminInvoiceRequests] fetchInvoiceRequests Error:", err);
      setError("Server error while fetching invoices");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoiceRequests();
  }, []);

  // ------------------ Handle PDF upload ------------------ //
  const handleUploadPDF = async (invoiceId, file) => {
    if (!file) return;

    console.log("[AdminInvoiceRequests] Uploading PDF for invoiceId:", invoiceId, file);

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      setUploadingId(invoiceId);
      const response = await api.post(`/invoice-request/send/${invoiceId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("[AdminInvoiceRequests] Upload response:", response.data);

      if (response.data.success) {
        alert("PDF uploaded successfully!");
        fetchInvoiceRequests(); // refresh table
      } else {
        alert(response.data.message || "Failed to upload PDF");
      }
    } catch (err) {
      console.error("[AdminInvoiceRequests] handleUploadPDF Error:", err);
      alert("Server error while uploading PDF");
    } finally {
      setUploadingId(null);
    }
  };

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center mt-4">{error}</div>;
  if (!invoiceRequests.length) return <EmptyState message="No invoice requests found." />;

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Invoice Requests</h2>
      <table className="w-full border-collapse border border-gray-300 min-w-[800px]">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Invoice Number</th>
            <th className="border px-4 py-2">Order Number</th>
            <th className="border px-4 py-2">Order Total</th>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Requested At</th>
            <th className="border px-4 py-2">PDF</th>
            <th className="border px-4 py-2">Upload</th>
          </tr>
        </thead>
        <tbody>
          {invoiceRequests.map((invoice) => (
            <tr key={invoice.id}>
              <td className="border px-4 py-2">{invoice.id}</td>
              <td className="border px-4 py-2">{invoice.invoice_number || "N/A"}</td>
              <td className="border px-4 py-2">{invoice.Order?.order_number || "N/A"}</td>
              <td className="border px-4 py-2">{invoice.Order?.total ?? "0.00"}</td>
              <td className="border px-4 py-2">{invoice.User?.name || "N/A"}</td>
              <td className="border px-4 py-2">
                <StatusBadge status={invoice.status} />
              </td>
              <td className="border px-4 py-2">
                {invoice.requested_at ? new Date(invoice.requested_at).toLocaleString() : "N/A"}
              </td>
              <td className="border px-4 py-2">
                {invoice.pdfPath ? (
                  <a
                    href={`${BACKEND_URL}/${invoice.pdfPath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Download
                  </a>
                ) : (
                  <span className="text-gray-400">Not available</span>
                )}

              </td>
              <td className="border px-4 py-2">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleUploadPDF(invoice.id, e.target.files[0])}
                  disabled={uploadingId === invoice.id}
                  className="border p-1 rounded"
                />
                {uploadingId === invoice.id && (
                  <span className="ml-2 text-gray-500">Uploading...</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

export default AdminInvoiceRequests;
