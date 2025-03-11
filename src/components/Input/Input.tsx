import React from 'react';
import styled from 'styled-components';

export type InputProps= {
  type:"text"|"password"|"checkbox"|"radio"
  value?:string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?:boolean
  label: string;
  placeholder?: string;
  error?: string; 
  className?: string;
  style?: React.CSSProperties;
}

export const Input = ({
  type="text",
  value,
  onChange,
  disabled=false,
  label="",
  placeholder="",
  error="",
  className,
  style
}:InputProps) => {
  return (
    <div className={className} style={style}>
    <LabelStyled>{label}
    <InputStyled 
    label={label} //???????????
    type={type}
    value={value}   
    onChange={onChange}
    disabled={disabled} 
    placeholder={placeholder} 
    error={error}/>
    {error && <ErrorMessage>{error}</ErrorMessage>}
    </LabelStyled>
    </div>
  );
};
export default Input
const InputStyled = styled.input<InputProps>`
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  ${(props) =>
    props.error &&
    `
    border-color: red;
  `}
  ${(props) => props.disabled &&
    `background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  `}
`;



const LabelStyled = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: #1d1f1f;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;



