import axios from "axios";
import { useContext } from "react";
import { CheckBox, LongestStreak, Streak, Title, HabitBox } from "./style";

import UserContext from "../Contexts/UserContext";
import check from "../../assets/check.svg";

export default function ToDoHabit({
  isChecked,
  setIsChecked,
  name,
  done,
  currentSequence,
  highestSequence,
  id,
}) {
  const { userData } = useContext(UserContext);
  const isEqual = currentSequence === highestSequence;

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

        <LongestStreak done={done} isEqual={isEqual}>
          Seu recorde: <span>{highestSequence} dias</span>
        </LongestStreak>
      </div>

      <CheckBox done={done} onClick={handleCheckBox}>
        <img src={check} alt="check" />
      </CheckBox>
    </HabitBox>
  );
}
