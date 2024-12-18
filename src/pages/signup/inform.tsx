import styled from "styled-components"
import { Colors } from "../../style/colors"
import Input from "../../components/common/input"
import Button from "../../components/common/button"
import { useNavigate } from "react-router-dom"

function Inform() {
    const navigate = useNavigate()

    const toLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <Background>
                <Container>
                    <TitleContainer>
                        <Title>기본정보</Title>
                        <SubTitle>기본정보를 입력해주세요</SubTitle>
                    </TitleContainer>

                    <Form>
                        <InputContainer>
                            <Input
                                label="이름"
                                placeholder="이름을 입력해주세요"
                                id="name"
                            />
                            <Input
                                label="학교"
                                placeholder="학교를 입력해주세요"
                                id="school"
                                max={24}
                            />
                            <Input
                                label="학년"
                                placeholder="학년을 입력해주세요"
                                id="grade"
                                type="number"
                                max={6}
                            />
                            <Input
                                label="반"
                                placeholder="반을 입력해주세요"
                                id="class"
                                max={24}
                            />
                        </InputContainer>

                        <ButtonContainer>
                            <Button>회원가입</Button>

                            <TextContainer>
                                <Text>
                                    이미 회원이신가요?{" "}
                                    <Accent onClick={toLogin}>로그인</Accent>
                                </Text>
                            </TextContainer>
                        </ButtonContainer>
                    </Form>
                </Container>
            </Background>
        </>
    )
}

export default Inform

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(white 50%, ${Colors.Orange100});
    display: flex;
    justify-content: center;
    align-items: start;
`

const Container = styled.div`
    width: 25%;
    padding-top: 8%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 40px;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const Title = styled.p`
    font-size: 40px;
    font-weight: 900;
    color: ${Colors.Black};
`

const SubTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${Colors.Gray500};
`

const Form = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const TextContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${Colors.Gray400};
`

const Accent = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${Colors.Orange400};
    cursor: pointer;
`
