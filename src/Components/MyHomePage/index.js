import styled from "styled-components";
import plusSign from "../../assets/plus.svg";
import AddHabit from "../AddHabit";
export default function MyHomePage() {
  return (
    <Container>
      <TitleSection>
        <div className="title">Meus Hábitos</div>
        <button className="addHabit">
          <img src={plusSign} alt="+" />
        </button>
      </TitleSection>
      <AddHabit />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  padding: 90px 18px 110px;

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
