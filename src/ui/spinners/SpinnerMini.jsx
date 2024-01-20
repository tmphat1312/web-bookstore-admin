import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  width: 1.5rem;
  aspect-ratio: 1 / 1;
  animation: ${rotate} 1500ms infinite linear;
`;

export default SpinnerMini;
