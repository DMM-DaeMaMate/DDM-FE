import Header from "../components/common/header"
import TimeTable from "../components/timtable"
import styled from "styled-components"
import { Colors } from "../style/colors"
import { LuNotebookPen } from "react-icons/lu"
import { GrNotes } from "react-icons/gr"
import { BsPersonCircle } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

function Main() {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <Container>
                <TopContainer>
                    <Title>홈</Title>
                    <SubTitle>홈에서 종합적으로 확인하고 관리하세요</SubTitle>
                </TopContainer>

                <BottomContainer>
                    <Wrapper>
                        <ButtonContainer>
                            <ButtonWrapper>
                                <Button>
                                    <LuNotebookPen />
                                </Button>
                                일정관리
                            </ButtonWrapper>
                            <ButtonWrapper>
                                <Button>
                                    <GrNotes />
                                </Button>
                                성적기록
                            </ButtonWrapper>
                            <ButtonWrapper>
                                <Button onClick={() => navigate("/mypage")}>
                                    <BsPersonCircle />
                                </Button>
                                마이페이지
                            </ButtonWrapper>
                        </ButtonContainer>

                        <TimeTableContainer>
                            <TimeTableTitle>이번 주 시간표</TimeTableTitle>
                            <TimeTable />
                        </TimeTableContainer>
                    </Wrapper>
                </BottomContainer>
            </Container>
        </>
    )
}

export default Main

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
`

const Wrapper = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${Colors.Orange500};
    font-weight: 800;
    gap: 5px;
`

const Button = styled.button`
    padding: 10px;
    height: 80px;
    width: 80px;
    border: 1px solid ${Colors.Orange300};
    border-radius: 30px;
    background-color: ${Colors.White};
    color: ${Colors.Orange500};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 40px;
`

const TimeTableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const TimeTableTitle = styled.p`
    color: ${Colors.Orange800};
    font-size: 20px;
    font-weight: 800;
    margin-left: 10px;
`
