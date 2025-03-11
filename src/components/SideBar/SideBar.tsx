import React from "react";
import styled from "styled-components";


const Sidebar = ({className,style}:{className?: string;
  style?: React.CSSProperties;}) => {
  return (
    <SidebarContainer className={className} style={style}>
      <SidebarItem>Home</SidebarItem>
      <SidebarItem>About Us</SidebarItem>
      <SidebarItem>Profile</SidebarItem>
      <SidebarItem>Settings</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #39526c;
  padding: 20px;
  position: fixed;
`;

const SidebarItem = styled.div`
  color: white;
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #34495e;
  &:hover {
    background-color: #34495e;
  }
`;
