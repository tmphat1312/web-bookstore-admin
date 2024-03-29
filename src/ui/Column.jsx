import styled from "styled-components";
import { buildTagOptions, formatVietnameseCurrency } from "../utils/helpers";
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

const StyledThumbnail = styled(StyledImage)`
  aspect-ratio: 0.75;
`;

const HStacked = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15rem;
`;

const VStacked = styled(HStacked)`
  flex-direction: column;
  align-items: flex-start;
`;

function Highlight({ children }) {
  return <Tag type="brand">{children}</Tag>;
}

function TableTag({ dictionary, children }) {
  const tags = buildTagOptions(dictionary);
  const tag = tags[children];

  return <Tag type={tag.type}>{tag.label}</Tag>;
}

const StyledPrice = styled.span`
  font-weight: 500;
  color: var(--color-grey-600);
`;

function Price({ children }) {
  return <StyledPrice>{formatVietnameseCurrency(children)}</StyledPrice>;
}

const StyledName = styled.span`
  text-wrap: balance;
  word-break: break-all;
  font-weight: 500;
`;

function Column({ children }) {
  return <div>{children}</div>;
}

Column.Number = Number;
Column.Image = StyledImage;
Column.Thumbnail = StyledThumbnail;
Column.HStacked = HStacked;
Column.VStacked = VStacked;
Column.Highlight = Highlight;
Column.TableTag = TableTag;
Column.Price = Price;
Column.Name = StyledName;

export default Column;
