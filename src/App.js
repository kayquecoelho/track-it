import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./AccessPages/LoginPage";
import SignUpPage from "./AccessPages/SignUpPage";

import "./styles/reset.css"

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
