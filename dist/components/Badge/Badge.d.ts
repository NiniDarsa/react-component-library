import React from 'react';
export type BadgeProps = {
    variant: 'success' | 'error' | 'warning';
    children: React.ReactNode;
    size: number;
    className?: string;
    style?: React.CSSProperties;
};
declare const Badge: ({ children, size, variant, className, style }: BadgeProps) => React.JSX.Element;
export default Badge;
//# sourceMappingURL=Badge.d.ts.map