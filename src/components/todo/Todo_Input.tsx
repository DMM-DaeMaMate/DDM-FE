import styled from "styled-components"
import { Colors } from "../../style/colors"
import Input from "../common/input"
import Input_big from "../common/input_big"
import Button from "../common/button"
import { useState } from "react"
import TodoService from "../../apis/todo"

function Todo_Input() {
    const [title, setTitle] = useState<string>("")
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [context, setContext] = useState<string>("")

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onContextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContext(e.target.value)
    }
    const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = e.target.value
            ? new Date(e.target.value)
            : undefined
        setDate(selectedDate) // 날짜 문자열을 Date 객체로 변환
    }

    const TodoSubmit = async () => {
        if (title && date && context) {
            const response = await TodoService.create(title, date, context)
            if (response == 200) {
                setTitle("")
                setDate(undefined)
                setContext("")
            } else {
                alert("추가에 실패했습니다")
            }
        }
    }

    return (
        <>
            <TodoContainer>
                <Title>투두 입력판</Title>
                <InputContainer>
                    <Input
                        label="제목"
                        placeholder="todo 제목을 입력하세요"
                        id="title"
                        width={300}
                        value={title}
                        onChange={onTitleChange}
                        max={20}
                    />
                    <Input
                        label="날짜"
                        type="date"
                        value={date ? date.toISOString().slice(0, 10) : ""}
                        width={300}
                        max={20}
                        onChange={onDateChange}
                    />
                    <Input_big
                        label="내용"
                        placeholder="내용을 입력하세요"
                        id="content"
                        value={context}
                        onChange={onContextChange}
                    />
                </InputContainer>
                <ButtonContainer>
                    <Button width={120} onClick={TodoSubmit}>
                        작성완료
                    </Button>
                </ButtonContainer>
            </TodoContainer>
        </>
    )
}

export default Todo_Input

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
