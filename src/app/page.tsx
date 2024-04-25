import AboutMe from "@/modules/About";
import Contact from "@/modules/Contact";
import Experience from "@/modules/Experience";
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
      <HeroPage />
      {/* <Social/> */}
      <Works/>
     <AboutMe/>
     <Experience/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default page;
