import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.color1};
  padding: 0 2rem;
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
