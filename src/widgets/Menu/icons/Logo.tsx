import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <h1
      style={{
        fontFamily: "taco",
        textTransform: "uppercase",
        fontSize: "20pt",
      }}
    >
      Taco Swap
    </h1>
  );
};

export default Logo;
