import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { NavigationBar, StyledLink } from "./style";

import "react-circular-progressbar/dist/styles.css";
import UserContext from "../Contexts/UserContext";

export default function Menu() {
  const { progress, numOfHabits } = useContext(UserContext);

  let percentage;

  if (numOfHabits === 0) {
    percentage = 0;
  } else {
    percentage = progress / numOfHabits;
  }

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
        <CircularProgressbarWithChildren
          value={percentage}
          maxValue={1}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52b6ff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        >
          {"Hoje"}
        </CircularProgressbarWithChildren>
      </StyledLink>
      <StyledLink to="historico" className="history">
        Historico
      </StyledLink>
    </NavigationBar>
  );
}
