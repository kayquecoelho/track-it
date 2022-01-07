import axios from "axios";
import { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";

import "dayjs/locale/pt-br";

import UserContext from "../Contexts/UserContext";
import check from "../../assets/check.svg";
import {
  CheckBox,
  LongestStreak,
  Streak,
  Title,
  HabitBox,
  Container,
  WeekDay,
  Status,
} from "./style";

export default function TodaysHabitsPage() {
  const { userData, progress, setProgress, setNumOfHabits, numOfHabits } =
    useContext(UserContext);
  const [habits, setHabits] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const updateLocale = require("dayjs/plugin/updateLocale");
  dayjs.extend(updateLocale);
  dayjs.updateLocale("pt-br", {
    weekdays: "Domingo,Segunda,Terça,Quarta,Quinta,Sexta,Sábado".split(","),
  });
  dayjs.locale("pt-br");

  const now = dayjs().locale("pt-br").format("dddd, DD/MM");

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );

    promise.then((response) => {
      const doneHabits = response.data.filter((habit) => habit.done);
      setHabits(response.data);
      setNumOfHabits(response.data.length);
      setProgress(doneHabits.length);
    });
    promise.catch((error) => console.log(error.response));
  }, [isChecked]);

  if (habits === null || habits.length === 0) {
    return (
      <Container>
        <WeekDay>{now}</WeekDay>
        <Status progress={0}>Nenhum hábito concluído ainda</Status>
      </Container>
    );
  }

  return (
    <Container>
      <WeekDay>{now}</WeekDay>
      <Status progress={progress / numOfHabits}>
        {progress / numOfHabits === 0 && "Nenhum hábito concluído ainda"}
        {progress / numOfHabits !== 0 &&
          `${Math.floor(
            (progress / numOfHabits) * 100
          )}% dos hábitos concluídos`}
      </Status>
      {habits.map((h) => (
        <ToDoHabit
          key={h.id}
          {...h}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setProgress={setProgress}
          progress={progress}
        />
      ))}
    </Container>
  );
}

function ToDoHabit({
  isChecked,
  setIsChecked,
  name,
  done,
  currentSequence,
  highestSequence,
  id,
}) {
  const { userData } = useContext(UserContext);

  function handleCheckBox() {
    if (!done) {
      const promise = axios.post(
        `
            https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check
            `,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      promise.then(() => setIsChecked(!isChecked));
      promise.catch((error) => console.log(error.response));
    } else {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      promise.then(() => setIsChecked(!isChecked));
      promise.catch((error) => console.log(error.response));
    }
  }

  return (
    <HabitBox>
      <div className="habitData">
        <Title>{name}</Title>
        <Streak done={done}>
          Sequência atual: <span>{currentSequence} dias</span>
        </Streak>
        <LongestStreak
          done={done}
          currentSequence={currentSequence}
          highestSequence={highestSequence}
        >
          Seu recorde: <span>{highestSequence} dias</span>
        </LongestStreak>
      </div>
      <CheckBox
        done={done}
        currentSequence={currentSequence}
        highestSequence={highestSequence}
        onClick={handleCheckBox}
      >
        <img src={check} alt="check" />
      </CheckBox>
    </HabitBox>
  );
}
