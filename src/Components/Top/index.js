import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { Header, Title } from "./style";
import UserContext from "../Contexts/UserContext";

export default function Top() {
  const { userData } = useContext(UserContext);
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/cadastro") {
    return null;
  }

  return (
    <Header>
      <Title> TrackIt </Title>
      <img src={userData.image} alt="profile" />
    </Header>
  );
}
