import React from 'react';
export type InputProps = {
    type: "text" | "password" | "checkbox" | "radio";
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    label: string;
    placeholder?: string;
    error?: string;
    className?: string;
    style?: React.CSSProperties;
};
export declare const Input: ({ type, value, onChange, disabled, label, placeholder, error, className, style }: InputProps) => React.JSX.Element;
export default Input;
//# sourceMappingURL=Input.d.ts.map