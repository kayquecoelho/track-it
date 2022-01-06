import axios from "axios";
import { useState, useContext } from "react";
import { Day, Container, ButtonSection, Week } from "./style";

import Loading from "../Loading/Loading";
import UserContext from "../Contexts/UserContext";

export default function AddHabit() {
  const { userData } = useContext(UserContext);
  const [habitName, setHabitName] = useState("");
  const [habitDays, setHabitDays] = useState([]);
  const [disabled, setDisabled] = useState(false);

  function selectDay(e) {
    if (disabled) return;

    if (habitDays.includes(e.target.id)) {
      const newHabitDays = habitDays.filter((day) => day !== e.target.id);
      setHabitDays(newHabitDays);
      return;
    }

    setHabitDays([...habitDays, e.target.id]);
  }

  function registrateHabit() {
    if (habitName === "" || habitDays.length === 0) return;

    setDisabled(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      { name: habitName, days: habitDays },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    promise.then((response) => console.log(response));
    promise.catch((error) => {
      alert(error.response.data.message);
      setDisabled(false);
    });
  }

  return (
    <Container disabled={disabled}>
      <input
        type="text"
        className="habitName"
        disabled={disabled}
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <Week>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="1"
          onClick={selectDay}
        >
          D
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="2"
          onClick={selectDay}
        >
          S
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="3"
          onClick={selectDay}
        >
          T
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="4"
          onClick={selectDay}
        >
          Q
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="5"
          onClick={selectDay}
        >
          Q
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="6"
          onClick={selectDay}
        >
          S
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="7"
          onClick={selectDay}
        >
          S
        </Day>
      </Week>
      <ButtonSection disabled={disabled}>
        <button className="cancel" disabled={disabled}>
          Cancelar
        </button>
        <button className="save" onClick={registrateHabit} disabled={disabled}>
          {!disabled && "Salvar"}
          {disabled && <Loading />}
        </button>
      </ButtonSection>
    </Container>
  );
}
