"use client";
import React, { FC, useEffect, useState } from "react";
import { Button, Drawer, Flex, Space, Typography } from "antd";
import { useRouter } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";
import { useIsSmallScreen } from "./AboutMe/InfiniteLoop";

const { Title } = Typography;

interface NavbarProps {
  sections: Array<{ id: string; href: string; label: string; isRedirect: boolean }>;
}
const Navbar:FC<NavbarProps> = ({ sections })  => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { push } = useRouter();

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRedirect = (url: string) => () => {
    push(url);
    setDrawerOpen(false);  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  
  const isSmallScreen = useIsSmallScreen();

  return (
       <Flex justify="center" className={`navbar ${isSticky ? "sticky" : ""}`}>
       

       {isSmallScreen && (
        <Space style={{ gap: "95px"}}>
          <Title 
        level={3}
        style={{
          color: "white",
          display: "inline-block",
          background: "linear-gradient(90deg, rgba(46,60,134,1) 0%, rgba(103,141,228,1) 53%, rgba(61,61,89,1) 100%)",
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`,
            fontFamily: "Caveat"

        }}
        onClick={handleRedirect(`/`)}
      >
        SAPANA
      </Title> <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={toggleDrawer}
        style={{ display: "inline-block" , color:"white"}}
      /></Space>
       
      )}
         
      <Space size="large" style={{ marginTop: "-15px" }} className="navbar-space">
        {sections.map((section) => (
          <Title
            key={section.id}
            level={5}
            style={{
              color: activeSection === section.id ? "yellow" : "white",
              fontFamily: "Josefin Sans",
            }}
            onClick={
              section.isRedirect ? handleRedirect(`/${section.href}`) : () => scrollToSection(section.id)
            }
          >
            {section.label}
          </Title>
        ))}
      </Space>
      <Drawer
        title=""
        placement="top"
        onClose={toggleDrawer}
        open={drawerOpen}
        style={{ background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        opacity: "1",}}
      >
        {sections.map((section) => (
          <Typography.Text
          style={{color:"white" , display:"block" , lineHeight:"50px"}}
            key={section.id}
            onClick={
              section.isRedirect ? handleRedirect(`/${section.href}`) : () => scrollToSection(section.id)
            }
          >
            {section.label}
          </Typography.Text>
        ))}
      </Drawer>
    </Flex>
   
  );
};

export default Navbar;
