import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: min(132px, 96%);
  height: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.png" alt="Logo của hiệu sách" />
    </StyledLogo>
  );
}

export default Logo;
