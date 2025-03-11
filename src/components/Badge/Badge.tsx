import React from 'react';
import styled from 'styled-components';

export type BadgeProps= {
 variant:'success' | 'error' | 'warning'
 children:React.ReactNode
 size:number
 className?: string;
 style?: React.CSSProperties;
}

const Badge = ({ children,size=100,variant,className,style }:BadgeProps) => {
  return (
    <Wrapper size={size} variant={variant} className={className} style={style}>
       <p>{children}</p>
    </Wrapper>
  );
};

export default Badge;

const Wrapper = styled.p<{ size: number,variant:string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size/2}px;
  background-color: ${(props) =>
    props.variant === 'success'
      ? 'green'
      : props.variant === 'error'
      ? 'red'
      : 'orange'};
  border-radius: .4rem;
  padding: 2px 4px;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;



