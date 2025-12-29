import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../api/config";
import {
  IoCalendarOutline,
  IoCloseOutline,
  IoChevronDown,
  IoCloudUploadOutline,
  IoCallOutline,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";

// --------------------------------------------
// Reusable Form Inputs
// --------------------------------------------
const FormTextInput = ({
  label,
  placeholder,
  id,
  type = "text",
  required = false,
  value,
  onChange,
}) => (
  <div className="flex-1">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
    />
  </div>
);

const FormSelectInput = ({
  label,
  options,
  id,
  placeholder,
  required = false,
  value,
  onChange,
}) => (
  <div className="flex-1 relative">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
      name={id}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full p-2.5 border border-gray-300 rounded-md appearance-none bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150 pr-8"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
  </div>
);

// --------------------------------------------
// Main Form Component
// --------------------------------------------
const RequestQuoteForm = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const serviceOptions = [
    { value: "office-fit-out", label: "Office Fit-Out" },
    { value: "residential", label: "Residential Remodel" },
    { value: "commercial", label: "Commercial New Build" },
  ];

  const projectTypeOptions = [
    { value: "commercial", label: "Commercial" },
    { value: "residential", label: "Residential" },
    { value: "industrial", label: "Industrial" },
  ];

  const areaOptions = [
    { value: "0-50", label: "0 - 50 m²" },
    { value: "51-200", label: "51 - 200 m²" },
    { value: "201-500", label: "201 - 500 m²" },
    { value: "500+", label: "500+ m²" },
  ];

  const [formData, setFormData] = useState({
    serviceRequired: "",
    projectType: "",
    estimatedArea: "",
    preferredDate: "",
    contactName: "",
    company: "",
    phoneNumber: "",
    emailAddress: "",
    projectDetails: "",
    files: [],
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUploadProgress(0);

    const data = new FormData();
    for (let key in formData) {
      if (key === "files") {
        formData.files.forEach((file) => data.append("files", file));
      } else {
        data.append(key, formData[key]);
      }
    }

    try {


      // ... inside component ...
      const res = await axios.post(
        `${API_BASE_URL}/quotations`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percent);
          },
        }
      );

      alert("✅ Quotation submitted successfully! Check your email for the PDF.");
      setFormData({
        serviceRequired: "",
        projectType: "",
        estimatedArea: "",
        preferredDate: "",
        contactName: "",
        company: "",
        phoneNumber: "",
        emailAddress: "",
        projectDetails: "",
        files: [],
      });
      setUploadProgress(0);
      onClose();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("❌ Error submitting quotation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <IoCloseOutline className="w-6 h-6" />
        </button>

        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">
            Request a Quote
          </h2>
        </div>

        <div className="p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* --- First Row --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormSelectInput
                label="Service Required"
                id="serviceRequired"
                placeholder="Select Service"
                options={serviceOptions}
                required
                value={formData.serviceRequired}
                onChange={handleChange}
              />
              <FormSelectInput
                label="Project Type"
                id="projectType"
                placeholder="Select Project Type"
                options={projectTypeOptions}
                required
                value={formData.projectType}
                onChange={handleChange}
              />
            </div>

            {/* --- Second Row --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormSelectInput
                label="Estimated Area"
                id="estimatedArea"
                placeholder="Select area"
                options={areaOptions}
                required
                value={formData.estimatedArea}
                onChange={handleChange}
              />
              <div className="flex-1 relative">
                <label
                  htmlFor="preferredDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 pr-10"
                />
                <IoCalendarOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* --- Contact --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormTextInput
                label="Contact Name"
                id="contactName"
                placeholder="Your full name"
                required
                value={formData.contactName}
                onChange={handleChange}
              />
              <FormTextInput
                label="Company"
                id="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormTextInput
                label="Phone Number"
                id="phoneNumber"
                type="tel"
                placeholder="+966 XX XXX XXXX"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <FormTextInput
                label="Email Address"
                id="emailAddress"
                type="email"
                placeholder="your@email.com"
                required
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </div>

            {/* --- Project Details --- */}
            <div>
              <label
                htmlFor="projectDetails"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Project Details
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows="5"
                value={formData.projectDetails}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>

            {/* --- File Upload --- */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors duration-200 cursor-pointer">
              <input
                type="file"
                className="hidden"
                id="fileUpload"
                multiple
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
              />
              <label htmlFor="fileUpload" className="cursor-pointer block">
                <IoCloudUploadOutline className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                <p className="text-blue-600 font-medium">
                  Click to upload floor plans, images, or PDFs
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Max 10MB each — JPG, PNG, or PDF
                </p>
              </label>

              {/* File preview */}
              {formData.files.length > 0 && (
                <ul className="mt-4 text-left text-sm text-gray-700 space-y-1">
                  {formData.files.map((f, i) => (
                    <li key={i} className="truncate">
                      📄 {f.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* --- Upload Progress --- */}
            {loading && (
              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}

            {/* --- Submit Button --- */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition duration-200 flex items-center justify-center disabled:opacity-70"
              >
                <IoCalendarOutline className="w-5 h-5 mr-2" />
                {loading ? "Submitting..." : "Request Site Visit & Quote"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuoteForm;