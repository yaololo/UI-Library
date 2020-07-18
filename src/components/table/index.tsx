import React, { useReducer, useEffect, Fragment } from "react";
import { ITableProps } from "./interfaces";
import { paginationChangeReducer } from "./reducers";
import { StyledTable, StyledTr, StyledTHead } from "./styles";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";

const Table = <T extends {}>(props: ITableProps<T>) => {
  const {
    tHeaderData,
    tBodyData,
    role,
    tableClassPrefix,
    headerAlignment = "center",
    bodyAlignment = "center",
    expandIconPosition = "behind",
    withPagination,
    defaultPageSize = 10,
    subComponent,
  } = props;

  const tablePreCls = tableClassPrefix ? tableClassPrefix + "-" : "";
  const noOfColumns = tHeaderData.length;

  const initPaginationState = {
    currPage: 1,
    currPageData: tBodyData?.slice(0, defaultPageSize),
  };

  const [paginationState, dispatch] = useReducer(paginationChangeReducer, initPaginationState);

  const handlePaginationChange = (pageNumber: number, pageSize: number) => {
    dispatch({
      type: "PAGE_CHANGE",
      payload: {
        tBodyData,
        currPage: pageNumber,
        pageSize,
      },
    });
  };

  useEffect(() => {
    if (withPagination) {
      dispatch({
        type: "PAGE_CHANGE",
        payload: {
          tBodyData: tBodyData,
          currPage: 1,
          pageSize: defaultPageSize,
        },
      });
    }
  }, [JSON.stringify(tBodyData)]);

  return (
    <div>
      <StyledTable
        role={role}
        className={tablePreCls + "customized-table"}
        headerAlignment={headerAlignment}
        bodyAlignment={bodyAlignment}>
        <StyledTHead>
          <StyledTr className={tablePreCls + "head-tr"}>
            {subComponent && expandIconPosition === "front" && <th className="table-expander"></th>}
            {tHeaderData.map((item) => {
              const { key, title } = item;

              return (
                <Fragment key={key}>
                  <th className={tablePreCls + "table-header"}>
                    <span>{title}</span>
                  </th>
                </Fragment>
              );
            })}
            {subComponent && expandIconPosition === "behind" && <th className="table-expander"></th>}
          </StyledTr>
        </StyledTHead>
        <TableBody
          tBodyData={(withPagination && paginationState.currPageData) || tBodyData}
          tHeaderData={tHeaderData}
          noOfColumns={noOfColumns}
          tablePreCls={tablePreCls}
          expandIconPosition={expandIconPosition}
          subComponent={subComponent}
        />
      </StyledTable>
      {withPagination && (
        <TablePagination
          currPage={paginationState.currPage}
          totalDataLength={tBodyData.length}
          defaultPageSize={defaultPageSize}
          onChange={handlePaginationChange}></TablePagination>
      )}
    </div>
  );
};

export default Table;
