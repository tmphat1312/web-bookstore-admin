import styled from "styled-components";
import { getErrorMessage } from "../utils/helpers";
import Message from "./Message";

const Styled = styled(Message)`
  color: var(--color-red-700);
  background-color: var(--color-red-100);
`;

function ErrorLoading({ error }) {
  const message = getErrorMessage(error);

  return <Styled>{message}</Styled>;
}

export default ErrorLoading;
