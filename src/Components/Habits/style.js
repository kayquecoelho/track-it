import styled from "styled-components";

const Container = styled.div`
  max-width: 345px;
  height: 91px;

  margin-bottom: 10px;
  padding: 13px;

  position: relative;

  background-color: #FFFFFF;
  border-radius: 5px;

  button {
    ion-icon {
      color: #666666;
      font-size: 20px;
    }

    background-color: inherit;
    border: none;

    position: absolute;
    top: 13px;
    right: 10px;
  }
`;

const HabitName = styled.div`
  margin-bottom: 8px; 

  color: #666666;
  font-size: 20px;
  line-height: 25px;
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

  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-size: 20px;
  line-height: 25px;

  ${(props) => {
    return props.habitDays.includes(props.id)
      ? "background-color: #CFCFCF"
      : "background-color:#FFFFFF";
  }};

  ${(props) => {
    return props.habitDays.includes(props.id)
      ? "color:#FFFFFF"
      : "color: #dbdbdb";
  }};
`;

const Message = styled.div`
  color: #666666;
  font-size: 18px;
  line-height: 22px;
  word-break: break-word;
`;

export { Container, Message, Day, Week, HabitName };
