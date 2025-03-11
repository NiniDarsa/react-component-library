import React, { useState } from 'react';
import styled from 'styled-components';

export type AccordionProps ={
  title: string;
  content: string;
  className?: string;
  style?: React.CSSProperties;
}

const Accordion= ({ title, content, className, style }:AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionItem className={className} style={style}>
      <AccordionHeader onClick={()=>setIsOpen(!isOpen)}>{title}</AccordionHeader>
      <AccordionContent isOpen={isOpen}>{content}</AccordionContent>
    </AccordionItem>
  );
};

const AccordionGroup = ({ items }:{items:AccordionProps[]}) => {
  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </AccordionContainer>
  );
};

export default AccordionGroup;


const AccordionContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  color: black;
`;

const AccordionItem = styled.div`
  border-top: 1px solid #ddd;
`;

const AccordionHeader = styled.div`
  padding: 16px;
  background-color: #f4f4f4;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e2e2e2;
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: 16px;
  background-color: #fafafa;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;


