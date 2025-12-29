import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadPDF = async (elementId, fileName, logoUrl) => {
  try {
    const input = document.getElementById(elementId);
    if (!input) throw new Error("PDF element not found");

    // Capture the element
    const canvas = await html2canvas(input, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(fileName);
  } catch (err) {
    console.error("PDF download failed:", err);
    alert("PDF download failed: " + (err.message || JSON.stringify(err)));
  }
};
