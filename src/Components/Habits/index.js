import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Container, Week, Day, Message, HabitName } from "./style";

import UserContext from "../Contexts/UserContext";

export default function Habits() {
  const [userHabits, setUserHabits] = useState([]);
  const { userData, controlRender } = useContext(UserContext);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );

    promise.then((response) => setUserHabits(response.data));
    promise.catch((error) => console.log(error.response));
  }, [controlRender, userData]);

  if (userHabits.length === 0) {
    return (
      <Message>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </Message>
    );
  }

  return (
    <>
      {userHabits.map((h) => (
        <Habit key={h.id} {...h} />
      ))}
    </>
  );
}

function Habit({ name, days, id,}) {
  const { userData, controlRender, setControlRender } = useContext(UserContext);

  function deleteHabit() {
    if (
      window.confirm("Você tem certeza que quer apagar esse hábito?") === true
    ) {
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      promise.then(() => setControlRender(!controlRender));
      promise.catch((error) => console.log(error.response));
    }
  }

  return (
    <Container>
      <HabitName>{name}</HabitName>
      <Week>
        <Day habitDays={days} id={0}>
          D
        </Day>
        <Day habitDays={days} id={1}>
          S
        </Day>
        <Day habitDays={days} id={2}>
          T
        </Day>
        <Day habitDays={days} id={3}>
          Q
        </Day>
        <Day habitDays={days} id={4}>
          Q
        </Day>
        <Day habitDays={days} id={5}>
          S
        </Day>
        <Day habitDays={days} id={6}>
          S
        </Day>
      </Week>
      <button onClick={deleteHabit}>
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </Container>
  );
}
