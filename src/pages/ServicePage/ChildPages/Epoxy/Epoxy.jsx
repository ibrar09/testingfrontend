import React from 'react'
import EpoxyHero from './EpoxyHero'
import EpoxyProjectDuration from './EpoxyProjectDuration'
import EpoxyService from './EpoxyService'
import EpoxyDetails from './EpoxyDetails'
import EpoxyPricing from './EpoxyPricing'
import EpoxyQualityPage from './EpoxyQualityPage'
import { useLanguage } from "../../../../context/LanguageContext"

const Epoxy = () => {
  const { lang } = useLanguage()
  
  return (
    <div className={lang === 'ar' ? 'text-right' : 'text-left'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <EpoxyHero/>
      <EpoxyProjectDuration/>
      <EpoxyService/>
      <EpoxyDetails/>
      <EpoxyPricing/>
      <EpoxyQualityPage/>
    </div>
  )
}

export default Epoxy