import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: #52b6ff;
  font-size: 14px;
  line-height: 17px;
  text-decoration: underline;
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    margin-top: 70px;
    margin-bottom: 40px;
    width: 180px;
    height: 180px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 303px;
    height: 45px;

    margin-bottom: 6px;
    padding: 10px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    ::placeholder {
      color: #dbdbdb;
      font-size: 20px;
      line-height: 25px;
    }
  }

  button {
    width: 303px;
    height: 45px;

    margin-bottom: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #52b6ff;
    border: none;
    border-radius: 5px;

    color: #ffffff;
    font-size: 21px;
    line-height: 26px;
  }
`;

export {
    StyledLink, Container, Form
}