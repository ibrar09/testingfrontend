// src/pages/ServicePage/ChildPages/Epoxy/EpoxyHero.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import { epoxyHeroData } from "./EpoxyData";
import { useLanguage } from "../../../../context/LanguageContext";

const EpoxyHero = () => {
  const { lang } = useLanguage();
  const data = epoxyHeroData[lang];
  
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

export default EpoxyHero;