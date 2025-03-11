  import React from "react";
  import styled from "styled-components";


  export type PaginationProps ={
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    style?: React.CSSProperties;
  }

  const Pagination = ({ currentPage, totalPages, onPageChange,className,style }:PaginationProps) => {
  const pages=[]
  for(let i=0;i<totalPages;i++){
      pages.push(i+1)
  }
    return (
      <PaginationWrapper className={className} style={style}>
        {pages.map((page) => (
          <PageButton key={page} isActive={page === currentPage} onClick={() => onPageChange(page)}>
            {page}
          </PageButton>
        ))}
      </PaginationWrapper>
    );
  };

  export default Pagination;

  const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `;

  const PageButton = styled.button<{ isActive: boolean }>`
    padding: 10px 20px;
    background-color: ${({ isActive }) => (isActive ? "#4caf50" : "#fff")};
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
      background-color: #e0e0e0;
    }
  `;