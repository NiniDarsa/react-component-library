import React, { useState } from 'react';
import styled from 'styled-components';


export type TooltipProps= {
  text: string;
  children: React.ReactNode;
  position:string
  className?: string;
  style?: React.CSSProperties;
}

const Tooltip = ({ text, children,position,className,style }:TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipTarget
      className={className}
      style={style}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <TooltipWrapper visible={isVisible} position={position}>{text}</TooltipWrapper>
    </TooltipTarget>
  );
};

export default Tooltip;
const TooltipWrapper = styled.div<{ visible: boolean,position:string }>`
  opacity: ${(props) => (props.visible ? '1' : '0')};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 5px 10px;
  border-radius: 2px;
  font-size: 10px;
  transition: all 0.4s ease-in-out;

  ${({ position }) => {
    switch (position) {
      case 'top':
        return `bottom: 100%; left: 50%; transform: translateX(-50%);`;
      case 'right':
        return `top: 50%; left: 100%; transform: translateY(-50%);`;
      case 'bottom':
        return `top: 100%; left: 50%; transform: translateX(-50%);`;
      case 'left':
        return `top: 50%; right: 100%; transform: translateY(-50%);`;
      default:
        return `bottom: 100%; left: 50%; transform: translateX(-50%);`;
    }
  }}
`;

const TooltipTarget = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-left: 40px;
`;
