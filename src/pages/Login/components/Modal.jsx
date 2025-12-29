// src/components/Modal/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          &times;
        </button>

        {title && <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#023A9A" }}>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
