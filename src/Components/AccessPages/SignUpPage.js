import { useState } from "react";
import { Form, Container, StyledLink } from "./styles";
import logo from "../../assets/logo.svg";
import Loading from "../Loading/Loading";

export default function SignUpPage() {
  const [signUpInfo, setSignUpInfo] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();
    setDisabled(!disabled)
  }

  function handleInputChange(e) {
    setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <img className="logo" src={logo} alt="TrackIt" />
      <Form onSubmit={handleSignUp} disabled={disabled}>
        <input
          disabled={disabled}
          type="email"
          placeholder="email"
          name="email"
          value={signUpInfo.email}
          onChange={handleInputChange}
        />
        <input
          disabled={disabled}
          type="password"
          placeholder="senha"
          name="password"
          value={signUpInfo.password}
          onChange={handleInputChange}
        />
        <input
          disabled={disabled}
          type="text"
          placeholder="nome"
          name="name"
          value={signUpInfo.name}
          onChange={handleInputChange}
        />
        <input
          disabled={disabled}
          type="url"
          placeholder="foto"
          name="image"
          value={signUpInfo.image}
          onChange={handleInputChange}
        />
        <button disabled={disabled} type="submit">
          {!disabled && "Entrar"}
          {disabled && <Loading disabled={disabled} />}
        </button>
      </Form>
      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
    </Container>
  );
}
