"use client";
import {
  Button,
  Card,
  Flex,
  Space,
  Typography,
} from "antd";
import Image from "next/image";
import React from "react";
import { MdPhoneInTalk, MdWavingHand } from "react-icons/md";
import Hi from '@/app/assets/avatar.webp'

const { Title, Text } = Typography;

const HeroSection = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Flex
      vertical
      style={{ alignItems: `center`, margin: "80px", gap: "50px", marginBottom:"160px" }}
    >
      <Space direction="vertical" align="center" style={{ margin: "20px" }}>
      <div style={{ marginBottom: "-20px" }} className="Logo-div"> 
        <Image
          src={Hi.src}
          width={100}
          height={70}
          alt="avatar"
                 />
      </div>
      <Card
        style={{
          background: "#DCDCDC",
          borderRadius: "50px",
          width: "250px",
          textAlign: "center", 
         
        }}
      >
        <Text strong italic style={{ color: "#808080" }}>
          Hello! <MdWavingHand color="yellow" /> I am Sapana Subedi
        </Text>
      </Card>
    </Space>
      
      <Title
        style={{ maxWidth: "700px", textAlign: "center", fontSize: `60px` }}
      >
        Exploring the Boundless Horizons of &nbsp;
        <span
          style={{
            background:
              "linear-gradient(90deg, rgba(174,238,204,1) 35%, rgba(174,199,228,1) 91%)",
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`,
          }}
        >
          Software Development
        </span>
        &nbsp; Odyssey
      </Title>

      <Button
        style={{ borderRadius: "50px", background: "#a0e6d5", border: "none", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", height:"60px" ,width:"160px"}}
        size="large"
        onClick={() => scrollToSection("contact")}
      >
        <Text strong style={{ color: "#9d9c9c", alignItems: `center` }}>
          <MdPhoneInTalk /> Contact Now
        </Text>
      </Button>
    </Flex>
  );
};

export default HeroSection;
