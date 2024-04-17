"use client";
import { UpOutlined } from "@ant-design/icons";
import { Button, Flex, FloatButton, Typography } from "antd";
import React from "react";
const { Text } = Typography;
const Footer = () => {
  return (
    <Flex style={{ marginTop: "70px" }} justify="center">
      <Text>&copy; 2024 Sapana Subedi. All rights reserved.</Text>
      <FloatButton.BackTop>
        <Button shape="circle" icon={<UpOutlined />} />
      </FloatButton.BackTop>
    </Flex>
  );
};

export default Footer;
