"use client"
import { Col, Row, Space, Typography } from 'antd'
import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const { Title ,Link} = Typography;

const Contact = () => {
  return (
    <div
    style={{
      marginLeft: `200px`,
    }}>
        
      <Row justify="center">
        <Col span={13}>
            <Title level={3}>Contact</Title>
            <Title   style={{ fontSize:"16px", fontWeight:200, lineHeight:"30px"}}>If you&apos;d like to collaborate, please send me an email or reach out on any of my social handles.</Title>
           
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
          <Title level={5} underline><a
             
              style={{ color: "black" }}
            >
             View Resume    
            </a></Title>
        </Col>
        <Col span={4}>
          
        </Col>
      </Row>
    </div>
  )
}

export default Contact