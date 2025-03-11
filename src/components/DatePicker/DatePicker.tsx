import React, { useState } from 'react';
import styled from 'styled-components';

const DatePicker= ({className,style}:{className?: string;
  style?: React.CSSProperties;}) => {
  const [date, setDate] = useState('');

  return (
    <DatePickerWrapper
    className={className}
    style={style}
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    />
  );
};

export default DatePicker;
const DatePickerWrapper = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
