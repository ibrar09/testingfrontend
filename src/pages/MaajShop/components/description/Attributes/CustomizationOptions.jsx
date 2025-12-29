// src/pages/MaajShop/components/ProductDetails/CustomizationOptions.jsx
import React from "react";
import {
  IoChatbubbleEllipsesOutline,
  IoColorPaletteOutline,
  IoCubeOutline,
  IoShirtOutline,
  IoGiftOutline,
  IoPricetagOutline,
} from "react-icons/io5";

const CustomizationOptions = () => {
  return (
    <section className="p-6 bg-white rounded-2xl shadow-md mt-8 border border-gray-100">
      {/* --- Section Header --- */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-400 rounded-t-xl -mx-6 -mt-6 mb-6 px-6 py-4">
        <h2 className="text-2xl font-semibold text-white tracking-wide">
          Customization Options
        </h2>
        <p className="text-sm text-sky-100">
          Tailor-made designs that fit your brand — from logo to packaging.
        </p>
      </div>

      {/* --- Core Info --- */}
      <div className="space-y-3 mb-6">
        <p className="text-gray-800 text-base">
          <span className="font-semibold">Technics:</span>
          <span className="text-gray-600 ml-2">(Min. order: 500 pieces)</span>
        </p>
        <p className="text-gray-700 text-sm">
          We provide personalized customization services for all product types.
          Choose your preferred logo method, color, material, and packaging.
        </p>
      </div>

      {/* --- Customization Options Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:shadow-md transition bg-gray-50">
          <IoPricetagOutline className="text-sky-500 text-3xl mb-2" />
          <h3 className="font-semibold text-gray-800">Logo Printing</h3>
          <p className="text-sm text-gray-600 text-center">
            Embroidery, Screen Print, or Heat Transfer
          </p>
        </div>

        {/* Color */}
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:shadow-md transition bg-gray-50">
          <IoColorPaletteOutline className="text-pink-500 text-3xl mb-2" />
          <h3 className="font-semibold text-gray-800">Color Customization</h3>
          <p className="text-sm text-gray-600 text-center">
            Choose from over 50+ available shades or provide Pantone code
          </p>
        </div>

        {/* Packaging */}
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:shadow-md transition bg-gray-50">
          <IoGiftOutline className="text-green-500 text-3xl mb-2" />
          <h3 className="font-semibold text-gray-800">Custom Packaging</h3>
          <p className="text-sm text-gray-600 text-center">
            Branded boxes, eco-friendly bags, or gift wrapping
          </p>
        </div>

        {/* Size / Material */}
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:shadow-md transition bg-gray-50">
          <IoShirtOutline className="text-orange-500 text-3xl mb-2" />
          <h3 className="font-semibold text-gray-800">Material & Size</h3>
          <p className="text-sm text-gray-600 text-center">
            Select preferred fabric, thickness, and custom measurements
          </p>
        </div>
      </div>

      {/* --- Extra Info --- */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
        <div>
          <span className="font-semibold text-gray-900">Delivery Time:</span>{" "}
          15–25 days depending on customization level
        </div>
        <div>
          <span className="font-semibold text-gray-900">MOQ:</span> 500–1000
          pieces per design
        </div>
      </div>

      {/* --- Buttons --- */}
      <div className="flex flex-wrap items-center gap-4">
        <button
          className="
            flex items-center gap-2 px-5 py-2.5 
            bg-sky-600 hover:bg-sky-700 
            text-white rounded-full 
            shadow-sm transition font-medium
          "
          onClick={() => console.log("Request Custom Quote clicked")}
        >
          <IoCubeOutline className="text-lg" />
          Request Custom Quote
        </button>

        <button
          className="
            flex items-center gap-2 px-5 py-2.5 
            border border-gray-700 
            rounded-full 
            text-gray-900 
            hover:bg-gray-100 
            transition font-medium
          "
          onClick={() => console.log("Chat Now clicked")}
        >
          <IoChatbubbleEllipsesOutline className="text-lg" />
          Chat Now
        </button>
      </div>
    </section>
  );
};

export default CustomizationOptions;
