"use client";
import {
  Row,
  Col,
  Typography,
  Flex,
  Timeline,
  Collapse,
  CollapseProps,
} from "antd";
import Image from "next/image";
import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import Takeo from "../app/assets/takeo-logo.svg";
import LightWeb from "../app/assets/lightweb-logo-e1665377130391.png";
const { Title, Text, Link } = Typography;

const StyledTimeline = styled(Timeline)`
  &&.ant-timeline {
    width: 100%;
    margin-top: 50px;
  }
  &&.ant-timeline .ant-timeline-item-tail {
    border-inline-start: 3px solid #dddddd;
  }
  &&.ant-timeline .ant-timeline-item-head {
    width: 30px;
    height: 30px;
    margin-inline-start: -13px;
  }
  &&.ant-timeline .ant-timeline-item {
    padding-bottom: 90px;
  }
  &&.ant-timeline .ant-timeline-item-left .ant-timeline-item-content {
    inset-block-start: -5px;
    inset-inline-start: 50%;
  }
  &&.ant-timeline .ant-timeline-item .ant-timeline-item-head-blue {
    color: #d4f1ea;
    border-color: #d4f1ea;
    background: #d4f1ea;
  }
`;

const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle,
  ) => [
    {
      key: "1",
      label: <Text strong>{expanded ? "See less" : "See More"}</Text>,
      children: (
        <Flex vertical>
          <Text strong>Activities</Text>
          <ul>
            <li>
              Worked with React-hooks, react-router, react-redux, redux toolkit
            </li>
            <li>
              Used useState, useRef, useEffect hook for different use cases of
              variables and controlled and uncontrolled components for different
              use cases.
            </li>
            <li>
              Worked with react-swiper, react-scroll for smooth scrolling and
              navigation on different sections in a page
            </li>
            <li>
              Used Axios, SWR, Node js for hitting REST endpoints and fetching
              data in the app and tested Rest endpoints using postman
            </li>
            <li>
              Used husky and pre-commit hooks to improve commit and manages the
              installation and execution of any hook written in any language
              before every commit
            </li>
            <li>
              Configured rules for ESLINT which in turn helps the developers to
              write safe neat and error less code and wrote hooks file to
              validate these lint errors before allowing developers to commit.
            </li>
          </ul>
          <Text>Worked on following Website</Text>
          <Link>https://www.takeo.ai/</Link>
        </Flex>
      ),
      style: panelStyle,
    },
  ];
  const getItem: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle,
  ) => [
    {
      key: "2",
      label: <Text strong>{expanded ? "See Less" : "See More"}</Text>,
      children: (
        <Flex vertical>
          <Text strong>Activities</Text>
          <ul>
            <li>
              Implemented advanced product catalog features including search
              filters, sorting options, and personalized product
              recommendations, dramatically improving product discover ability
              and boosting sales.
            </li>
            <li>
              Integrated secure third-party payment gateways such as PayPal and
              Stripe, streamlining the checkout process and enhancing customer
              confidence through secure transaction capabilities.
            </li>
            <li>
              Collaborated with backend developers to deploy robust inventory
              management and order processing functionalities, ensuring accurate
              real-time synchronization of product availability and order status
            </li>
            <li>
              Maintained exemplary code quality and reduced post-deployment
              issues by 30% through comprehensive refactoring and diligent
              testing using JUnit and Mockito.
            </li>
            <li>
              Engineered dynamic and responsive user interfaces using Angular,
              leading to measurable increases in user engagement and
              satisfaction.
            </li>
          </ul>
        </Flex>
      ),
      style: panelStyle,
    },
  ];
  const panelStyle: React.CSSProperties = {
    background: "#fffff",
    borderRadius: "20px",
    border: "none",
  };
  return (
    <div
      id="works"
      style={{
        marginLeft: `200px`,
      }}
    >
      <Row justify="center">
        <Col span={16}>
          <Title level={3}>Experience</Title>
        </Col>

        <Col span={12}>
          <StyledTimeline
            items={[
              {
                label: (
                  <Flex>
                    <Image
                      src={Takeo.src}
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </Flex>
                ),
                children: (
                  <Flex vertical justify="left">
                    <Title level={5}>Software Engineer</Title>
                    <Title level={5} style={{ color: "#808080" }}>
                      Takeo
                    </Title>
                    <Text italic style={{ color: "#808080" }}>
                      from september 2020
                    </Text>
                    <Text>
                      Worked as a software engineer based on React and Next.js
                      on the front end.
                    </Text>
                    <Collapse
                      bordered={false}
                      defaultActiveKey={["1"]}
                      items={getItems(panelStyle)}
                      style={{ background: "#ffff" }}
                      onChange={toggleExpanded}
                    />
                  </Flex>
                ),
              },
              {
                label: (
                  <Flex justify="right">
                    <Image
                      src={LightWeb.src}
                      alt="logo"
                      width={300}
                      height={100}
                    />
                  </Flex>
                ),
                children: (
                  <Flex vertical style={{ textAlign: "start" }}>
                    <Title level={5}>Forntend Engineer</Title>
                    <Title level={5} style={{ color: "#808080" }}>
                      Lightweb Group
                    </Title>
                    <Text italic style={{ color: "#808080" }}>
                      from Feb2019 to Aug 2021
                    </Text>
                    <Text>
                      Expertly designed and developed user-centric frontend
                      interfaces for a dynamic e-commerce platform using
                      React.js, significantly enhancing the shopping experience
                      through intuitive navigation and seamless interaction.
                    </Text>
                    <Collapse
                      bordered={false}
                      defaultActiveKey={["2"]}
                      items={getItem(panelStyle)}
                      style={{ background: "#ffff" }}
                      onChange={toggleExpanded}
                    />
                  </Flex>
                ),
              },
              {
                label: "",
                children: "",
              },
            ]}
            mode="alternate"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
