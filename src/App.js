import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

import "./css/reset.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/habitos" />
        <Route path="/hoje" />
        <Route path="/historico" />
      </Routes>
    </BrowserRouter>
  );
}
