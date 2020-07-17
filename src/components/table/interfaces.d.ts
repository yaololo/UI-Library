type Alignment = "center" | "left" | "right";

type SubComponent<T> = ({
  record,
  isExpanded
}: {
  record: T;
  isExpanded: boolean;
}) => preact.VNode;

interface IPageChange {
  type: "PAGE_CHANGE";
  payload: {
    tBodyData: IProps<T>["tBodyData"];
    currPage: number;
    pageSize: number;
  };
}

export type ExpenderPosition = "front" | "behind";

export interface ITableProps<T extends { [x: string]: any }> {
  tHeaderData: Array<ITHeader<T>>;
  tBodyData: Array<ITBody<T>>;
  role?: string;
  tableClassPrefix: string;
  subComponentExpander?: preact.VNode;
  headerAlignment?: Alignment;
  bodyAlignment?: Alignment;
  expandIcon?: preact.VNode;
  expandIconPosition?: ExpenderPosition;
  isLoading?: boolean;
  subComponent?: SubComponent<T>;
  withPagination?: boolean;
  defaultPageSize?: number;
}

export interface ITHeader<T> {
  key: preact.Key;
  colSpan?: number;
  rolSpan?: number;
  title: string;
  dataIndex: Extract<keyof T, string>;
  render?: (record: ITBody<T>) => preact.VNode;
}

export type ITBody<T> = {
  key: preact.Key;
  colSpan?: number;
  rolSpan?: number;
} & Required<T>;

export type ChildElements = Array<preact.VNode> | preact.VNode | null;

export type PaginationReducerAction = IPageChange;

export interface ISubComponentProps<T> {
  tablePreCls: string;
  subComponent: SubComponent;
  noOfColumns: number;
  record: ITBody<T>;
  isExpanded: boolean;
}

export interface ITbodyProps<T> {
  tablePreCls: string;
  tBodyData: Array<ITBody<T>>;
  tHeaderData: Array<ITHeader<T>>;
  noOfColumns: number;
  expandIconPosition: ExpenderPosition;
  subComponent?: SubComponent<T>;
}

export interface IRowRendererProps<T> {
  tablePreCls: string;
  tHeaderData: Array<ITHeader<T>>;
  noOfColumns: number;
  expandIconPosition: ExpenderPosition;
  subComponent?: SubComponent<T>;
  rowData: ITBody<T>;
}

export interface ITablePaginationProps {
  currPage: number;
  totalDataLength: number;
  defaultPageSize?: number;
  onChange: (pageNumber: number, pageSize: number) => void;
}
