import styled from "styled-components"
import { useContext } from "react"
import UserContext from "../Contexts/UserContext"
import { useLocation } from "react-router-dom"

export default function Top() {
    const location = useLocation()
    const {userData} = useContext(UserContext)

    if (location.pathname === "/" || location.pathname === "/cadastro") {
        return null;
    }

    return (
        <Header>
            <Title> TrackIt </Title>
            <img src={userData.image} alt="profile" />
        </Header>
    )
}


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

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img {
        width: 51px;
        height: 51px;

        border-radius: 99px;
    }
`

const Title = styled.div` 
    color: #FFFFFF;
    font-family: 'Playball', cursive; 
    font-size: 39px;
    line-height: 49px;
`