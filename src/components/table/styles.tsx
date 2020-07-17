import styled from "styled-components";
import { Alignment } from "./interfaces";

export const StyledTable = styled.table<{
  headerAlignment: Alignment;
  bodyAlignment: Alignment;
}>`
  width: 100%;
  font-size: 16px;

  th {
    text-align: ${(props) => props.headerAlignment};
  }

  th.table-expander {
    min-width: 20px;
  }

  td {
    text-align: ${(props) => props.bodyAlignment};
  }
`;

export const StyledTr = styled.tr<{}>`
  td {
    padding: 20px 0;
  }

  &.body-tr {
    margin: 0 10px;
  }
`;

export const StyledSubComponentRow = styled(StyledTr as "tr")<{
  isExpanded: boolean;
}>`
  display: ${(props) => (props.isExpanded ? "auto" : "none")};
`;

export const StyledExpander = styled.button`
  padding: 10px;
`;

export const StyledExpanderWrapper = styled.span`
  padding: 10px;
  cursor: pointer;
`;

export const StyledEmptyViewWrapper = styled.tr`
  width: 100%;
  text-align: center;

  td {
    padding: 20px;
    font-size: 24px;
  }
`;

export const StyledTHead = styled.thead``;

export const StyledTBody = styled.tbody``;
