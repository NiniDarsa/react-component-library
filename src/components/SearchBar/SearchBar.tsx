import React, { useState } from "react";
import styled from "styled-components";

export type SearchBarProps= {
  onSearch: (query: string) => void;
  placeholder:string
  className?: string;
  style?: React.CSSProperties;
}

const SearchBar = ({ onSearch,placeholder,className,style }:SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <SearchWrapper className={className} style={style}>
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <SearchIcon>&#128269;</SearchIcon> 
    </SearchWrapper>
  );
};

export default SearchBar;

const SearchWrapper = styled.div`
  position: relative;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #aaa;
`;