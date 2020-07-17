import { PaginationReducerAction as Action, ITableProps } from "./interfaces";

export const paginationChangeReducer = <T extends {}>(
  state: { currPage: number; currPageData: ITableProps<T>["tBodyData"] },
  action: Action
) => {
  // If else is used to get ride of eslint error
  if (action.type === "PAGE_CHANGE") {
    return { ...handlePageChange(action.payload) };
  } else {
    return { ...state };
  }
};

const handlePageChange = (payload: Action["payload"]) => {
  const { pageSize, currPage, tBodyData } = payload;
  const startIdx = (currPage - 1) * pageSize;
  const endIdx = currPage * pageSize;
  const currPageData = tBodyData?.slice(startIdx, endIdx) || [];

  return { currPage, currPageData };
};
