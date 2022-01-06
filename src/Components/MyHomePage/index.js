import { useState } from "react";
import styled from "styled-components";
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

const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow: scroll;
  padding: 90px 18px 110px;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  background-color: #e5e5e5;
`;
const TitleSection = styled.div`
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    color: #126ba5;
    font-family: "Lexend Deca", sans-serif;
    font-size: 23px;
    line-height: 29px;
  }

  .addHabit {
    width: 40px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
  }
`;
