import styled from "styled-components";

const ButtonSection = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  gap: 15px;

  button {
    width: 84px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 5px;

    font-size: 16px;
    line-height: 20px;
    ${(props) => props.disabled && "opacity: 0.7;"}
  }
  .save {
    background-color: #52b6ff;
    color: #ffffff;
  }
  .cancel {
    background-color: inherit;
    color: #52b6ff;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 180px;

  margin-bottom: 25px;
  padding: 19px;

  background: #ffffff;
  border-radius: 5px;

  .habitName {
    width: 100%;
    height: 45px;

    margin-bottom: 10px;
    padding: 10px;

    background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#ffffff")};
    color: ${(props) => props.disabled && "#B3B3B3"};
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    ::placeholder {
      color: #dbdbdb;
      font-size: 20px;
      line-height: 25px;
    }
  }
`;
const Week = styled.div`
  display: flex;
  gap: 5px;
`;

const Day = styled.div`
  width: 30px;
  height: 30px;

  margin-bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    return props.habitDays.includes(props.id)
      ? "background-color: #CFCFCF"
      : "background-color:#FFFFFF";
  }};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  ${(props) => {
    return props.habitDays.includes(props.id)
      ? "color:#FFFFFF"
      : "color: #dbdbdb";
  }};
  font-size: 20px;
  line-height: 25px;

  :hover {
    cursor: pointer;
  }
`;

export {Day, Week, Container, ButtonSection}