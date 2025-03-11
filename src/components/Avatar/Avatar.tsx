import React from 'react';
import styled from 'styled-components';

export type AvatarProps= {
  src?: string;
  alt: string;
  size: number;
  className?: string;
  style?: React.CSSProperties;
}

const Avatar = ({ src, alt, size,className,style }:AvatarProps) => {
  return (
    <Wrapper size={size} className={className} style={style}>
      {src ? <Image src={src} alt={alt} /> : <span>{alt}</span>}
    </Wrapper>
  );
};

export default Avatar;

const Wrapper = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
