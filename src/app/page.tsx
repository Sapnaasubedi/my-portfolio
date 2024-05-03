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
  { id: "home", href: "", label: "HOME", isRedirect: true },
  { id: "works",  href: "works",label: "WORKS", isRedirect: false },
  { id: "about-me", href: "about-me", label: "ABOUT ME", isRedirect: true },
  { id: "skills", href: "skills", label: "SKILLS", isRedirect: false },
  { id: "contact",  href: "contact",label: "CONTACT", isRedirect: false },
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
