import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 2px lightgrey;

  /*   position: fixed;
  z-index: 2; */

  .title {
    text-transform: uppercase;
    flex: 1;
  }
`;

export const NavbarLinks = styled.ul`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  list-style: none;

  li {
    padding-left: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkGrey};

    a {
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      color: ${({ theme }) => theme.colors.darkGrey};

      &:hover {
        color: ${({ theme }) => theme.colors.turquoise};
        cursor: pointer;
      }
    }

    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

    svg {
      width: 35px;
      height: 35px;
      transition: all 0.3s ease-in-out;

        &:hover {
        color: ${({ theme }) => theme.colors.turquoise};
        cursor: pointer;
        }

        @media screen and (min-width: 900px) {
          display: none;
        }
    }

    div {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 5;

      padding: 1rem;

      width: 80%;
      height: 100vh;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      background-color: ${({ theme }) => theme.colors.boneWhite};
      background-size: cover;
      background-repeat: repeat;

      box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);

      svg {
        width: 35px;
        height: 35px;
        margin: 8px 16px;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${({ theme }) => theme.colors.turquoise};
          cursor: pointer;
        }
      }

      ul {
        list-style: none;
        
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        margin: 0;
        padding: 0;
        height: 100%
        width: 100% 
      }

      li {
        text-transform: uppercase;

        margin: 16px;

       
    a {
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      color: ${({ theme }) => theme.colors.darkGrey};

      &:hover {
        color: ${({ theme }) => theme.colors.turquoise};
        cursor: pointer;
      }
    }
    }

    @media screen and (min-width: 900px) {
      display: none;
    }
  
`;
