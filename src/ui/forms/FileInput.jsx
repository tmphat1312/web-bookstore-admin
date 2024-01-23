import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 0.875rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.25rem 0.875rem;
    border: none;
    color: var(--color-brand-50);
    border-radius: var(--border-radius-sm);
    background-color: var(--color-brand-600);
    cursor: pointer;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
