import { cloneElement } from "react";
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-block: 0.75rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: var(--color-red-700);
`;

export default function FormRowVertical({
  label,
  property,
  errors,
  children,
  ...props
}) {
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
