import styled from "styled-components"
import { Colors } from "../style/colors"
import Background from "../components/common/background"
import Todo_list from "../components/todo/todo_list"
import { useEffect, useState } from "react"
import TodoService from "../apis/todo"
import Todo_Input from "../components/todo/Todo_Input"
import { Todo } from "../apis/todo/type"

function Todo_page() {
    let data: Todo[] = []

    useEffect(() => {
        const getData = async () => {
            data = await TodoService.read()
        }
        getData()
    })

    return (
        <>
            <Background
                title="일정관리"
                subtitle="여기서 자신의 일정을 관리하세요"
            >
                <Container>
                    <Todo_Input />
                    <ListContainer>
                        <ListHeader>
                            <HeaderTitle>투두리스트</HeaderTitle>
                        </ListHeader>
                        {data &&
                            data.map((item) => (
                                <Todo_list
                                    title={item.title}
                                    content={item.context}
                                    date={item.date}
                                />
                            ))}
                    </ListContainer>
                </Container>
            </Background>
        </>
    )
}

export default Todo_page

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
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
