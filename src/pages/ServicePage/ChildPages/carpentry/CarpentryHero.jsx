// src/pages/ServicePage/ChildPages/Carpentry/CarpentryHero.jsx
import React from "react";
import HeroSection from "../components/HeroSection"; 
import { carpentryHeroData } from './carpentryDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const CarpentryHero = () => {
  const { lang } = useLanguage();
  const data = carpentryHeroData[lang];
  
  const cardsWithIcons = data.cards.map((card) => ({
    ...card,
    icon: <card.icon className="w-5 h-5 text-primary" />,
  }));

  return (
    <HeroSection
      title={data.title}
      heading={data.heading}
      description={data.description}
      cards={cardsWithIcons}
      images={data.images}
    />
  );
};

export default CarpentryHero;