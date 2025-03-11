import React from 'react';
import styled from 'styled-components';

export type ToggleProps ={
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Toggle = ({ checked, onChange,className,style }:ToggleProps) => {
  return (
    <ToggleWrapper className={className} style={style} checked={checked} onClick={() => onChange(!checked)}>
      <ToggleBall checked={checked} />
    </ToggleWrapper>
  );
};

export default Toggle;

const ToggleWrapper = styled.div<{checked:boolean}>`
  display: inline-block;
  width: 50px;
  height: 25px;
  background-color: ${({ checked }: { checked: boolean }) => (checked ? '#4caf50' : '#ccc')};
  border-radius: 25px;
  position: relative;
  cursor: pointer;
`;

const ToggleBall = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ checked }) => (checked ? '26px' : '4px')};
  transition: left 0.2s;
`;