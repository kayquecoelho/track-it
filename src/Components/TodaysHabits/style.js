import styled from "styled-components";

const WeekDay = styled.div`
  color: #126ba5;
  font-size: 23px;
  line-height: 29px;
`;
const Status = styled.div`
  color: ${(props) => (props.progress !== 0 ? "#8FC549" : "#bababa")};
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
    color: ${(props) => (props.done && props.isEqual ? "#8FC549" : "#666666")};
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

export {
  CheckBox,
  LongestStreak,
  Streak,
  Title,
  HabitBox,
  Container,
  WeekDay,
  Status,
};
