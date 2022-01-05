import { useState } from "react";
import { Form, Container, StyledLink } from "./styles";
import logo from "../assets/logo.svg";

export default function SignUpPage() {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  function handleSignUp(e) {
    e.preventDefault()

  }

  function handleInputChange(e) {
    setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <img className="logo" src={logo} alt="TrackIt" />
      <Form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={signUpInfo.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={signUpInfo.password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="nome"
          name="name"
          value={signUpInfo.name}
          onChange={handleInputChange}
        />
        <input
          type="url"
          placeholder="foto"
          name="image"
          value={signUpInfo.image}
          onChange={handleInputChange}
        />
        <button type="submit"> Entrar </button>
      </Form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  );
}
