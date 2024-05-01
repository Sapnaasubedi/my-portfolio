"use client";
import React, { FC, useEffect, useState } from "react";
import { Button, Drawer, Flex, Space, Typography } from "antd";
import { useRouter } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Navbar: FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50); 
  };

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
  const { push } = useRouter();

  const handleRedirect = (url: string) => () => {
    push(url);
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Flex justify="center" className={`navbar ${isSticky ? "sticky" : ""}`}>
      <Space size="large" style={{ marginTop: "-15px" }} >
      <Title
          level={5}
          style={{
            color: "white",
            fontFamily: "cursive",
          }}
          onClick={handleRedirect(`/`)}
        >
          HOME
        </Title>
        <Title
          level={5}
          style={{
            color: "white",
            fontFamily: "cursive",
          }}
          onClick={() => scrollToSection("works")}
        >
          WORKS
        </Title>
        <Title
          level={5}
          style={{
            color: "white",
            fontFamily: "cursive",
          }}
          onClick={handleRedirect(`/about-me`)}
        >
          ABOUT ME
        </Title>
        <Title
          level={5}
          style={{
            color: "white",
            fontFamily: "cursive",
          }}
          onClick={() => scrollToSection("skills")}
        >
          SKILLS
        </Title>
        <Title
          level={5}
          style={{
            color: "white",
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
