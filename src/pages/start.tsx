import styled, { keyframes } from "styled-components"
import { Colors } from "../style/colors"
import StartBg from "../assets/start_bg"
import Logo from "../assets/Logo"
import { useNavigate } from "react-router-dom"

function Start() {
    const navigate = useNavigate()

    const toLogin = () => {
        navigate("/login")
    }

    const toSignup = () => {
        navigate("/signup")
    }

    return (
        <>
            <Background>
                <StartBg />
                <Container>
                    <LogoContainer>
                        <LogoWrapper>
                            <Logo />
                        </LogoWrapper>
                        <MainExplain>학교생활을 효율적이게</MainExplain>
                        <SubExplain>학교생활을 스마트하게</SubExplain>
                    </LogoContainer>

                    <ButtonContainer>
                        <Login onClick={toLogin}>로그인</Login>
                        <Signup onClick={toSignup}>회원가입</Signup>
                    </ButtonContainer>
                </Container>
            </Background>
        </>
    )
}

export default Start

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, ${Colors.White}, ${Colors.Orange100});
`

const FadeIn = keyframes`
    0%{
        transform:translateY(-10px);
        opacity:0;
    }
    100%{
        transform:translateY(0);
        opacity:1;
    }
`

const Container = styled.div`
    animation: ${FadeIn} 1.5s;
    position: fixed;
    left: 15%;
    padding-top: 10%;
    width: 70%;
    height: 100%;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const LogoWrapper = styled.div`
    width: 20%;
`

const MainExplain = styled.p`
    font-size: 30px;
    color: ${Colors.Orange950};
    font-weight: 900;
`

const SubExplain = styled.p`
    font-size: 24px;
    color: ${Colors.Gray500};
    font-weight: 500;
`

const ButtonContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 15px;
`

const Login = styled.button`
    width: 150px;
    height: 40px;
    border: 3px solid ${Colors.Black};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 800;
    background: none;
`

const Signup = styled.button`
    width: 150px;
    height: 40px;
    border: 3px solid ${Colors.Black};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 800;
    background: ${Colors.Black};
    color: ${Colors.White};
`
