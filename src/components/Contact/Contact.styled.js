import styled from "styled-components";

export const Container = styled.div`
  .mail {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};

    &:hover {
      color: ${({ theme }) => theme.colors.turquoise};
    }
  }

  .cv {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};

    &:hover {
      //color: ${({ theme }) => theme.colors.turquoise};
      cursor: not-allowed;
    }
  }
`;
