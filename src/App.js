import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./Components/AccessPages/LoginPage";
import SignUpPage from "./Components/AccessPages/SignUpPage";

import "./styles/reset.css";

export default function App() {
  const [userData, setUserData] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage setUserData={setUserData} userData={userData} />}
        />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/habitos" />
        <Route path="/hoje" {...userData} />
        <Route path="/historico" />
      </Routes>
    </BrowserRouter>
  );
}
