"use client";
import { Col, Row, Typography, Card, Button } from "antd";
import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { CgBitbucket } from "react-icons/cg";
import { DiDjango } from "react-icons/di";
import {
  FaArrowRight,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineCss } from "react-icons/md";
import {
  SiAntdesign,
  SiAxios,
  SiMaterialdesign,
  SiPostman,
  SiSwr,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import styled from "styled-components";

const { Title, Text } = Typography;
const StyleCard = styled(Card)`
  background: #f2f2f2;
  border-color: #f2f2f2;

  &:hover {
    background: #d4f1ea;
  }
`;
const Skills = () => {
  return (
    <div id="skills">
      <Row justify="center" gutter={[20, 20]}>
        <Col span={12}>
          <Title level={4}>Stack</Title>

          {/* <Row gutter={[50, 50]}>
              <Col span={22}>
                <Text strong type="secondary">
                  Tools and Technologies
                </Text>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <FaHtml5 size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <IoLogoJavascript size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <BiLogoTypescript size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <MdOutlineCss size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <FaReact size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <TbBrandRedux size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <SiAxios size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <SiSwr size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <SiAntdesign size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <SiMaterialdesign size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <FaNode size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <DiDjango size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <SiPostman size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <FaFigma size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <FaGitAlt size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <FaGithub size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard>
                  <CgBitbucket size={60} />
                </StyleCard>
              </Col>
              <Col span={4}>
                <StyleCard style={{ justifyContent: "space-around" }}>
                  <TbBrandNextjs size={60} />
                </StyleCard>
              </Col>
            
            </Row> */}
        </Col>
        <Col>
          <Button
            style={{
              background: "rgb(249, 249, 251)",
              borderRadius: "24px",
              boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;",
              border: "none",
            }}
          >
            Full Stack &nbsp;&nbsp;
            <FaArrowRight />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
