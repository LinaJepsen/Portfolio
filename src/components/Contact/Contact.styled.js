import styled from "styled-components";

export const Container = styled.div`
  .mail {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};

    &:hover {
      color: ${({ theme }) => theme.colors.turquoise};
    }
  }

  button {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    border: none;
    background-color: #faf9f9;
    font-size: 16px;

    &:hover {
      color: ${({ theme }) => theme.colors.turquoise};
      cursor: pointer;
    }
  }
`;

export const DivForm = styled.div`
  text-align: center;
  max-width: 300px;
  margin: 20px auto;

  .form {
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
  }
`;

export const DivSocials = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row-reverse;

  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.darkGrey};
    &:hover {
      color: ${({ theme }) => theme.colors.turquoise};
    }
  }

  @media screen and (min-width: 500px) {
    display: none;
  }
`;
