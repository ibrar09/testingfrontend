import React from "react";
import ProjectDurationCard from "../components/ProjectDurationCard";
import { fitoutProjectDurationData } from "./fitoutDetailsData";
import { useLanguage } from "../../../../context/LanguageContext";

const FitoutProjectDuration = () => {
  const { lang } = useLanguage();
  const data = fitoutProjectDurationData[lang];
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {data.cards.map((card, idx) => (
          <ProjectDurationCard key={idx} {...card} />
        ))}
      </div>

      <p className="mt-6 w-full max-w-[1200px] text-[12px] leading-[16px] text-center text-gray-500 mx-auto">
        {data.note}
      </p>
    </div>
  );
};

export default FitoutProjectDuration;