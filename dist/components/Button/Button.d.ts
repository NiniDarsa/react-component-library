import React from 'react';
export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    style?: React.CSSProperties;
};
export declare const Button: ({ children, onClick, variant, disabled, size, className, style }: ButtonProps) => React.JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map