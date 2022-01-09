import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { WeekDay, Status, Container } from "./style";
import dayjs from "dayjs";

import "dayjs/locale/pt-br";
import UserContext from "../Contexts/UserContext";
import ToDoHabit from "./ToDoHabit";

export default function TodaysHabitsPage() {
  const { userData, progress, setProgress, setNumOfHabits, numOfHabits, controlRender } =
    useContext(UserContext);
  const [habits, setHabits] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const fractionDone = progress / numOfHabits;
  const percentage = Math.floor(fractionDone * 100);

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
  }, [isChecked, userData, controlRender]);

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
      <Status progress={fractionDone}>
        {fractionDone === 0 && "Nenhum hábito concluído ainda"}
        {fractionDone !== 0 && `${percentage}% dos hábitos concluídos`}
      </Status>
      {habits.map((h) => (
        <ToDoHabit
          key={h.id}
          {...h}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      ))}
    </Container>
  );
}
