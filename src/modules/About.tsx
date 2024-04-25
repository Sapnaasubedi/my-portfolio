"use client";
import { Card, Col, Flex, Row, Typography } from "antd";
import React from "react";
import CoverImage from "../app/assets/cover.jpeg";
import Image from "next/image";

const { Title } = Typography;

const AboutMe = () => {
  return (
    <Flex
     justify="center" 
    >
      <Row >
        <Col span={15}>
          <Title level={3}>About Me</Title>
          <Title
          level={5}
            style={{
              maxWidth: "600px",
              fontSize: "16px",
              fontWeight: 200,
              lineHeight: "30px",
            }}
          >
            Hello! I&apos;m a seasoned software developer with a passion for
            innovation and problem-solving. I specialize in crafting clean,
            efficient code that transforms ideas into reality. My love for
            technology extends beyond the screen—I believe in using software to
            make a positive impact in people&apos;s lives.Aim to leverage deep
            technical acumen and diverse industry experience to drive software
            innovation and efficiency in a challenging contractor role. Focused
            on delivering high-quality, scalable solutions that enhance user
            engagement and operational excellence. Let&apos;s collaborate on
            projects that push boundaries and inspire change. When I&apos;m not
            coding, you can find me exploring the outdoors. Let&apos;s connect
            and create something amazing together!
          </Title>
        </Col>

        <Col>
          <Card style={{ borderRadius: "350px" }}>
            <Image
              src={CoverImage.src}
              alt="pp"
              width="300"
              height="400"
              style={{ borderRadius: "300px", objectFit: "cover" }}
            />
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};

export default AboutMe;
