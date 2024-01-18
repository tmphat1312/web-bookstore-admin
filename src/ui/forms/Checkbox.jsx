import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 0.75rem;

  input {
    height: 1.5rem;
    aspect-ratio: 1;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  input:disabled {
    accent-color: var(--color-brand-600);
  }

  label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={disabled ? "" : id}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
