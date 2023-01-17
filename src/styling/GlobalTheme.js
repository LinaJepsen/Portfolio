import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    margin: 0;
    background: ${({ theme }) => theme.colors.boneWhite};
    color: ${({ theme }) => theme.colors.darkGrey}
  }
`;
