// src/pages/ServicePage/ChildPages/IT/ITHero.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import { itHeroData } from './itDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ITHero = () => {
  const { lang } = useLanguage();
  const data = itHeroData[lang];
  
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

export default ITHero;