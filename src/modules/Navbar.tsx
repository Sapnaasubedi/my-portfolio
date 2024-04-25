"use client";
import React, { FC } from "react";
import { Col, Row, Space, Typography } from "antd";

const { Title } = Typography;

const Navbar: FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div
    style={{
      marginLeft: `200px`,
    }}>
      <Row justify="center">
        <Col span={12}>
          <Space size="large">
          <Title level={3} style={{ background:
              "linear-gradient(90deg, rgba(174,238,204,1) 35%, rgba(174,199,228,1) 91%)",
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`}} >SS</Title>
          </Space>
        </Col>
       
        <Col span={4}>
          <Space size="large" >
          <Title level={5} onClick={() => scrollToSection("works")}>WORKS</Title>
            <Title level={5} onClick={() => scrollToSection("contact")}>CONTACT</Title>
            <Title level={5} onClick={() => scrollToSection("skills")}>SKILLS</Title>
            
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
