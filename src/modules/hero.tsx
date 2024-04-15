"use client";
import { Card, Flex, Typography } from "antd";
import React from "react";
import { MdWavingHand } from "react-icons/md";
import CoverImage from "../app/assets/52f78be6-a2f9-44c2-88b9-6fbaf35195ce.jpeg"
const { Title, Text } = Typography;
import Image from "next/image";
const HeroSection = () => {
  return (
    <Flex vertical style={{ alignItems: `center`, margin: "80px" }}>
      <Card
        style={{ background: "#DCDCDC", borderRadius: "50px", width: "250px" }}
      >
        <Text strong italic style={{ color: "#808080" }}>
          Hello! <MdWavingHand color="yellow" /> I am Sapana Subedi
        </Text>
      </Card>
      <Title style={{ maxWidth: "700px", textAlign: "center" }}>
        Exploring the Boundless Horizons of 

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
        Odyssey
      </Title>
      <Card style={{borderRadius:"50px"}}>
        <Image src={CoverImage.src} alt="pp" width={100} height={100}/>
      </Card>
    </Flex>
  );
};

export default HeroSection;
