import React from 'react';

const CardService = ({ 
  imageSrc, 
  title, 
  description, 
  listItems, 
  buttonLink = '#', 
  onButtonClick, 
  IconComponent 
}) => {
  return (
    <div className="group w-full max-w-sm h-full rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col mx-auto">
      
      {/* 1. Image Section */}
      <div className="relative h-52 sm:h-56 w-full rounded-t-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src={imageSrc}
          alt={title}
        />
        {/* Dark overlay that fades out on hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
      </div>

      {/* 2. Floating Icon - Fixed "Disappearing" Issue */}
      {/* Moved outside the overflow-hidden container to ensure it stays visible */}
      <div className="relative px-6">
        <div className="absolute -top-8 left-6 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#023A9A] shadow-lg flex items-center justify-center z-20 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
          {IconComponent && (
            <IconComponent 
              sx={{ 
                fontSize: { xs: 28, sm: 32 }, 
                color: 'white'
              }} 
            />
          )}
        </div>
      </div>
      
      {/* 3. Content Area */}
      <div className="flex flex-col p-6 pt-10 flex-grow">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-[#023A9A] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>
        
        {/* Feature List */}
        <div className="flex flex-col gap-2.5 mt-5">
          {listItems?.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#023A9A]/30 group-hover:bg-[#023A9A] transition-colors duration-300" />
              <span className="text-sm font-medium text-slate-600 italic">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* 4. Action Button */}
        <div className="mt-auto pt-8"> 
          <a href={buttonLink} onClick={onButtonClick} className="no-underline">
            <button className="w-full h-11 rounded-lg bg-slate-900 text-white font-bold text-sm transition-all duration-200 hover:bg-[#023A9A] flex items-center justify-center gap-2 group/btn">
              <span>Get Service</span>
              <svg 
                className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardService;