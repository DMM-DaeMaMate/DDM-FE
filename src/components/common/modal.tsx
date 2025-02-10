import styled from "styled-components"
import { Colors } from "../../style/colors"
import { IoClose } from "react-icons/io5"
import { ReactNode } from "react"

interface Props {
    title?: string
    content?: string
    check?: () => void
    close?: () => void
    children?: ReactNode
}

function Modal({ title, content, check, close, children }: Props) {
    return (
        <>
            <Background>
                <Container>
                    <TopContainer>
                        <Title>{title}</Title>
                        <CloseButton onClick={close}>
                            <IoClose />
                        </CloseButton>
                    </TopContainer>

                    <BottomContainer>
                        <Content>
                            {content}
                            {children}
                        </Content>
                    </BottomContainer>

                    <ButtonContainer>
                        <CancelButton onClick={close}>취소</CancelButton>
                        <CheckButton onClick={check}>확인</CheckButton>
                    </ButtonContainer>
                </Container>
            </Background>
        </>
    )
}

export default Modal

const Background = styled.div`
    position: fixed;
    background: #00000060;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 40%;
    height: 45%;
    border-radius: 20px;
    background-color: ${Colors.White};
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`

const TopContainer = styled.div`
    height: 20%;
    width: 95%;
    border-bottom: 1px solid ${Colors.Gray300};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.p`
    margin-left: 10px;
    font-size: 22px;
    color: ${Colors.Black};
    font-weight: 600;
`

const CloseButton = styled.div`
    width: 40px;
    height: 40px;
    font-size: 30px;
    margin-left: auto;
    margin-right: 5px;
    color: ${Colors.Gray500};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BottomContainer = styled.div`
    width: 95%;
    height: 60%;
`

const Content = styled.p`
    margin-left: 10px;
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
    white-space: pre-line;
    line-height: 30px;
    color: ${Colors.Gray600};
`

const ButtonContainer = styled.div`
    width: 95%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const ButtonWrapper = styled.div`
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const CancelButton = styled.button`
    margin-left: auto;
    width: 100px;
    height: 40px;
    border-radius: 23px;
    border: 2px solid ${Colors.Gray500};
    background-color: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.Gray500};
    font-size: 16px;
    cursor: pointer;
`

const CheckButton = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 23px;
    border: none;
    background-color: ${Colors.Orange400};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.White};
    font-size: 16px;
    cursor: pointer;
`
