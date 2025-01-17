import styled from "styled-components"
import { Colors } from "../style/colors"

interface Props {
    title?: string
    onClick?: () => void
}

function Subject({ title, onClick }: Props) {
    return (
        <>
            <Container onClick={onClick}>{title}</Container>
        </>
    )
}

export default Subject

const Container = styled.div`
    width: 600px;
    height: 40px;
    border-radius: 12px;
    cursor: pointer;
    background-color: ${Colors.White};
    color: ${Colors.Black};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;

    &:hover {
        background-color: ${Colors.Gray100};
        transition: 300ms;
    }
`
