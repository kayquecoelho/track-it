import { useState } from "react";
import { Container, Form, StyledLink } from "./style";

import logo from "../assets/logo.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {}

  return (
    <Container>
      <img className="logo" src={logo} alt="TrackIt" />
      <Form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> Entrar </button>
      </Form>
      <StyledLink to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </StyledLink>
    </Container>
  );
}

