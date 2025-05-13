import React from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FlexContainer = ({ children }) => {
  return <StyleDiv>{children}</StyleDiv>;
};

export default FlexContainer;
