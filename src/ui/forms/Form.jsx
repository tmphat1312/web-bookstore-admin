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
      width: min(40rem, 96vw);
      padding-block: 0.75rem;
      margin-inline: auto;
    `}
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
