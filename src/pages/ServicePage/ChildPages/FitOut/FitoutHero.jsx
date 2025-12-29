import React from "react";
import HeroSection from "../components/HeroSection";
import { fitoutHeroData } from "./fitoutDetailsData";
import { useLanguage } from "../../../../context/LanguageContext";

const FitOutHero = () => {
  const { lang } = useLanguage();
  const data = fitoutHeroData[lang];
  
  // Convert icon components to JSX
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

export default FitOutHero;