import { FC, useEffect, useState } from "react";
import "../styles/Herosection.css";
import {
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";

export type ValidTags = keyof typeof TAG_ICONS;

interface InfiniteLoopSliderProps {
  children: React.ReactNode;
  duration: number;
  reverse?: boolean | number; 
}

export const InfiniteLoopSlider: FC<InfiniteLoopSliderProps> = ({
  children,
  duration,
  reverse = false,
}) => {
  return (
    <div
      className="loop-slider"
      style={
        {
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        } as React.CSSProperties
      } 
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};


export const TAG_ICONS = {
  HTML: <FaHtml5 color="#E34F26" size={40} />, 
  CSS: <FaCss3Alt color="#1572B6" size={40} />,
  JavaScript: <FaJsSquare color="#F7DF1E" size={40} />,
  TypeScript: <SiTypescript color="#3178C6" size={40} />,
  React: <FaReact color="#61DAFB" size={40} />,
  "Next.js": <SiNextdotjs color="#fff" size={40} />,
  Redux: <BiLogoRedux color="#b77ee6" size={40} />,
  AWS: <FaAws color="#e6ab7e" size={40} />,
  MongoDB: <SiMongodb color="#2b800e" size={40} />,
  Python: <FaPython color="#7e8ee6" size={40} />,
};

interface TagProps {
  tag: ValidTags;
}

export const Tag: FC<TagProps> = ({ tag }) => {
  const IconComponent = TAG_ICONS[tag];

  return <div className="tag">{IconComponent && <>{IconComponent}</>}</div>;
};

export const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmall;
};