// src/pages/ServicePage/ChildPages/Kitchen/KitchenHero.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import { kitchenHeroData } from "./KitchenData";
import { useLanguage } from "../../../../context/LanguageContext";

const KitchenHero = () => {
  const { lang } = useLanguage();
  const data = kitchenHeroData[lang];
  
  // Map icons to JSX elements
  const cardsWithIcons = data.cards.map((card) => ({
    ...card,
    icon: <card.icon className="w-5 h-5 text-primary" />, // consistent color with theme
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

export default KitchenHero;