// src/pages/ServicePage/ChildPages/Electrical/ElectricalHero.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import { electricalHeroData } from "./ElectricalData";
import { useLanguage } from "../../../../context/LanguageContext";

const ElectricalHero = () => {
  const { lang } = useLanguage();
  const data = electricalHeroData[lang];
  
  // Map icons to JSX elements
  const cardsWithIcons = data.cards.map((card) => ({
    ...card,
    icon: <card.icon className="w-5 h-5 text-primary" />, // changed color for electrical
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

export default ElectricalHero;