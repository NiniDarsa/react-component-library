import React from 'react';
import styled from 'styled-components';

export type ButtonGroupProps = {
  buttons: string[];
  onClick: (button: string) => void;
  className?: string;
  style?: React.CSSProperties;
};

const ButtonGroup = ({ buttons, onClick,className,style }:ButtonGroupProps) => (
  <ButtonGroupContainer className={className} style={style}>
    {buttons.map((button) => (
      <Button key={button} onClick={() => onClick(button)}>
        {button}
      </Button>
    ))}
  </ButtonGroupContainer>
);

export default ButtonGroup;

const ButtonGroupContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
