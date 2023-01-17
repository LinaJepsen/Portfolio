import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

//app-profiles
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;

  .skill-item {
    padding: 8px;
    width: 190px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 20px;

    img {
      height: 190px;
    }
    h2 {
      margin-top: 8px;
      margin-bottom: 0;
    }
    p {
      margin: 0;
    }
  }
`;
