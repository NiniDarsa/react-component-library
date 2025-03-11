import React from 'react';
export type CardProps = {
    imgUrl?: string;
    title: string;
    description: string;
    actions?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
export declare const Card: ({ imgUrl, title, description, actions, children, className, style }: CardProps) => React.JSX.Element;
export default Card;
//# sourceMappingURL=Card.d.ts.map