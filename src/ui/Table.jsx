import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div.attrs({
  role: "table",
})`
  font-size: 0.875rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  border: var(--border-200);
  contain: paint;
`;

const CommonRow = styled.div.attrs({
  role: "row",
})`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2rem;
  align-items: center;
  padding: 0.75rem 1.5rem;

  &:not(header, footer) {
    &:hover {
      background-color: var(--color-grey-50);
    }

    &:not(:last-of-type) {
      border-bottom: var(--border-100);
    }
  }
`;

const StyledHeader = styled(CommonRow).attrs({
  as: "header",
})`
  border-bottom: var(--border-100);
  color: var(--color-grey-600);
  background-color: var(--color-grey-100);
  font-weight: 500;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

const StyledBody = styled.div`
  padding-block: 0.25rem;
`;

const StyledFooter = styled.footer`
  padding: 0.75rem;
  background-color: var(--color-grey-100);
  display: flex;
  justify-content: center;
`;

const Empty = styled.p`
  font-weight: 500;
  text-align: center;
  margin: 1.5rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return <CommonRow columns={columns}>{children}</CommonRow>;
}

function Body({ data, render }) {
  if (data.length <= 0) return <Empty>Không có dữ liệu để hiển thị</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = StyledFooter;

export default Table;
