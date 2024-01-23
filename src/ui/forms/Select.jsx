import { forwardRef } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  text-transform: capitalize;
  padding: 0.5rem;
  border: var(--border-200);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  font-size: 0.875rem;
`;

const Select = forwardRef(({ options, value, onChange, ...props }, ref) => {
  return (
    <StyledSelect ref={ref} value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
});

Select.displayName = "Select";

export default Select;
