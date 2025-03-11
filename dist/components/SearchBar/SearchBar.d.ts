import React from "react";
export type SearchBarProps = {
    onSearch: (query: string) => void;
    placeholder: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const SearchBar: ({ onSearch, placeholder, className, style }: SearchBarProps) => React.JSX.Element;
export default SearchBar;
//# sourceMappingURL=SearchBar.d.ts.map