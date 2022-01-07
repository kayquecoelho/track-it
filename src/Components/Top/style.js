import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 10px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  img {
    width: 51px;
    height: 51px;

    border-radius: 99px;
  }
`;

const Title = styled.div`
  color: #ffffff;
  font-family: "Playball", cursive;
  font-size: 39px;
  line-height: 49px;
`;
export { Title, Header };
