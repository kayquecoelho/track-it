import { useState } from "react";
import { Container, TitleSection } from "./style";

import plusSign from "../../assets/plus.svg";
import AddHabit from "../AddHabit";
import Habits from "../Habits";

export default function MyHomePage() {
  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitDays, setHabitDays] = useState([]);
  const [addedHabit, setAddedHabit] = useState({});

  function openAddSection() {
    setIsAddingHabit(true);
  }

  return (
    <Container>
      <TitleSection>
        <div className="title">Meus Hábitos</div>
        <button className="addHabit" onClick={openAddSection}>
          <img src={plusSign} alt="+" />
        </button>
      </TitleSection>

      {isAddingHabit && (
        <AddHabit
          data={{
            habitName,
            setHabitName,
            habitDays,
            setHabitDays,
            setIsAddingHabit,
            setAddedHabit,
          }}
        />
      )}

      <Habits addedHabit={addedHabit}></Habits>
    </Container>
  );
}