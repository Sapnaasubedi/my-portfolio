import AboutMe from "@/modules/About";
import Contact from "@/modules/Contact";
import Experience from "@/modules/Experience";
import Footer from "@/modules/Footer";
import HeroSection from "@/modules/Hero";
import Navbar from "@/modules/Navbar";
import Skills from "@/modules/Skills";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
     <AboutMe/>
     <Experience/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default page;
