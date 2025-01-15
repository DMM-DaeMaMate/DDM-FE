import styled from "styled-components"
import { Colors } from "../style/colors"
import Input from "../components/common/input"
import Input_big from "../components/common/input_big"
import Button from "../components/common/button"
import Background from "../components/background"
import Todo_list from "../components/todo_list"
import { useState } from "react"

function Todo() {
    const [title, setTitle] = useState<String>("")
    const [date, setDate] = useState<String>("")
    const [content, setContent] = useState<String>("")
    const testDate = new Date()
    return (
        <>
            <Background
                title="일정관리"
                subtitle="여기서 자신의 일정을 관리하세요"
            >
                <Container>
                    <TodoContainer>
                        <Title>투두 입력판</Title>
                        <InputContainer>
                            <Input
                                label="제목"
                                placeholder="todo 제목을 입력하세요"
                                id="title"
                                width={300}
                                max={20}
                            />
                            <Input
                                label="날짜"
                                type="date"
                                width={300}
                                max={20}
                            />
                            <Input_big
                                label="내용"
                                placeholder="내용을 입력하세요"
                                id="content"
                            />
                        </InputContainer>
                        <ButtonContainer>
                            <Button width={120}>작성완료</Button>
                        </ButtonContainer>
                    </TodoContainer>
                    <ListContainer>
                        <ListHeader>
                            <HeaderTitle>투두리스트</HeaderTitle>
                        </ListHeader>
                        <Todo_list
                            title="제목"
                            date={testDate}
                            content="내용입니다."
                        />
                    </ListContainer>
                </Container>
            </Background>
        </>
    )
}

export default Todo
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
`

const TodoContainer = styled.div`
    padding: 10px;
    width: 400px;
    min-height: 85vh;
    background: ${Colors.White};
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const Title = styled.p`
    font-weight: bold;
    margin-top: 10px;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 10px;
`

const ListContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const ListHeader = styled.div`
    width: 500px;
    height: 30px;
    background-color: ${Colors.Orange300};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderTitle = styled.p`
    font-size: bold;
    font-weight: bold;
    align-items: center;
    color: ${Colors.White};
`
