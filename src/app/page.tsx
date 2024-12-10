import AboutMe from "@/modules/About";
import Contact from "@/modules/Contact";
import Footer from "@/modules/Footer";
import HeroPage from "@/modules/HeroSection";
import Navbar from "@/modules/Navbar";
import Skills from "@/modules/Skills";
import Social from "@/modules/Social";
import Works from "@/modules/Works";
import Image from "next/image";
import Icon from "@/app/assets/Cover.jpg";
import React from "react";
import { Avatar } from "antd";
const homeSections = [
  {
    id: "",
    href: "",
    label: (
      <span>
        <Avatar
          size="large"
          src={Icon.src}
          alt="1"
          style={{ marginRight: "10px" }}
        />
      </span>
    ),
    isRedirect: true,
  },
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
