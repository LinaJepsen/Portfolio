import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
  }

  p {
    width: 50%;
    margin: 8px;
  }

  a {
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
