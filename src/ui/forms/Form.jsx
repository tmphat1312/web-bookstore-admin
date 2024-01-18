import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 1.5rem 2.5rem;
      background-color: var(--color-grey-0);
      border: var(--border-100);
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: min(50rem, 100%);
      /* width: 80rem; */
      padding-block: 0.75rem;
    `}

  contain: paint;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
