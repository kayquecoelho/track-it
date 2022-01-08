import axios from "axios";
import { useState, useContext } from "react";
import { Day, Container, ButtonSection, Week } from "./style";

import Loading from "../Loading/Loading";
import UserContext from "../Contexts/UserContext";

export default function AddHabit({
  data: {
    setIsAddingHabit,
    habitName,
    habitDays,
    setHabitDays,
    setHabitName,
    setAddedHabit,
  },
}) {
  const { userData } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

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
    promise.then((response) => {
      setDisabled(false);
      setHabitDays([]);
      setHabitName("");
      setIsAddingHabit(false);
      setAddedHabit(response.data);
    });
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
        {weekDays.map((d, index) => (
          <Day
            key={index}
            habitDays={habitDays}
            disabled={disabled}
            id={`${index}`}
            onClick={selectDay}
          >
            {d}
          </Day>
        ))}
      </Week>

      <ButtonSection disabled={disabled}>
        <button
          className="cancel"
          disabled={disabled}
          onClick={() => setIsAddingHabit(false)}
        >
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
