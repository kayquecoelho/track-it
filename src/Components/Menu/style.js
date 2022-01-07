import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationBar = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  background-color: #ffffff;

  .habits,
  .history {
    margin: auto 0;
  }

  .today {
    width: 91px;
    height: 91px;

    margin-bottom: 10px;

    color: #ffffff;

    border-radius: 50%;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: inherit;

  color: #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 18px;
  text-decoration: none;
  line-height: 22px;
`;

export {StyledLink, NavigationBar}