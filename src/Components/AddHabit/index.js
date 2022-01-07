import axios from "axios";
import { useState, useContext } from "react";
import { Day, Container, ButtonSection, Week } from "./style";

import Loading from "../Loading/Loading";
import UserContext from "../Contexts/UserContext";

export default function AddHabit({
  data: { setIsAddingHabit, habitName, habitDays, setHabitDays, setHabitName, setAddedHabit },
}) {
  const { userData } = useContext(UserContext);
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
    promise.then((response) => {
      setDisabled(false);
      setHabitDays([]);
      setHabitName("");
      setIsAddingHabit(false)
      setAddedHabit(response.data)
    });
    promise.catch((error) => {
      alert(error.response.data.message);
      setDisabled(false);
    });
  }

  function closeAddSection() {
    setIsAddingHabit(false);
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
          id="0"
          onClick={selectDay}
        >
          D
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="1"
          onClick={selectDay}
        >
          S
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="2"
          onClick={selectDay}
        >
          T
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="3"
          onClick={selectDay}
        >
          Q
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
          S
        </Day>
        <Day
          habitDays={habitDays}
          disabled={disabled}
          id="6"
          onClick={selectDay}
        >
          S
        </Day>
      </Week>
      <ButtonSection disabled={disabled}>
        <button
          className="cancel"
          disabled={disabled}
          onClick={closeAddSection}
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
