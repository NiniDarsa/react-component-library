import React, { useState } from "react";
import styled from "styled-components";

export type TabProps= {
  label: string;
  content: React.ReactNode;
  
}

export type TabsProps= {
  items: TabProps[];
  className?: string;
  style?: React.CSSProperties;
}

const Tabs= ({ items,className,style }:TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={className} style={style}>
      <TabContainer>
        {items.map((item, index) => (
          <Tab key={index} isActive={activeTab === index} onClick={() => setActiveTab(index)}>
            {item.label}
          </Tab>
        ))}
      </TabContainer>
      <TabContent>{items[activeTab].content}</TabContent>
    </div>
  );
};

export default Tabs;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  background: ${({ isActive }) => (isActive ? "#f0f0f0" : "transparent")};
  color: red;
  border: 1px solid #ddd;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  &:hover {
    background: #e2e2e2;
  }
`;

const TabContent = styled.div`
  padding: 20px;
  border-top: 1px solid #ddd;
  background: #fafafa;
`;