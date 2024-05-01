import { Space } from "antd";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div style={{ position: "fixed", top: "50%", right: "20px", transform: "translateY(-50%)" }}>
    <Space direction="vertical" size="large">
      <a href="https://github.com/Sapnaasubedi" style={{ color: "white" }}>
        <FaGithub size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/sapana-subedi-77227720a/"
        style={{ color: "white" }}
      >
        <FaLinkedin size={25} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100010663329163"
        style={{ color: "white" }}
      >
        <FaFacebookF size={25} />
      </a>
      <a
        href="mailto:sapnasubedi797@gmail.com"
        style={{ color: "white" }}
      >
        <CgMail size={35} />
      </a>
    </Space>
  </div>
  );
};

export default Social;
