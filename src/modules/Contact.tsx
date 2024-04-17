"use client";
import { Col, Row, Space, Typography } from "antd";
import React from "react";
import { CgMail } from "react-icons/cg";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const { Title } = Typography;

const Contact = () => {
  const openResume = () => {
    window.open(
      "https://docs.google.com/document/d/1Cbm4Dwx9xM2m2Arr91B6Hqk58MhCmwkhb7cSWikqnLg/edit",
      "_blank",
    );
  };
  return (
    <div
      id="contact"
      style={{
        marginLeft: `200px`,
      }}
    >
      <Row justify="center">
        <Col span={13}>
          <Title level={3}>Contact</Title>
          <Title
            style={{ fontSize: "16px", fontWeight: 200, lineHeight: "30px" }}
          >
            If you&apos;d like to collaborate, please send me an email or reach
            out on any of my social handles.
          </Title>

          <Space size="large">
            <a
              href="https://github.com/Sapnaasubedi"
              style={{ color: "black" }}
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/sapana-subedi-77227720a/"
              style={{ color: "black" }}
            >
              <FaLinkedin size={35} color="#0077B5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100010663329163"
              style={{ color: "black" }}
            >
              <FaFacebookSquare size={35} color="#4267B2" />
            </a>
            <a
              href="mailto:sapanasubedi18@gmail.com"
              style={{ color: "black" }}
            >
              <CgMail size={35} color="orange" />
            </a>
          </Space>
          <Title level={5} underline type="secondary">
            <a href="#" onClick={openResume} style={{ color: "#86888A" }}>
              View Resume
            </a>
          </Title>
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
};

export default Contact;
