import React from 'react';
import styled from 'styled-components';

export type SpinnerProps={
  size:number
  className?: string;
  style?: React.CSSProperties;
}
const Spinner = ({size,className,style}:SpinnerProps) => <SpinnerWrapper size={size} className={className} style={style}/>;

export default Spinner;
const SpinnerWrapper = styled.div<{size:number}>`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: ${(props) => (props.size ? props.size : '48')}px;
  height: ${(props) => (props.size ? props.size : '48')}px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;