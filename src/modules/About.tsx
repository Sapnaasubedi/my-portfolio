"use client";
import { Button, Col, Flex, Row, Space, Typography } from "antd";
import React from "react";
import Image from "next/image";
import CoverImage from "../app/assets/cover.jpeg";

const { Title, Text } = Typography;

const AboutMe = () => {
  return (
    <Row
      gutter={[16, 16]}
      style={{ padding: "20px", justifyContent: "center", alignItems: "center" }}
    >
      <Col xs={24} sm={24} md={12} lg={10}>
        <Space direction="vertical" style={{ textAlign: "left",  }}>
          <Title
            level={5}
            style={{
              background: "linear-gradient(90deg, rgba(46,60,134,1) 0%, rgba(103,141,228,1) 53%, rgba(61,61,89,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.4em",
            }}
          >
            ABOUT ME
          </Title>

          <Text
            style={{
              color: "white",
              fontFamily: "cursive",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            Know who I am
          </Text>

          <Text
            style={{
              color: "white",
              fontFamily: "cursive",
              fontSize: "24px",
            }}
          >
            My Journey in a nutshell
          </Text>

          <Text
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "20px",
              fontWeight: 200,
              lineHeight: "30px",
              fontFamily: "cursive"
            }}
          >
           Hello! I&apos;m a seasoned software developer with a passion for
          innovation and problem-solving. I specialize in crafting clean,
          efficient code that transforms ideas into reality. My love for
          technology extends beyond the screen—I believe in using software to
          make a positive impact in people&apos;s lives.Aim to leverage deep
          technical acumen and diverse industry experience to drive software
          innovation and efficiency in a challenging contractor role. Focused on
          delivering high-quality, scalable solutions that enhance user
          engagement and operational excellence. Let&apos;s collaborate on
          projects that push boundaries and inspire change. When I&apos;m not
          coding, you can find me exploring the outdoors. Let&apos;s connect and
          create something amazing together!
          </Text>

          <Button
            style={{
              background: "none 0% 0%",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              height: "50px",
              opacity: "1",
            }}
            size="large"
          >
            <Text
              strong
              style={{ color: "white", fontSize: "16px" }}
            >
              Know more
            </Text>
          </Button>
        </Space>
      </Col>

      <Col xs={24} sm={24} md={12} lg={5}>
        <Flex style={{ justifyContent: "center" }}>
          <Image
            src={CoverImage.src}
            alt="Profile Picture"
            width={300}
            height={400}
            style={{ borderRadius: "150px", objectFit: "cover" }}
          />
        </Flex>
      </Col>
    </Row>
  );
};

export default AboutMe;
