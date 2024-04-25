"use client";
import React, { useRef } from "react";
import "./styles/Herosection.css";
import { Button, Flex, Space, Typography } from "antd";
import Videos from "@/app/assets/pp.png";
import Flash from "@/app/assets/flash.webp";
import { MdPhoneInTalk } from "react-icons/md";
import Image from "next/image";

type MouseMoveEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
const { Title, Text } = Typography;

const HeroPage: React.FC = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseMoveEvent) => {
    const glow = glowRef.current;
    if (glow) {
      glow.style.top = `${event.pageY}px`;
      glow.style.left = `${event.pageX}px`;
    }
  };
  const openResume = () => {
    window.open(
      "https://docs.google.com/document/d/1Cbm4Dwx9xM2m2Arr91B6Hqk58MhCmwkhb7cSWikqnLg/edit?pli=1",
      "_blank",
    );
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Flex vertical className="hero" onMouseMove={handleMouseMove}>
      <div id="glow" ref={glowRef}></div>
      <div className="avatar-wrapper">
        <Image
          src={Videos.src}
          alt="avatar"
          width={100}
          height={70}
          className="avatar"
        ></Image>
        <div className="hover-message">Hi there, I&apos;m Sapana!</div>
      </div>
      <h1>
        Exploring the Boundless Horizons of &nbsp;
        <span
          style={{
            background:
              "linear-gradient(6983deg, var(--token-e4fe9052-f52e-4ea9-884d-9d363b322bb6, rgb(81, 137, 221)) 0%, rgb(200, 213, 235) 100%)",
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`,
          }}
        >
          Software Development
        </span>
        &nbsp; Odyssey
      </h1>
      <Space>
    
        <Button
          style={{
            borderRadius: "12px",
            background: "rgba(230, 230, 230, 1)",
            border: "none",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            height: "50px",
            width: "auto",
          }}
          size="large"
          onClick={() => scrollToSection("contact")}
        >
          <Text
            strong
            style={{ color: "black", alignItems: `center`, fontSize: "16px" }}
          >
            Contact Now
          </Text>
        </Button>
        <Button
          style={{
            borderRadius: "12px",
            background: "none 0% 0% ",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            height: "50px",
            width: "auto",
          }}
          size="large"
          onClick={openResume}
        >
          <Text
            strong
            style={{ color: "white", alignItems: `center`, fontSize: "16px" }}
          >
            View Resume
          </Text>
        </Button>
      </Space>
    </Flex>
  );
};

export default HeroPage;
