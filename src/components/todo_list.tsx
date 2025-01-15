import styled from "styled-components"
import { Colors } from "../style/colors"
import Pill_button from "./common/pill_button"

interface props {
    title?: string
    content?: string
    date?: Date
    onChange?: () => void
}

function Todo_list({ title, content, date, onChange }: props) {
    return (
        <>
            <Container>
                <ContentWrapper>
                    <Title>{title || "제목 없음"}</Title>
                    <Content>{content || "내용 없음"}</Content>
                </ContentWrapper>
                <Button>
                    <Pill_button width={60}>삭제</Pill_button>
                </Button>
            </Container>
        </>
    )
}

export default Todo_list

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: none;
    border-bottom: 2px solid ${Colors.Gray400};
    padding: 10px 0;
`
const Button = styled.div`
    margin-right: 15px;
    margin-left: auto;
`
const ContentWrapper = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.Black};
`

const Content = styled.div`
    font-size: 14px;
    color: ${Colors.Gray600};
`
