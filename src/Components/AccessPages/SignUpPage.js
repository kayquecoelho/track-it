import axios from "axios";
import { useState } from "react";
import { Form, Container, StyledLink } from "./styles";
import logo from "../../assets/logo.svg";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();
    setDisabled(true);

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      signUpData
    );
    promise.then((response) => {
      console.log(response);
      navigate("/");
    });
    promise.catch((error) => {
      alert(error.response.data.message);
      setDisabled(false)
    });
  }

  function handleInputChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <img className="logo" src={logo} alt="TrackIt" />
      <Form onSubmit={handleSignUp} disabled={disabled}>
        <input
          required
          disabled={disabled}
          type="email"
          placeholder="email"
          name="email"
          value={signUpData.email}
          onChange={handleInputChange}
        />
        <input
          required
          disabled={disabled}
          type="password"
          placeholder="senha"
          name="password"
          value={signUpData.password}
          onChange={handleInputChange}
        />
        <input
          required
          disabled={disabled}
          type="text"
          placeholder="nome"
          name="name"
          value={signUpData.name}
          onChange={handleInputChange}
        />
        <input
          required
          disabled={disabled}
          type="url"
          placeholder="foto"
          name="image"
          value={signUpData.image}
          onChange={handleInputChange}
        />
        <button disabled={disabled} type="submit">
          {!disabled && "Cadastrar"}
          {disabled && <Loading disabled={disabled} />}
        </button>
      </Form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  );
}
