"use client";
import React from "react";
import "../styles/Herosection.css";
import "./About.css";
import { Card, Flex, Typography } from "antd";
import Videos from "@/app/assets/pp.png";
import Image from "next/image";
import Tilicho from "@/app/assets/tilicho.jpeg";
import Lake from "@/app/assets/lake.jpeg";
import Langtang from "@/app/assets/langtang.jpeg";
import Phoksundo from "@/app/assets/phoksundo.jpeg";
import Dolpa from "@/app/assets/dolpa.jpeg";
import Gosaikunda from "@/app/assets/gosaikunda.jpeg";
import Star from "@/app/assets/staranimation.png";

const { Text } = Typography;

const AboutHeroPage: React.FC = () => {
  return (
    <Flex vertical className="hero">
      <div className="avatar-wrapper">
        <Image
          src={Videos.src}
          alt="avatar"
          width={100}
          height={70}
          className="avatar"
        ></Image>
        <div className="hover-message">Hi there, I&apos;m Sapana! 🌸</div>
      </div>

      <h1 className="hero-heading">
        <Image
          src={Star.src}
          alt="star"
          width={30}
          height={30}
          className="star"
          style={{ marginBottom: "50px" }}
        ></Image>
        The story of me being A Traveller
      </h1>
      <Text className="hero-title">
        Traveling keeps me grounded. Meeting new people, exploring diverse
        cultures & cuisines allow me to view things from a fresh perspective.
        Mountains to me, in many ways, echo life&apos;s lessons. I firmly
        believe that sometimes, the journey matters more than the destination, &
        true peace follows the struggle.
      </Text>
      <div className="container">
        <Flex className="cards-wrapper">
          <Card
            className="about-card"
            style={{
              backgroundImage: `url(${Tilicho.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `rotate(-4deg)`,
            }}
          ></Card>
          <Card
            className="about-card"
            style={{
              backgroundImage: `url(${Lake.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `rotate(-2deg)`,
            }}
          ></Card>
          <Card
            className="about-card"
            style={{
              backgroundImage: `url(${Phoksundo.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `rotate(-1deg)`,
            }}
          ></Card>
          <Card
            className="about-card"
            style={{
              backgroundImage: `url(${Langtang.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `rotate(1deg)`,
            }}
          ></Card>
          <Card
            className="about-card"
            style={{
              backgroundImage: `url(${Dolpa.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `rotate(2deg)`,
            }}
          ></Card>
          <Card
            className="about-card"
            style={{
              backgroundImage: `url(${Gosaikunda.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `rotate(4deg)`,
            }}
          ></Card>
        </Flex>
      </div>
    </Flex>
  );
};

export default AboutHeroPage;
