import styled from "styled-components"
import Input from "./common/input"
import { Colors } from "../style/colors"
import { IoAddOutline } from "react-icons/io5"
import { FiMinus } from "react-icons/fi"

interface Props {
    id?: number
    name?: string
    add: boolean
    grade?: string
    onClick?: () => void
    onTitleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onGradeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Perform({
    id,
    name,
    add,
    grade,
    onClick,
    onTitleChange,
    onGradeChange,
}: Props) {
    return (
        <>
            <Container>
                <Input
                    id={`perform${id}`}
                    label="수행평가명"
                    width={230}
                    value={name}
                    onChange={onTitleChange}
                />
                <Input
                    id={`performGrade${id}`}
                    label="점수"
                    type="number"
                    width={100}
                    value={grade}
                    onChange={onGradeChange}
                />

                <Button onClick={onClick}>
                    {add ? <IoAddOutline /> : <FiMinus />}
                </Button>
            </Container>
        </>
    )
}

export default Perform

const Container = styled.div`
    width: 365.6px;
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 5px;
    position: relative;
`

const Button = styled.div`
    position: absolute;
    width: 42px;
    height: 42px;
    border: 1px solid ${Colors.Gray200};
    background: ${Colors.Gray50};
    border-radius: 8px;
    right: -50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.Gray500};
`
