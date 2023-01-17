import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-top: 50px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  .title-motion {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .hello-text {
    font-size: 35px;
    margin: 0;
  }

  .name {
    font-size: 100px;
    margin: 0;
  }

  .work-title {
    margin: 0;
    font-size: 35px;
  }

  .picture-motion {
    display: flex;
  }

  img {
    border-radius: 8%;
    box-shadow: 0 0 20px;
  }

  @media screen and (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-motion {
      display: none;
    }

    .picture-motion {
      display: none;
    }
  }

  @media screen and (min-width: 1040px) {
    .picture {
      display: none;
    }
    .title {
      display: none;
    }
  }
`;
