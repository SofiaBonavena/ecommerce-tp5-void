import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 200px;
  color: #f00;
`;
const StyledH2 = styled.h2`
  font-size: 3rem;
  color: black;
  font-family: 'Thasadith', sans-serif;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-weight: bold;
`;

const StyledLink = styled.a`
  color: ${(props) => (props.target ? `#0f0` : `#000`)};
`;

const StyledInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export { StyledH1, StyledH2, StyledLink, StyledInner };
