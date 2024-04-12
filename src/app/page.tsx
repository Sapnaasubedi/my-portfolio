import HeroSection from "@/modules/hero";
import Navbar from "@/modules/navbar";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        padding: "18px 24px",
        minHeight: "100vh",
        maxWidth: `calc(100% - 110px)`,
        marginLeft: `250px`,
      }}
    >
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default page;
