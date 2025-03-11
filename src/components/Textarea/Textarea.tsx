import React from 'react';
import styled from 'styled-components';

const Textarea = ({rows,className,style}:{rows:number,className?: string;
  style?: React.CSSProperties}) => {
  return <TextareaWrapper rows={rows} className={className} style={style} />;
};

export default Textarea;
const TextareaWrapper = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;