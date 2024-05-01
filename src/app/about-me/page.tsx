import AboutHeroPage from "@/modules/AboutMe/AboutHero";
import BeyondPortfolio from "@/modules/AboutMe/BeyondPortfolio";
import Contact from "@/modules/Contact";
import Footer from "@/modules/Footer";
import Navbar from "@/modules/Navbar";
import Social from "@/modules/Social";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutHeroPage />
      <Social/>
      <BeyondPortfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default page;
