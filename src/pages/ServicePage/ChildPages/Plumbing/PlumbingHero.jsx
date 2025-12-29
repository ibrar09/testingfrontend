import React from "react";
import HeroSection from "../components/HeroSection";
import { plumbingHeroData } from "./PlumbingData";
import { useLanguage } from "../../../../context/LanguageContext";

const PlumbingHero = () => {
  const { lang } = useLanguage();
  const data = plumbingHeroData[lang];
  
  // Map icons to JSX elements
  const cardsWithIcons = data.cards.map((card) => ({
    ...card,
    icon: <card.icon className="w-5 h-5 text-blue-600" />,
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

export default PlumbingHero;