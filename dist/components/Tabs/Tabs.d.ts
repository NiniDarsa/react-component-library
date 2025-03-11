import React from "react";
export type TabProps = {
    label: string;
    content: React.ReactNode;
};
export type TabsProps = {
    items: TabProps[];
    className?: string;
    style?: React.CSSProperties;
};
declare const Tabs: ({ items, className, style }: TabsProps) => React.JSX.Element;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map