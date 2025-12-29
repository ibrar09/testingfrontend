// src/pages/ServicePage/ChildPages/Construction/ConstructionHero.jsx
import React from "react";
import HeroSection from "../components/HeroSection"; 
import { constructionHeroData } from './constructionDetailsData';
import { useLanguage } from "../../../../context/LanguageContext";

const ConstructionHero = () => {
  const { lang } = useLanguage();
  const data = constructionHeroData[lang];
  
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

export default ConstructionHero;