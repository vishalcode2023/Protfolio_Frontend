import React from 'react'
import ServicesSection from "../LandingPageComponents/ServicesSection";
import Skills from "../LandingPageComponents/Skills";
import ComparisonSection from "../LandingPageComponents/ComparisonSection";
import FAQSection from "../LandingPageComponents/FAQSection";
import TellAboutYourProject from "../LandingPageComponents/TellAboutYourProject";
import DashboardSwiper from "./DashboardSwiper";
import LandingPage from './LandingPage';

const MainComponents = () => {
  return (
    <div>
        <LandingPage/>
        <DashboardSwiper />
        <ServicesSection />
        <Skills />
        <ComparisonSection />
        <FAQSection />
        <TellAboutYourProject />
    </div>
  )
}

export default MainComponents