import AboutMe from "@/modules/About";
import AboutHeroPage from "@/modules/AboutMe/AboutHero";
import BeyondPortfolio from "@/modules/AboutMe/BeyondPortfolio";
import Contact from "@/modules/Contact";
import Footer from "@/modules/Footer";

import HeroPage from "@/modules/HeroSection";
import Skills from "@/modules/Skills";
import Social from "@/modules/Social";
import Works from "@/modules/Works";

import React from "react";

const page = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <AboutHeroPage />
      <Social/>
      <BeyondPortfolio/>
     {/* <Experience/> */}
     {/* <Skills/> */}
     <Contact/>
     <Footer/>
    </div>
  );
};

export default page;
