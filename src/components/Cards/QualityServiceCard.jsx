// components/Cards/QualityServiceCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RequestQuoteForm from '../../pages/RequestPage/RequestQuoteForm';

const QualityServiceCard = ({ plan }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full max-w-[360px] mx-auto p-6 rounded-lg bg-white flex flex-col justify-between shadow-lg hover:shadow-xl transition">
      {/* 1. Title and Subtitle */}
      <div>
        <h3 className="text-center font-sans font-bold text-xl sm:text-2xl lg:text-3xl text-black">
          {plan.title}
        </h3>
        <p className="mt-2 text-center font-sans text-sm sm:text-base text-[#737373]">
          {plan.subtitle}
        </p>
      </div>

      {/* 2. Price */}
      <div className="mt-6 text-center">
        {plan.price && (() => {
          const parts = plan.price.split(" ");
          const priceValue = parts.pop();
          const priceLabel = parts.join(" ");

          return (
            <>
              <p className="text-[#023A9A] font-sans font-bold text-lg sm:text-xl">
                {priceLabel}
              </p>
              <p className="text-[#023A9A] font-sans font-bold text-2xl sm:text-3xl lg:text-4xl mt-1">
                {priceValue}
              </p>
            </>
          );
        })()}
      </div>

      {/* 3. Features */}
      <ul className="space-y-2 mt-6 sm:mt-8">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start text-sm sm:text-base text-black"
          >
            <span className="text-[#023A9A] text-lg sm:text-xl mr-2 font-extrabold">
              •
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* 4. Button */}
      <Link to={plan.buttonlink}>
      <button
          onClick={() => setIsModalOpen(true)}
       className="w-full py-3 mt-6 border border-gray-300 rounded-md font-bold text-gray-900 text-sm sm:text-base transition-colors duration-300 hover:bg-gray-100">
      
        {plan.buttonText}
      </button>
      </Link>

           {isModalOpen && <RequestQuoteForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default QualityServiceCard;
