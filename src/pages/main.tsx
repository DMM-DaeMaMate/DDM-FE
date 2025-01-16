import TimeTable from "../components/timtable"
import styled from "styled-components"
import { Colors } from "../style/colors"
import { LuNotebookPen } from "react-icons/lu"
import { GrNotes } from "react-icons/gr"
import { BsPersonCircle } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import Background from "../components/background"

function Main() {
    const navigate = useNavigate()

    return (
        <>
            <Background
                title="홈"
                subtitle="홈에서 종합적으로 확인하고 관리하세요"
            >
                <ButtonContainer>
                    <ButtonWrapper>
                        <Button onClick={() => navigate("/todo")}>
                            <LuNotebookPen />
                        </Button>
                        일정관리
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <Button onClick={() => navigate("/grade")}>
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
            </Background>
        </>
    )
}

export default Main

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
