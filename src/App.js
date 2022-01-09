import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/reset.css";

import Top from "./Components/Top";
import Menu from "./Components/Menu";
import MyHomePage from "./Components/MyHomePage";
import TodaysHabitsPage from "./Components/TodaysHabits/TodaysHabitsPage";
import LoginPage from "./Components/AccessPages/LoginPage";
import SignUpPage from "./Components/AccessPages/SignUpPage";
import UserContext from "./Components/Contexts/UserContext";
import History from "./Components/History";

export default function App() {
  const [userData, setUserData] = useState({});
  const [progress, setProgress] = useState(0);
  const [numOfHabits, setNumOfHabits] = useState(0);
  const [controlRender, setControlRender] = useState(false)
  const localData = localStorage.getItem("userData")
  
  useEffect(() => {
    if (localData !== null) {
      setUserData(JSON.parse(localData))
    }
  }, [])

  function setAndPersistToken (data) {
    setUserData(data)
    localStorage.setItem("userData", JSON.stringify(data))
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        progress,
        setProgress,
        numOfHabits,
        setNumOfHabits,
        setAndPersistToken,
        controlRender,
        setControlRender
      }}
    >
      <BrowserRouter>
        <Top></Top>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<MyHomePage />} />
          <Route path="/hoje" element={<TodaysHabitsPage />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
