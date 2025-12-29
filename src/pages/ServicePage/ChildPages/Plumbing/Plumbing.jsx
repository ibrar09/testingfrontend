import React from 'react'
import PlumbingHero from './PlumbingHero'
import ProjectDuration from './ProjectDuration'
import PlumbingService from './PlumbingService'
import PlumbingDetails from './PlumbingDetails'
import PlumbingPricing from './PlumbingPricing'
import PlumbingQualityPage from './PlumbingQualityPage'
import { useLanguage } from "../../../../context/LanguageContext";

const Plumbing = () => {
  const { lang } = useLanguage();
  
  return (
    <div className={lang === 'ar' ? 'text-right' : 'text-left'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <PlumbingHero/>
      <ProjectDuration/>
      <PlumbingService/>
      <PlumbingDetails/>
      <PlumbingPricing/>
      <PlumbingQualityPage/>
    </div>
  )
}

export default Plumbing