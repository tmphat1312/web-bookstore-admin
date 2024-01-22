import React from "react";
import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

import { PAGE_SIZE } from "../constants/api";

const PaginationBox = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
  border-radius: var(--border-radius-md);
  border: 2px dashed var(--color-grey-300);
  background-color: var(--color-grey-50);
`;

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 0.875rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 500;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;

  &:has(span:last-child) {
    padding-left: 0.25rem;
  }

  &:has(span:first-child) {
    padding-right: 0.25rem;
  }

  & svg {
    height: 1.125rem;
    aspect-ratio: 1;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count, hasContainer = false }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  const Container = hasContainer ? PaginationBox : React.Fragment;

  return (
    <Container>
      <StyledPagination>
        <P>
          Hiển thị <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> &rarr;{" "}
          <span>
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </span>{" "}
          trong <span>{count}</span> kết quả
        </P>

        <Buttons>
          <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
            <HiChevronLeft role="presentation" /> <span>Trước</span>
          </PaginationButton>

          <PaginationButton
            onClick={nextPage}
            disabled={currentPage === pageCount}
          >
            <span>Sau</span>
            <HiChevronRight role="presentation" />
          </PaginationButton>
        </Buttons>
      </StyledPagination>
    </Container>
  );
}

export default Pagination;
