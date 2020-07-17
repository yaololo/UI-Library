import Pagination from "components/pagination";
import React from "react";
import { ITablePaginationProps } from "./interfaces";

const TablePagination = (props: ITablePaginationProps) => {
  const { currPage, onChange, defaultPageSize = 10, totalDataLength } = props;
  const totalPages = Math.ceil(totalDataLength / defaultPageSize);
  return (
    <Pagination
      currentPage={currPage}
      totalPages={totalPages}
      goToPage={(pageNumber) => onChange(pageNumber, defaultPageSize)}
    ></Pagination>
  );
};

export default TablePagination;
