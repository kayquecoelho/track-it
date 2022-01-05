import { useState } from "react";
import { Form, Container, StyledLink } from "./styles";

import logo from "../../assets/logo.svg";
import Loading from "../Loading/Loading";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    setDisabled(!disabled);
  }

  return (
    <Container>
      <img className="logo" src={logo} alt="TrackIt" />
      <Form onSubmit={handleLogin} disabled={disabled}>
        <input
          required
          disabled={disabled}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          disabled={disabled}
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
