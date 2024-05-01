"use client";
import React, { FC, useEffect, useState } from "react";
import { Button, Drawer, Flex, Space, Typography } from "antd";
import { useRouter } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Navbar: FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
  const { push } = useRouter();

  const handleRedirect = (url: string) => () => {
    push(url);
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Flex justify="center" className={`navbar ${isSticky ? "sticky" : ""}`}>
      <Space size="large" style={{ marginTop: "-15px" }} className="menu">
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
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={toggleDrawer}
        className="ham-burger"
      />
      <Drawer
        placement="top"
        closable={true}
        onClose={toggleDrawer}
        open={drawerOpen}
      >
        <Space
          direction="vertical"
          size="large"
          style={{ fontFamily: "cursive" }}
        >
          <Title level={5} onClick={() => scrollToSection("works")}>
            WORKS
          </Title>
          <Title level={5} onClick={() => handleRedirect("/about-me")}>
            ABOUT ME
          </Title>
          <Title level={5} onClick={() => scrollToSection("skills")}>
            SKILLS
          </Title>
          <Title level={5} onClick={() => scrollToSection("contact")}>
            CONTACT
          </Title>
        </Space>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
