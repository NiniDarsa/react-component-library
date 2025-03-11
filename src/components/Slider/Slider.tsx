import React, { useState } from 'react';
import styled from 'styled-components';

export type SliderProps={
    defautValue:number
    className?: string;
    style?: React.CSSProperties;
}

const Slider= ({defautValue,className,style}:SliderProps) => {
  const [value, setValue] = useState(defautValue);

  return (
    <SliderWrapper className={className} style={style}>
      <SliderInput
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <div>{value}</div>
    </SliderWrapper>
  );
};

export default Slider;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 300px;
`;

const SliderInput = styled.input`
  width: 100%;
`;
