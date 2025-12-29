import React from "react";

const PopupModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold mb-4 text-[#023A9A]">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PopupModal;
