import styled from "styled-components";
import Empty from "./Empty";

const StyledList = styled.ul``;

const StyledItem = styled.li`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-md);

  &:hover {
    background-color: var(--color-grey-200);
  }

  &:not(:last-of-type) {
    margin-block-end: 0.5rem;
  }
`;

function DataItem({ children }) {
  return <StyledItem>{children}</StyledItem>;
}

function DataList({ data, render }) {
  if (data.length <= 0) {
    return <Empty description="Không có dữ liệu để hiển thị" />;
  }

  return <StyledList>{data.map(render)}</StyledList>;
}

DataList.Item = DataItem;

export default DataList;
