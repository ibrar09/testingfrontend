// src/pages/ServicePage/ChildPages/HVAC/ProjectDuration.jsx
import React from 'react';
import ProjectDurationCard from '../components/ProjectDurationCard';
import hvacProjectDurationData from './HvacData';
import { useLanguage } from "../../../../context/LanguageContext";

const ProjectDuration = () => {
  const { lang } = useLanguage();
  const data = hvacProjectDurationData[lang];
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {data.cards.map((card, idx) => (
          <ProjectDurationCard key={idx} {...card} />
        ))}
      </div>
      <p className="mt-6 w-full max-w-[1200px] text-[12px] leading-[16px] font-['Helvetica'] font-normal text-center text-[rgba(115,115,115,1)] mx-auto">
        {data.note}
      </p>
    </div>
  );
};

export default ProjectDuration;