"use client";
import { UpOutlined } from "@ant-design/icons";
import { Button, Flex, FloatButton, Typography } from "antd";
import React from "react";
const { Text } = Typography;
const Footer = () => {
  return (<><Flex style={{ background:"#282828" ,}} justify="center">
  <Text style={{color:"white"}} >&copy; 2024 Sapana Subedi. All rights reserved.</Text>
  
</Flex>
<FloatButton.BackTop style={{alignItems:"left"}}> 
<Button  shape="circle" icon={<UpOutlined />} />
</FloatButton.BackTop></>
    
  );
};

export default Footer;
