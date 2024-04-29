"use client";
import { Button, Card, Col, Flex, Row, Space, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { HiSparkles } from "react-icons/hi";
const { Title, Text } = Typography;
import Spark from "@/app/assets/spark.png";
import Book from "@/app/assets/Book.webp";
import "../styles/Herosection.css";

const BeyondPortfolio = () => {
  return (
    <Row gutter={[16, 16]} style={{ justifyContent: "center" }}>
      <Col xs={24} sm={24} md={12} lg={4}>
        <Space direction="vertical" style={{ textAlign: "left" }}>
          <Title
            level={3}
            style={{
              background:
                "linear-gradient(90deg, rgba(46,60,134,1) 0%, rgba(103,141,228,1) 53%, rgba(61,61,89,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BEYOND PORTFOLIO
          </Title>

          <Text
            style={{
              color: "white",
              fontFamily: "cursive",
              fontSize: "46px",
              fontWeight: 700,
            }}
          >
            Let &apos;s know more about me
          </Text>

          <Card
            style={{
              background: "none 0% 0%",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              overflow: "hidden",
              opacity: "1",
            }}
          >
            <Space direction="vertical" size="large">
              <Space>
                <Image src={Spark.src} height={40} width={40} alt="" />
                <Text style={{ color: "white", fontSize: "24px" }}>
                  Current Read
                </Text>
              </Space>
              <Text
                style={{
                  color: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.5))",
                  fontSize: "18px",
                }}
              >
                Becoming — By Michelle Obama
              </Text>
              <div className="avatar-wrapper">
                <Image
                  className="avatar"
                  src={Book.src}
                  height={200}
                  width={300}
                  alt=""
                  style={{ marginBottom: "-87px", zIndex: 1 }}
                ></Image>
                <div
                  className="avatar"
                  style={{
                    background:
                      "linear-gradient(99.69833281472663deg, var(--token-e4fe9052-f52e-4ea9-884d-9d363b322bb6, rgb(81, 137, 221)) 13.003213324102086%, hsl(216, 55%, 69%) 50.02234853587204%, var(--token-690b9193-65fe-4a18-9337-7cb47aa60643, rgb(178, 202, 235))  100%)",
                    filter: "blur(50.8857px)",
                    transform: "translateX(-0%) rotate(-90deg)",
                    borderRadius: "100%",
                    marginBottom: "-917px",
                    zIndex: -1,
                  }}
                ></div>
              </div>
            </Space>
          </Card>
        </Space>
      </Col>

      <Col xs={24} sm={24} md={12} lg={6}>
        <Card
          style={{
            background: "none 0% 0%",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            overflow: "hidden",
            opacity: "1",
          }}
        >
          <Space direction="vertical" size="large">
            <Space>
              <Image src={Spark.src} height={40} width={40} alt="" />
              <Text style={{ color: "white", fontSize: "24px" }}>
               My Tech Stacks
              </Text>
            </Space>
            <Text
              style={{
                color: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.5))",
                fontSize: "18px",
              }}
            >
             I utilized a sophisticated set of tools to deliver a high-quality software development process.
            </Text>
           
          </Space>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={6}>
        <Card
          style={{
            background: "none 0% 0%",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            overflow: "hidden",
            opacity: "1",
          }}
        >
          <Space direction="vertical" size="large">
            <Space>
              <Image src={Spark.src} height={40} width={40} alt="" />
              <Text style={{ color: "white", fontSize: "24px" }}>
               My Persona
              </Text>
            </Space>
            <Text
              style={{
                color: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.5))",
                fontSize: "18px",
              }}
            >
            Know me as a person
            </Text>
           
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default BeyondPortfolio;
