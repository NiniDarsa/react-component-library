import React from 'react';
export type ButtonGroupProps = {
    buttons: string[];
    onClick: (button: string) => void;
    className?: string;
    style?: React.CSSProperties;
};
declare const ButtonGroup: ({ buttons, onClick, className, style }: ButtonGroupProps) => React.JSX.Element;
export default ButtonGroup;
//# sourceMappingURL=ButtonGroup.d.ts.map