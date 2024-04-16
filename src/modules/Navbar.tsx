"use client";
import React, { FC } from "react";
import { Col, Row, Space, Typography } from "antd";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const { Title } = Typography;

const Navbar: FC = () => {
  return (
    <div
    style={{
      marginLeft: `200px`,
    }}>
      <Row justify="center">
        <Col span={12}>
          <Space size="large">
            <Title level={5}>WORKS</Title>
            <Title level={5}>CONTACT</Title>
          </Space>
        </Col>
       
        <Col span={4}>
          <Space size="large" >
            <a
              href="https://github.com/Sapnaasubedi"
              style={{ color: "black" }}
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/sapana-subedi-77227720a/"
              style={{ color: "black" }}
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100010663329163"
              style={{ color: "black" }}
            >
              <FaFacebookF size={25} />
            </a>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
