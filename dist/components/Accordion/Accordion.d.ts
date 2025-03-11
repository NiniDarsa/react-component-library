import React from 'react';
export type AccordionProps = {
    title: string;
    content: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const AccordionGroup: ({ items }: {
    items: AccordionProps[];
}) => React.JSX.Element;
export default AccordionGroup;
//# sourceMappingURL=Accordion.d.ts.map