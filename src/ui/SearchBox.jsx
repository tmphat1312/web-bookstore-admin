import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

import Input from "./forms/Input";
import Button from "./buttons/Button";

const SearchBoxContainer = styled.form`
  display: inline-flex;
  align-items: stretch;
  box-shadow: var(--shadow-sm);
`;

const SearchInputContainer = styled.div`
  --reset-button-size: 3.6rem;

  position: relative;
  display: flex;
`;

const SearchInput = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-inline-end: var(--reset-button-size);
`;

const ResetButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  position: absolute;
  inset-block: 0%;
  inset-inline-end: 0;
  width: var(--reset-button-size);

  display: ${({ hidden }) => (hidden ? "none" : "inline-block")};

  &:hover {
    color: var(--color-red-700);
    transform: scale(1.25);
  }

  &:active:not(:disabled) {
    background-color: transparent;
  }
`;

const SearchButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

function SearchBox({ queryName = "q" }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(() => searchParams.get(queryName) || "");

  function handleChange(e) {
    if (e.target.value === q) return;
    if (e.target.value === "") return handleReset();

    setQ(e.target.value);
  }

  function attachQueryParams(newQ) {
    if (newQ) {
      searchParams.set("q", newQ);
    } else {
      searchParams.delete("q");
    }

    searchParams.delete("page");
    setSearchParams(searchParams);
  }

  function handleSubmit(e) {
    e.preventDefault();
    attachQueryParams(q);
  }

  function handleReset() {
    const newQ = "";
    setQ(newQ);
    attachQueryParams(newQ);
  }

  return (
    <SearchBoxContainer onSubmit={handleSubmit}>
      <SearchInputContainer>
        <SearchInput value={q} onChange={handleChange} />
        <ResetButton
          aria-label="Reset search query"
          onClick={handleReset}
          hidden={!q}
          type="reset"
        >
          <HiXMark size={20} role="presentation" />
        </ResetButton>
      </SearchInputContainer>
      <SearchButton>Tìm kiếm</SearchButton>
    </SearchBoxContainer>
  );
}

export default SearchBox;
