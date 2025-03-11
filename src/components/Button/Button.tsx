import React from 'react';
import styled from 'styled-components';

export type ButtonProps= {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
}

export const Button= ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  className,
  style
}:ButtonProps) => {
  return (
    <ButtonStyled className={className} style={style} onClick={onClick}  disabled={disabled} variant={variant} size={size}>
      {children}
    </ButtonStyled>
  );
};
export default Button

const ButtonStyled = styled.button<ButtonProps>`
  padding: ${(props) => (props.size === 'small' ? '4px 8px' : props.size === 'large' ? '17px 32px' : '10px 20px')};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${(props) => props.variant === 'primary' &&
    `background-color: #007bff;
    color: white;
    &:hover {
      background-color: #0056b3;
    }
  `}

  ${(props) =>props.variant === 'secondary' &&
    `background-color: #6c757d;
    color: white;
    &:hover {
      background-color: #5a6268;
    }
  `}

  ${(props) => props.disabled &&
    `background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  `}
`;