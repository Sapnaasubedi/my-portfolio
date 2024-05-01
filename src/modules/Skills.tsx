"use client";
import { Col, Row, Typography, Card,  Space } from "antd";
import React from "react";
import Spark from "@/app/assets/spark.png";
import Image from "next/image";
import { InfiniteLoopSlider, TAG_ICONS, Tag } from "./AboutMe/InfiniteLoop";

const { Title, Text } = Typography;

const Skills = () => {
  return (
    <Row justify="center" id="skills" style={{ marginTop: "200px" }}>
      <Col xs={24} sm={24} md={15}>
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
            <Title
              level={5}
              style={{
                color: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.5))",
                fontSize: "18px",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              I utilized a sophisticated set of tools to deliver a high-quality
              software development process.
            </Title>
            <div className="tag-list">
              {[...Array(1)].map((_, i) => (
                <InfiniteLoopSlider key={i} duration={15000} reverse={i % 2}>
                  {Object.keys(TAG_ICONS).map((tag) => (
                    <Tag tag={tag} key={tag} />
                  ))}
                </InfiniteLoopSlider>
              ))}
            </div>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default Skills;
