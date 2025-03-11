import React, { useState } from 'react';
import styled from 'styled-components';

const TimePicker = ({className,style}:{className?: string;
  style?: React.CSSProperties}) => {
  const [time, setTime] = useState('');

  return (
    <TimePickerWrapper
      className={className}
      style={style}
      type="time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
    />
  );
};

export default TimePicker;
const TimePickerWrapper = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;