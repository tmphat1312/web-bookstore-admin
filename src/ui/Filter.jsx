import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledFilter = styled.div`
  border: var(--border-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.25rem;
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: transparent;
  border: none;

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.15rem 0.5rem;

  &:disabled {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);

    &:hover {
      background-color: var(--color-grey-400);
    }
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-400);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    if (value === currentFilter) {
      return;
    }

    if (value === "all") {
      searchParams.delete(filterField);
      searchParams.delete("page");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set(filterField, value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
