import styled from "styled-components"
import { Colors } from "../../style/colors"
import Logo from "../../assets/Logo"
import { IoMdPerson } from "react-icons/io"
import { useEffect, useRef, useState } from "react"
import Dropdown from "./dropdown"
import { useNavigate } from "react-router-dom"

function Header() {
    const dropMenuRef = useRef<HTMLDivElement | null>(null)
    const [menu, setMenu] = useState<Boolean>(false)

    const navigate = useNavigate()

    useEffect(() => {
        const handleOutsideClose = (e: { target: any }) => {
            if (menu && !dropMenuRef.current?.contains(e.target)) setMenu(false)
        }
        document.addEventListener("click", handleOutsideClose)

        return () => document.removeEventListener("click", handleOutsideClose)
    }, [menu])

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
                        <TextButton>마이페이지</TextButton>
                    </LeftContainer>

                    <RightContainer ref={dropMenuRef}>
                        <Icon onClick={() => setMenu(!menu)}>
                            <IoMdPerson />
                        </Icon>

                        {menu && <Dropdown name="Hello World!" />}
                    </RightContainer>
                </Container>
            </Background>
        </>
    )
}

export default Header

const Background = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid ${Colors.Gray200};
    background: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
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

const Icon = styled.div`
    width: 30px;
    height: 30px;
    font-size: 24px;
    color: ${Colors.Gray500};
    border-radius: 15px;
    background: ${Colors.Gray200};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
`
