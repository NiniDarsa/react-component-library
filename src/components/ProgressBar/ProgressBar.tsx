import React from "react";
import styled from "styled-components";

export type ProgressBarProps= {
  percentage: number;
  className?: string;
  style?: React.CSSProperties;
}

const ProgressBar = ({ percentage,className,style }:ProgressBarProps) => {
  return (
    <ProgressWrapper className={className} style={style}>
      <ProgressFill percentage={percentage} />
    </ProgressWrapper>
  );
};

export default ProgressBar;
const ProgressWrapper = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 20px;
  height: 20px;
`;

const ProgressFill = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => `${percentage}%`};
  height: 100%;
  background-color: #157419;
  border-radius: 20px 0 0 20px;
  transition: all 0.4s ease;
`;