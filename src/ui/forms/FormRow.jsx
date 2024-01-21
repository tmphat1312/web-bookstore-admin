import styled from "styled-components";
import { cloneElement } from "react";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 9.375rem 1fr 1.2fr;
  gap: 1.5rem;
  padding-block: 0.75rem;

  &:not(:last-child) {
    border-bottom: var(--border-100);
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: var(--color-red-700);
`;

function FormRow({ label, property, errors, children, ...props }) {
  const error = errors?.[property]?.message;

  if (children.length > 1) {
    throw new Error("FormRow only accepts 1 child");
  }

  return (
    <StyledFormRow {...props}>
      {label && <Label htmlFor={property}>{label}</Label>}
      {cloneElement(children, { id: property })}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledFormRow>
  );
}

export default FormRow;
