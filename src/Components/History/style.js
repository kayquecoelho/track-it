import styled from "styled-components";

const Title = styled.div `
    color: #126BA5;
    font-size: 23px;
    line-height: 29px;

    margin-bottom: 20px;
`
const Subtitle = styled.div`
    color: #666666;
    font-size: 18px;
    line-height: 22px;
`

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

export {Container, Title, Subtitle}
