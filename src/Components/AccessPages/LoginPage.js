import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container, StyledLink } from "./styles";

import logo from "../../assets/logo.svg";
import Loading from "../Loading/Loading";
import UserContext from "../Contexts/UserContext";

export default function LoginPage() {
  const { setAndPersistToken, setUserData } = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const localData = localStorage.getItem("userData");

  useEffect(() => {
    if (localData !== null) {
      setUserData(JSON.parse(localData));
      navigate("/hoje");
    }
  }, []);
  
  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      loginData
    );
    promise.then((response) => {
      setAndPersistToken(response.data);
      navigate("/hoje");
    });
    promise.catch((error) => {
      alert(error.response.data.message);
      setDisabled(false);
    });
  }

  function handleInputChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <img className="logo" src={logo} alt="TrackIt" />
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <input
          required
          disabled={disabled}
          type="email"
          name="email"
          placeholder="email"
          value={loginData.email}
          onChange={handleInputChange}
        />
        <input
          required
          disabled={disabled}
          type="password"
          placeholder="senha"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <button disabled={disabled} type="submit">
          {!disabled && "Entrar"}
          {disabled && <Loading disabled={disabled} />}
        </button>
      </Form>
      <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </Container>
  );
}
