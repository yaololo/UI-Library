import React, { Fragment, useState, useEffect } from "react";
import {
  Row,
  StyledExpander,
  StyledSubComponentRow,
  StyledExpanderWrapper,
  StyledEmptyViewWrapper,
  StyledTBody
} from "./styles";
import { StyledDownArrow, StyledRightArrow } from "components/arrows";
import {
  ISubComponentProps,
  ITbodyProps,
  IRowRendererProps
} from "./interfaces";

/**
 * @typedef {import('./interfaces').IProps} TableProps
 * @typedef {TableProps["tBodyData"]} TBodyData
 * @typedef {TableProps["tHeaderData"]} THeaderData
 * @typedef {TableProps["subComponent"]} SubComponent
 * @typedef {import('./interfaces').ITBodyProps} TBodyProps
 * @typedef {import('./interfaces').ExpenderPosition} ExpenderPosition
 */

/**
 * @typedef {import("preact/hooks/src").StateUpdater<T>} StateUpdater
 * @template T
 */

const EmptyView = (props: { noOfColumns: number }) => {
  return (
    <StyledEmptyViewWrapper>
      <td colSpan={props.noOfColumns}>No data</td>
    </StyledEmptyViewWrapper>
  );
};

const SubComponent = <T extends {}>(
  subComponentProps: ISubComponentProps<T>
) => {
  const { subComponent, noOfColumns, record, isExpanded } = subComponentProps;

  return subComponent ? (
    <StyledSubComponentRow
      className={"sub-component-tr"}
      isExpanded={isExpanded}
    >
      <td colSpan={noOfColumns + 1} className={"sub-component-td"}>
        {subComponent({ record, isExpanded })}
      </td>
    </StyledSubComponentRow>
  ) : null;
};

const RowRenderer = <T extends {}>(rowProps: IRowRendererProps<T>) => {
  const {
    expandIconPosition,
    tHeaderData,
    tablePreCls,
    rowData,
    noOfColumns,
    subComponent
  } = rowProps;

  /**
   *@type {[boolean, StateUpdater<boolean>]}
   */
  const [isExpanded, setIsExpandState] = useState(false);

  const handleExpanderClick = () => {
    const newExpandState = !isExpanded;
    setIsExpandState(newExpandState);
  };

  useEffect(() => {
    setIsExpandState(false);
  }, [JSON.stringify(rowData)]);

  return (
    <Fragment>
      <Row className="body-tr">
        {subComponent && expandIconPosition === "front" && (
          <td className="table-expander">
            <StyledExpander onClick={handleExpanderClick}>
              button
            </StyledExpander>
          </td>
        )}
        {tHeaderData.map((headerItems) => {
          const { dataIndex, key, render } = headerItems;

          return (
            <td className={tablePreCls + "table-body"} key={key}>
              {render ? render(rowData) : rowData[dataIndex] || "-"}
            </td>
          );
        })}
        {subComponent && expandIconPosition === "behind" && (
          <td className={tablePreCls + "table-expander"}>
            {isExpanded ? (
              <StyledExpanderWrapper onClick={handleExpanderClick}>
                <StyledDownArrow />
              </StyledExpanderWrapper>
            ) : (
              <StyledExpanderWrapper onClick={handleExpanderClick}>
                <StyledRightArrow />
              </StyledExpanderWrapper>
            )}
          </td>
        )}
      </Row>
      <SubComponent
        tablePreCls={tablePreCls}
        subComponent={subComponent}
        noOfColumns={noOfColumns}
        record={rowData}
        isExpanded={isExpanded}
      />
    </Fragment>
  );
};

const TableBody = <T extends {}>(tBodyProps: ITbodyProps<T>) => {
  const {
    tBodyData,
    noOfColumns,
    tablePreCls,
    tHeaderData,
    subComponent,
    expandIconPosition
  } = tBodyProps;

  return tBodyData?.length ? (
    <StyledTBody>
      {tBodyData?.map((item) => {
        return (
          <Fragment key={item.key}>
            <RowRenderer
              expandIconPosition={expandIconPosition}
              tHeaderData={tHeaderData}
              tablePreCls={tablePreCls}
              rowData={item}
              noOfColumns={noOfColumns}
              subComponent={subComponent}
            />
          </Fragment>
        );
      })}
    </StyledTBody>
  ) : (
    <EmptyView noOfColumns={noOfColumns} />
  );
};

export default TableBody;
