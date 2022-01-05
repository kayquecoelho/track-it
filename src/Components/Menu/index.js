import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/cadastro") {
    return null;
  }

  return (
    <NavigationBar>
      <StyledLink to="/habitos" className="habits">
        Hábitos
      </StyledLink>
      <StyledLink to="/hoje" className="today">
        Hoje
      </StyledLink>
      <StyledLink to="historico" className="history">
        Historico
      </StyledLink>
    </NavigationBar>
  );
}

const NavigationBar = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: #ffffff;

  .habits,
  .history {
    margin: auto 0;
  }

  .today {
    width: 91px;
    height: 91px;

    margin-bottom: 10px;

    background-color: #52b6ff;
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
