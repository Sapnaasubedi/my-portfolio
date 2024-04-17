"use client";
import {
  Button,
  Card,
  Flex,
  Typography,
} from "antd";
import React from "react";
import { MdPhoneInTalk, MdWavingHand } from "react-icons/md";

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
      <Card
        style={{ background: "#DCDCDC", borderRadius: "50px", width: "250px" }}
      >
        <Text strong italic style={{ color: "#808080" }}>
          Hello! <MdWavingHand color="yellow" /> I am Sapana Subedi
        </Text>
      </Card>
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
        style={{ borderRadius: "50px", background: "#d4f1ea", border: "none" }}
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
