import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    margin: 0;
    background: ${({ theme }) => theme.colors.boneWhite};
    color: ${({ theme }) => theme.colors.darkGrey}
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
