import React from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./styles/GlobalStyle";
import Theme from "./Theme";
import Wrapper from "./components/Wrapper";

const App = () => {
  return (
    <>
      <Normalize />
      <Theme>
        <GlobalStyle />
        <Wrapper>
          <h1>Codergods</h1>
        </Wrapper>
      </Theme>
    </>
  );
};

export default App;
