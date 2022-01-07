import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../Contexts/UserContext";
import check from "../../assets/check.svg";

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
      console.log(doneHabits);
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

const WeekDay = styled.div`
  color: #126ba5;
  font-size: 23px;
  line-height: 29px;
`;
const Status = styled.div`
  color: ${(props) => props.progress !== 0 ? "#8FC549": "#bababa"};
  font-size: 18px;
  line-height: 22px;

  margin-bottom: 28px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 90px 18px 110px;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  background-color: #e5e5e5;
`;

const HabitBox = styled.div`
  width: 100%;
  min-height: 94px;

  margin-bottom: 10px;
  padding: 13px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  color: #666666;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 25px;

  margin-bottom: 7px;
`;
const Streak = styled.div`
  font-size: 13px;
  line-height: 16px;

  margin-bottom: 5px;

  span {
    color: ${(props) => (props.done ? "#8FC549" : "#666666")};
  }
`;
const LongestStreak = styled.div`
  font-size: 13px;
  line-height: 16px;

  margin-bottom: 5px;

  span {
    color: ${(props) =>
      props.done && props.highestSequence === props.currentSequence
        ? "#8FC549"
        : "#666666"};
  }
`;

const CheckBox = styled.div`
  min-width: 69px;
  height: 69px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => (props.done ? "#8FC549" : " #ebebeb")};
  background-color: ${(props) => (props.done ? "#8FC549" : " #ebebeb")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;

  img {
    width: 35px;
    height: 28px;
  }
`;
