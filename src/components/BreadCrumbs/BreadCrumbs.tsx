import React from 'react';
import styled from 'styled-components';

export type BreadcrumbsProps= {
  items: string[];
  className?: string;
  style?: React.CSSProperties;
}

const Breadcrumbs = ({ items,className,style }:BreadcrumbsProps) => {
  return (
    <BreadcrumbsWrapper className={className} style={style}>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} isLast={index === items.length - 1}>
          {item}
        </BreadcrumbItem>
      ))}
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;

const BreadcrumbsWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

const BreadcrumbItem = styled.div<{ isLast: boolean }>`
  font-size: 14px;
  color: ${({ isLast }) => (isLast ? 'gray' : '#3084de')};
  &:not(:last-child) {
    margin-right: 8px;
  }
  &:not(:last-child)::after {
    content: '>';
    margin-left: 8px;
  }
`;