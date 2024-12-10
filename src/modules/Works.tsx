"use client";
import React from "react";
import { Typography, Row, Col, Flex, Space, Button } from "antd";
import "./styles/Herosection.css";
import Image from "next/image";
import Takeobg from "@/app/assets/takeo.png";
import Quantum from "@/app/assets/quantum.png";
import { CiCircleCheck } from "react-icons/ci";
import Lightweb from "@/app/assets/light.png";
import liquor from "@/app/assets/lightwe.png";
import Girl from "@/app/assets/ithome.png";
import ImageSider from "./ImageSlider";
import { openInNewTab } from "@/utils/link";

const { Title, Text } = Typography;

const Works: React.FC = () => {
 
  
  const images = [
    { id: 1, src: Takeobg.src, alt: "Image 1", url: "https://www.takeo.ai/" },
    { id: 2, src: Quantum.src, alt: "Image 2", url: "https://quantumleap.takeo.ai/auth/login" },
  ];

  const lightImages = [
    { id: 1, src: Lightweb.src, alt: "Image 1", url: "https://lightwebgroup.com/" },
    { id: 2, src: liquor.src, alt: "Image 2", url: "https://liquorworld.com.np/" },
  ];

  const itImages = [
    { id: 1, src: Girl.src, alt: "Image 1", url: "https://www.prabidhilabs.com/" },
  ];
  return (
    <Flex
      vertical
      style={{ justifyContent: "center", padding: `130px 0` }}
      id="works"
    >
      <Space direction="vertical" size="small">
        <Title
          level={5}
          style={{
            background:
              "linear-gradient(90deg, rgba(46,60,134,1) 0%, rgba(103,141,228,1) 53%, rgba(61,61,89,1) 100%)",
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`,
            textAlign: "center",
            letterSpacing: "0.4em",
          }}
        >
          EXPERIENCE
        </Title>
      </Space>

      <Title
        level={2}
        style={{
          color: "white",
          fontFamily: "Josefin Sans",
          textAlign: "center",
          fontSize: "38px",
        }}
      >
        Where I&apos;ve Worked
      </Title>

      <Flex style={{ justifyContent: "center" }}>
        <Row gutter={[16, 16]} id="cards">
          <Col className="card" id="card-1">
            <Flex className="card-content">
              <Space>
                <Title
                  level={4}
                  style={{
                    background:
                      "linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)",
                    WebkitBackgroundClip: `text`,
                    WebkitTextFillColor: `transparent`,
                    textAlign: "center",
                  }}
                >
                  TAKEO NEPAL . 2021
                </Title>

                <Text
                  style={{
                    color: "white",
                    fontFamily: "Caveat",
                    fontSize: "40px",
                  }}
                >
                  Software Developer
                </Text>

                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Integrated multimedia content to improve
                  user engagement.
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Developed LMS with Node.js, Express.js,
                  MongoDB.
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Implemented RBAC for secure user
                  authentication.
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Implemented JWT-based authentication
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> React/Next.js developer.
                </Text>
                <Button
                  style={{
                    borderRadius: "12px",
                    background: "rgba(230, 230, 230, 1)",
                    border: "none",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    height: "50px",
                    width: "100%",
                    marginTop: "40px",
                  }}
                  size="large"
                  onClick={()=> openInNewTab("https://docs.google.com/document/d/1Cbm4Dwx9xM2m2Arr91B6Hqk58MhCmwkhb7cSWikqnLg/edit?pli=1")}
                >
                  <Text
                    strong
                    style={{
                      color: "rgb(44, 74, 119)",
                      alignItems: `center`,
                      fontSize: "16px",
                    }}
                  >
                    See more
                  </Text>
                </Button>
              </Space>
              <figure style={{  width: "80%", height:"60%", alignSelf: "center" }}>
              <ImageSider images={images} />
              </figure>
            </Flex>
          </Col>

          <Col className="card" id="card-2">
            <Flex className="card-content">
              <Space>
                <Title
                  level={4}
                  style={{
                    background:
                      "linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)",
                    WebkitBackgroundClip: `text`,
                    WebkitTextFillColor: `transparent`,
                    textAlign: "center",
                  }}
                >
                  LIGHTWEB GROUP . 2019-2021
                </Title>

                <Text
                  style={{
                    color: "white",
                    fontFamily: "Caveat",

                    fontSize: "40px",
                  }}
                >
                  Frontend Engineer
                </Text>

                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Built a user-friendly e-commerce frontend
                  with React.
                </Text>

                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Collaborated on backend inventory
                  management.
                </Text>
                
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Integrated PayPal and Stripe for secure
                  checkout.
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Added advanced catalog features.
                </Text>
                <Button
                  style={{
                    borderRadius: "12px",
                    background: "rgba(230, 230, 230, 1)",
                    border: "none",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    height: "50px",
                    width: "auto",
                    marginTop: "40px",
                  }}
                  size="large"
                  onClick={()=> openInNewTab("https://docs.google.com/document/d/1Cbm4Dwx9xM2m2Arr91B6Hqk58MhCmwkhb7cSWikqnLg/edit?pli=1")}
                >
                  <Text
                    strong
                    style={{
                      color: "rgb(44, 74, 119)",
                      alignItems: `center`,
                      fontSize: "16px",
                    }}
                  >
                    See more
                  </Text>
                </Button>
              </Space>
              <figure style={{  width: "80%", height:"60%", alignSelf: "center" }}>
                <ImageSider images={lightImages} />
              </figure>
            </Flex>
          </Col>

          <Col className="card" id="card-4">
            <Flex className="card-content">
              <Space>
                <Title
                  level={4}
                  style={{
                    background:
                      "linear-gradient(99.6983deg, rgb(198, 252, 166) 0%, rgba(167, 252, 238, 0.74) 100%)",
                    WebkitBackgroundClip: `text`,
                    WebkitTextFillColor: `transparent`,
                    textAlign: "center",
                  }}
                >
                  IT HOME . 2017-2019
                </Title>

                <Text
                  style={{
                    color: "white",
                    fontFamily: "Caveat",

                    fontSize: "40px",
                  }}
                >
                  Frontend Developer
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Built patient registration and appointment
                  scheduling modules.
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Contributed to real-time analytics for
                  healthcare insights.
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Developed the HMS frontend with React/Redux.
                </Text>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Customized UI for compliance with HIPAA.
                </Text>

                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "18px",
                  }}
                >
                  <CiCircleCheck /> Designed responsive, intuitive interfaces.
                </Text>

                <Button
                  style={{
                    borderRadius: "12px",
                    background: "rgba(230, 230, 230, 1)",
                    border: "none",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    height: "50px",
                    width: "auto",
                    marginTop: "40px",
                  }}
                  size="large"
                  onClick={()=> openInNewTab("https://docs.google.com/document/d/1Cbm4Dwx9xM2m2Arr91B6Hqk58MhCmwkhb7cSWikqnLg/edit?pli=1")}
                >
                  <Text
                    strong
                    style={{
                      color: "rgb(44, 74, 119)",
                      alignItems: `center`,
                      fontSize: "16px",
                    }}
                  >
                    See more
                  </Text>
                </Button>
              </Space>
              <figure style={{  width: "80%", height:"60%", alignSelf: "center" }}>
                <ImageSider images={itImages} />
              </figure>
            </Flex>
          </Col>
        </Row>
      </Flex>
    </Flex>
  );
};

export default Works;
