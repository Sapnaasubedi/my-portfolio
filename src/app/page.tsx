import AboutMe from "@/modules/About";
import Contact from "@/modules/Contact";
import Footer from "@/modules/Footer";
import HeroPage from "@/modules/HeroSection";
import Navbar from "@/modules/Navbar";
import Skills from "@/modules/Skills";
import Social from "@/modules/Social";
import Works from "@/modules/Works";

import React from "react";
const homeSections = [
  { id: "", label: "HOME", isRedirect: true },
  { id: "works", label: "WORKS", isRedirect: false },
  { id: "about-me", label: "ABOUT ME", isRedirect: true },
  { id: "skills", label: "SKILLS", isRedirect: false },
  { id: "contact", label: "CONTACT", isRedirect: false },
];
const page = () => {
  return (
    <>
      <Navbar  sections={homeSections}/>
      <HeroPage />
      <Social/>
      <Works/>
     <AboutMe/>
     <Skills/>
     <Contact/>
     <Footer/>
    </>
  );
};

export default page;
