import React from "react";
export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    style?: React.CSSProperties;
};
declare const Pagination: ({ currentPage, totalPages, onPageChange, className, style }: PaginationProps) => React.JSX.Element;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map