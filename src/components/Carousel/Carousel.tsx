import React, { useState } from "react";
import styled from "styled-components";

export type CarouselProps= {
  images: string[];
  className?: string;
  style?: React.CSSProperties;
}

const Carousel = ({ images,className,style }:CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev+ 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>prev === 0 ? images.length - 1 : prev - 1);
  };

  return (
    <CarouselWrapper className={className} style={style}>
      <CarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Slide key={index} backgroundImage={image} />
        ))}
      </CarouselContent>
      <Arrow left onClick={prevSlide}> &lt;</Arrow>
      <Arrow onClick={nextSlide}>&gt;</Arrow>
    </CarouselWrapper>
  );
};

export default Carousel;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: all 0.5s ease-in-out;
`;

const Slide = styled.div<{ backgroundImage: string }>`
  min-width: 100%;
  height: 300px;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
`;

const Arrow = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  font-size: 24px;
  color: black;
  cursor: pointer;
`;

