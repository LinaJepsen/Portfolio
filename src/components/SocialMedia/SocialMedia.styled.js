import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.darkGrey};
    &:hover {
      color: ${({ theme }) => theme.colors.turquoise};
    }
  }
`;
