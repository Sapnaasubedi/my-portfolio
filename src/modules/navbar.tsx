"use client";
import React, { FC } from "react";
import { Col, Flex, Row, Space, Typography } from "antd";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const { Title, Text } = Typography;

const Navbar: FC = () => {
  return (
    <>
      <Row>
        <Col span={10}>
          <Space size="large">
            <Title level={5}>WORKS</Title>
            <Title level={5}>CONTACT</Title>
          </Space>
        </Col>
        <Col span={6}>
          <Title  italic level={5}>
            SAPANA <br />
            SUBEDI
          </Title>
        </Col>
        <Col span={6}>
          <Space size="large"><FaGithub size={25}/>
          <FaLinkedin  size={25}/>
          <FaFacebookF  size={25}/></Space>
          
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
