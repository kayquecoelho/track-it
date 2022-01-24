import axios from "axios";
import { useState, useContext } from "react";
import { Day, Container, ButtonSection, Week } from "./style";

import Loading from "../Loading/Loading";
import UserContext from "../Contexts/UserContext";

export default function AddHabit({
  data: { setIsAddingHabit, habitName, habitDays, setHabitDays, setHabitName },
}) {
  const { userData, setControlRender, controlRender } = useContext(UserContext);
  const [disableButton, setDisableButton] = useState(false);
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  function selectDay(e) {
    if (habitDays.includes(e.target.id)) {
      const newHabitDays = habitDays.filter((day) => day !== e.target.id);
      setHabitDays(newHabitDays);
      return;
    }

    setHabitDays([...habitDays, e.target.id]);
  }

  function registrateHabit() {
    if (habitName === "" || habitDays.length === 0) return;

    setDisableButton(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      { name: habitName, days: habitDays },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    promise.then(() => {
      setDisableButton(false);
      setHabitDays([]);
      setHabitName("");
      setIsAddingHabit(false);
      setControlRender(!controlRender);
    });
    promise.catch((error) => {
      alert(error.response.data.message);
      setDisableButton(false);
    });
  }

  return (
    <Container disabled={disableButton}>
      <input
        type="text"
        className="habitName"
        disabled={disableButton}
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />

      <Week>
        {weekDays.map((d, index) => (
          <Day
            key={index}
            habitDays={habitDays}
            disabled={disableButton}
            id={`${index}`}
            onClick={selectDay}
          >
            {d}
          </Day>
        ))}
      </Week>

      <ButtonSection disabled={disableButton}>
        <button
          className="cancel"
          disabled={disableButton}
          onClick={() => setIsAddingHabit(false)}
        >
          Cancelar
        </button>

        <button
          className="save"
          onClick={registrateHabit}
          disabled={disableButton}
        >
          {!disableButton && "Salvar"}
          {disableButton && <Loading />}
        </button>
      </ButtonSection>
    </Container>
  );
}
