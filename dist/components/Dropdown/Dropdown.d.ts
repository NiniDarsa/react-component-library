import React from 'react';
export type DropdownProps = {
    options: string[];
    onSelect: (selectedOption: string) => void;
    label: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const Dropdown: ({ options, onSelect, label, className, style }: DropdownProps) => React.JSX.Element;
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map