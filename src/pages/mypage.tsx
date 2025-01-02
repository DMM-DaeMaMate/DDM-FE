import styled from "styled-components"
import { Colors } from "../style/colors"
import Header from "../components/common/header"
import Input from "../components/common/input"
import Button from "../components/common/button"

function Mypage() {
    return (
        <>
            <Header />
            <Container>
                <TopContainer>
                    <Title>마이페이지</Title>
                    <SubTitle>이 곳에서 자신의 정보를 수정하세요</SubTitle>
                </TopContainer>

                <BottomContainer>
                    <Wrapper>
                        <Form>
                            <Input
                                label="이름"
                                placeholder="이름을 수정해주세요"
                                id="name"
                                width={450}
                            />
                            <Input
                                label="학년"
                                placeholder="학년을 수정해주세요"
                                id="grade"
                                type="number"
                                width={450}
                                max={3}
                            />
                            <Input
                                label="반"
                                placeholder="반을 수정해주세요"
                                id="class"
                                type="number "
                                width={450}
                                max={4}
                            />
                            <ButtonWrapper>
                                <Cancel>되돌리기</Cancel>
                                <Button width={125}>수정하기</Button>
                            </ButtonWrapper>
                        </Form>

                        <RemoveContainer>
                            계정 삭제 시 프로필 및 기록 내용이 삭제됩니다.
                            <RemoveButton>계정삭제</RemoveButton>
                        </RemoveContainer>
                    </Wrapper>
                </BottomContainer>
            </Container>
        </>
    )
}

export default Mypage

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${Colors.White};
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`

const TopContainer = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const Title = styled.div`
    margin-top: 40px;
    margin-left: 25%;
    font-size: 24px;
    font-weight: 800;
    color: ${Colors.Black};
`

const SubTitle = styled.div`
    margin-left: 25%;
    font-size: 16px;
    font-weight: 500;
    color: ${Colors.Gray500};
`

const BottomContainer = styled.div`
    width: 100%;
    min-height: 75vh;
    background-color: ${Colors.Orange100};
    display: flex;
    justify-content: center;
    align-items: start;
`

const Wrapper = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

const Form = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 50px;
`

const Cancel = styled.button`
    width: 125px;
    height: 35px;
    cursor: pointer;
    background-color: ${Colors.White};
    border: 2px solid ${Colors.Gray300};
    border-radius: 8px;
    color: ${Colors.Black};
    font-size: 16px;
    font-weight: 550;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    margin-left: auto;
`

const RemoveContainer = styled.div`
    margin-top: 20px;
    width: 450px;
    padding: 25px;
    border: 1px solid ${Colors.Gray200};
    background-color: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.Gray400};
    font-weight: 500;
    font-size: 14px;
    border-radius: 12px;
`

const RemoveButton = styled.button`
    margin-left: auto;
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${Colors.CriticalMain};
    border-radius: 8px;
    border: none;
    color: ${Colors.White};
    font-size: 16px;
    font-weight: 550;
    display: flex;
    justify-content: center;
    align-items: center;
`
