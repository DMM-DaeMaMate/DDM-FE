import styled from "styled-components"
import { Colors } from "../../style/colors"
import Input from "../../components/common/input"
import Button from "../../components/common/button"
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigate = useNavigate()

    const toNext = () => {
        navigate("/inform")
    }

    const toLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <Background>
                <Container>
                    <TitleContainer>
                        <Title>회원가입</Title>
                        <SubTitle>사용할 정보들을 입력해주세요</SubTitle>
                    </TitleContainer>

                    <Form>
                        <InputContainer>
                            <Input
                                label="아이디"
                                placeholder="아이디를 입력해주세요"
                                width={287}
                                id="id"
                                max={16}
                            />
                            <Input
                                label="비밀번호"
                                placeholder="비밀번호를 입력해주세요"
                                id="pw"
                                type="password"
                                max={16}
                            />
                        </InputContainer>

                        <ButtonContainer>
                            <Button onClick={toNext}>다음</Button>

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

export default Signup

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
