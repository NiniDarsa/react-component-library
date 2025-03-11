import React from "react";
import styled from "styled-components";

export type ListProps= {
  items: string[];
  className?: string;
  style?: React.CSSProperties;
}

const List= ({ items,className,style }:ListProps) => {
  return (
    <ListContainer className={className} style={style}>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: black;
`;

const ListItem = styled.li`
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
  &:hover {
    background-color: #f1f1f1;
  }
`;
