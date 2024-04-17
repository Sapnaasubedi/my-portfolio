"use client";
import { Card, Col, Row, Typography } from "antd";
import React from "react";
import CoverImage from "../app/assets/cover.jpeg";
import Image from "next/image";

const { Title } = Typography;

const AboutMe = () => {
  return (
    <div
      style={{
        marginLeft: `200px`,
      }}
    >
      <Row justify="center">
        <Col span={11}>
          <Title level={3}>About Me</Title>
          <Title
            style={{
              maxWidth: "500px",
              fontSize: "16px",
              fontWeight: 200,
              lineHeight: "30px",
            }}
          >
            Hello! I&apos;m a seasoned software developer with a passion for
            innovation and problem-solving. With 4 years of experience, I
            specialize in crafting clean, efficient code that transforms ideas
            into reality. My love for technology extends beyond the screen—I
            believe in using software to make a positive impact in people&apos;s
            lives. Let&apos;s collaborate on projects that push boundaries and
            inspire change. When I&apos;m not coding, you can find me exploring
            the outdoors. Let&apos;s connect and create something amazing
            together!
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
    </div>
  );
};

export default AboutMe;
