import AboutHeroPage from "@/modules/AboutMe/AboutHero";
import BeyondPortfolio from "@/modules/AboutMe/BeyondPortfolio";
import Contact from "@/modules/Contact";
import Footer from "@/modules/Footer";
import Navbar from "@/modules/Navbar";
import Social from "@/modules/Social";

import React from "react";
const aboutMeSections = [
  { id: "home", href: "", label: "HOME", isRedirect: true },
  { id: "about-me", href: "about-me", label: "ABOUT ME", isRedirect: true },
  { id: "contact",  href: "contact",label: "CONTACT", isRedirect: false },
];
const page = () => {
  return (
    <div>
      <Navbar sections={aboutMeSections} />
      <AboutHeroPage />
      <Social/>
      <BeyondPortfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default page;
