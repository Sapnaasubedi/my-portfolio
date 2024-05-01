"use client";
import React, { FC, useEffect, useState } from "react";
import { Col, Flex, Row, Space, Typography } from "antd";

const { Title } = Typography;

const Navbar: FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Function to check scroll position
  const handleScroll = () => {
    setIsSticky(window.scrollY > 50); // Set threshold to when it becomes sticky
  };

  // Add/remove event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex  justify="center"  className={`navbar ${isSticky ? "sticky" : ""}`}>
      
        <Space size="large">
          <Title
            level={5}
            style={{
              color:"white",
              fontFamily: "cursive",
            }}
            onClick={() => scrollToSection("works")}
          >
            WORKS
          </Title>
          <Title
            level={5}
            style={{
              color:"white",
              fontFamily: "cursive",

           
            }}
            onClick={() => scrollToSection("contact")}
          >
            ABOUT ME
          </Title>
          <Title
            level={5}
            style={{
              color:"white",
              fontFamily: "cursive",

            }}
            onClick={() => scrollToSection("skills")}
          >
            SKILLS
          </Title><Title
            level={5}
            style={{
              color:"white",
              fontFamily: "cursive",

           
            }}
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </Title>
        </Space>
      
    </Flex>
  );
};

export default Navbar;
