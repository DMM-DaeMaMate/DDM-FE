import styled from "styled-components"
import { Colors } from "../../style/colors"
import Logo from "../../assets/Logo"
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()

    return (
        <>
            <Background>
                <Container>
                    <LeftContainer>
                        <LogoContainer onClick={() => navigate("/main")}>
                            <Logo />
                        </LogoContainer>
                        <TextButton>일정관리</TextButton>
                        <TextButton>성적기록</TextButton>
                    </LeftContainer>

                    <RightContainer>
                        <TextButton onClick={() => navigate("/mypage")}>
                            마이페이지
                        </TextButton>
                    </RightContainer>
                </Container>
            </Background>
        </>
    )
}

export default Header

const Background = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid ${Colors.Gray100};
    background: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

const LogoContainer = styled.div`
    height: 32px;
    cursor: pointer;
`

const TextButton = styled.button`
    font-size: 16px;
    font-weight: 500;
    color: ${Colors.Black};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
`

const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`
