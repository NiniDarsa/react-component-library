import React, { useState } from "react";
import styled from "styled-components";


export type RatingProps= {
  maxRating: number;
  className?: string;
  style?: React.CSSProperties;
}

const Rating = ({ maxRating,className,style }:RatingProps) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index: number) => {
    setRating(index + 1);
  };

  const array=[]
  for(let i=0;i<maxRating;i++){
    array.push(i)
  }

  return (
    <RatingWrapper className={className} style={style}>
      {array.map((_,index)=>(
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleClick(index)}
        >
          &#9733;
        </Star>
      )) }
    </RatingWrapper>
  );
};

export default Rating;

const RatingWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const Star = styled.div<{ filled: boolean }>`
  font-size: 24px;
  color: ${({ filled }) => (filled ? "#FFD700" : "#d3d3d3")};
`;

