import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./Components/AccessPages/LoginPage";
import SignUpPage from "./Components/AccessPages/SignUpPage";
import UserContext from "./Components/Contexts/UserContext";
import "./styles/reset.css";
import Top from "./Components/Top";
import Menu from "./Components/Menu";
import MyHomePage from "./Components/MyHomePage";

export default function App() {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Top></Top>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<MyHomePage />} />
          <Route path="/hoje" />
          <Route path="/historico" />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
