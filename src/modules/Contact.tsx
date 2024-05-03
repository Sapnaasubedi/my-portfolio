"use client";
import { Col, Row, Space, Typography } from "antd";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./styles/animation.css";

const { Title } = Typography;

const Contact = () => {
  const openResume = () => {
    window.open(
      "https://docs.google.com/document/d/1Cbm4Dwx9xM2m2Arr91B6Hqk58MhCmwkhb7cSWikqnLg/edit?pli=1",
      "_blank",
    );
  };

  return (
    <div
      style={{
        marginTop: "150px",
      }}
    >
      <div id="contact" style={{ padding: "20px" }}>
        <Row justify="center" gutter={[16, 16]} align="middle">
          <Col xs={24} sm={24} md={12} lg={10} xl={8}>
            <Title level={4} style={{ color: "white" }}>
              Yay! You&apos;ve made it to the end of quite the scroll.
            </Title>
            <Title
              level={5}
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "30px",
                color: "white",
                maxWidth: "450px",
              }}
            >
              Now let&apos;s connect. Because in some other universe, we&apos;re
              already friends. So why not in this one? :P Reach me at
            </Title>
            <Space size="large" style={{ marginTop: "20px" }}>
              <a
                href="https://github.com/Sapnaasubedi"
                style={{ color: "black" }}
              >
                <FaGithubSquare size={35} color="white" />
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
                href="mailto:sapnasubedi797@gmail.com"
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
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div className="animated-div">
                  <p
                    style={{
                      lineHeight: `92px`,
                      fontFamily: `Lobster`,
                      fontWeight: `900`,
                      fontSize: `62px`,
                    }}
                  >
                    <span
                      style={{
                        color: `rgba(46,60,134,1)`,
                      }}
                    >
                      Say Hi!
                    </span>
                  </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
