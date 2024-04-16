"use client";
import {
  Card,
  Col,
  Descriptions,
  Divider,
  Flex,
  Row,
  Space,
  Typography,
} from "antd";
import React from "react";
import { MdPhoneInTalk, MdWavingHand } from "react-icons/md";
import CoverImage from "../app/assets/cover.jpeg";
const { Title, Text } = Typography;
import Image from "next/image";
import { PhoneOutlined } from "@ant-design/icons";
import { FaPhoneAlt } from "react-icons/fa";
const HeroSection = () => {
  return (
    <Flex
      vertical
      style={{ alignItems: `center`, margin: "80px", gap: "50px" }}
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
    
        <Card style={{ borderRadius: "50px", background: "#d4f1ea" ,}}>
          <Text strong style={{ color: "#9d9c9c", alignItems: `center` }}>
          <MdPhoneInTalk /> Contact Now  
          </Text>
        </Card>
      <Divider/>
    </Flex>
  );
};

export default HeroSection;
