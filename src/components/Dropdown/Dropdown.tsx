import React, { useState } from 'react';
import styled from 'styled-components';

export type DropdownProps= {
  options: string[];
  onSelect: (selectedOption: string) => void;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

const Dropdown = ({ options, onSelect, label,className,style }:DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper className={className} style={style}>
      <label>{label}</label>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
        <span>{isOpen ? '▲' : '▼'}</span>
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 5px 0 0 0;
  padding: 0;
  list-style: none;
  max-height: 150px;
  overflow-y: auto;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

