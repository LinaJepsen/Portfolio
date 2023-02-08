import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  .project-card {
    width: 300px;
    height: 300px;
    padding: 0 20px 0 20px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: 0px 2px 4px #9d9d9d;
    }
  }
`;
