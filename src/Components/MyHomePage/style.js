import styled from "styled-components";

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

export {Container, TitleSection}