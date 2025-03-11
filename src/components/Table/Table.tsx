// src/components/Table.tsx
import React from 'react';
import styled from 'styled-components';

export type TableProps= {
  headers: string[];
  data: any[];
  className?: string;
  style?: React.CSSProperties;
}

const Table = ({ headers, data,className,style }:TableProps) => {
  return (
    <TableWrapper className={className} style={style}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader key={index}>{header}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {headers.map((header, colIndex) => (
              <TableCell key={colIndex}>{row[header]}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  padding: 12px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  text-align: left;
  color: black;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #595858;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;
