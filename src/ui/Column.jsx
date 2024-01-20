import styled from "styled-components";
import { buildTagOptions } from "../utils/helpers";
import Tag from "./Tag";

const StyledNumber = styled.span`
  font-weight: 500;
  color: var(--color-grey-600);
`;

function Number({ children }) {
  return <StyledNumber>{children.toString().padStart(3, "0")}</StyledNumber>;
}

const StyledImage = styled.img`
  width: 100%;
  margin: 0.25rem;
  border-radius: 4px;
  border: 1px solid var(--color-grey-100);
  aspect-ratio: 1 / 1;
  background-color: var(--color-grey-200);
`;

function Image({ src }) {
  return <StyledImage src={src} />;
}

const HStacked = styled.div`
  contain: paint;
  display: flex;
  align-items: center;
  gap: 0.15rem;

  & > * {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const VStacked = styled(HStacked)`
  flex-direction: column;
`;

function Highlight({ children }) {
  return <Tag type="brand">{children}</Tag>;
}

function TableTag({ dictionary, children }) {
  const tags = buildTagOptions(dictionary);
  const tag = tags[children];

  return <Tag type={tag.type}>{tag.label}</Tag>;
}

function Column({ children }) {
  return <div>{children}</div>;
}

Column.Number = Number;
Column.Image = Image;
Column.HStacked = HStacked;
Column.VStacked = VStacked;
Column.Highlight = Highlight;
Column.TableTag = TableTag;

export default Column;
