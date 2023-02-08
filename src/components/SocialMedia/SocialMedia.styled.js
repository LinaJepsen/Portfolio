import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 40px 40px 40px;

  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.darkGrey};
    &:hover {
      color: ${({ theme }) => theme.colors.turquoise};
    }
  }

  @media screen and (max-width: 499px) {
    display: none;
  }
`;
