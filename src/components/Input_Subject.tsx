import styled from "styled-components"
import { Colors } from "../style/colors"
import Input from "./common/input"
import { useRef, useState } from "react"
import Perform from "./Perform"

interface InputItem {
    id: number
    title: string
    grade: string
    length: number
}

interface Props {
    type?: string
    close?: () => void
}

function Input_Subject({ type, close }: Props) {
    const nextID = useRef<number>(1)
    const [inputs, setInputs] = useState<InputItem[]>([
        { id: 0, title: "", grade: "", length: 1 },
    ])

    const handleAddInput = () => {
        if (inputs.length < 4) {
            const newInput: InputItem = {
                id: nextID.current,
                title: "",
                grade: "",
                length: inputs.length + 1,
            }
            setInputs([...inputs, newInput])
            nextID.current += 1
        }
    }

    const handleRemoveInput = (id: number) => {
        setInputs(inputs.filter((input) => input.id !== id))
    }

    const handleInputChange = (
        id: number,
        key: keyof InputItem,
        value: string | number
    ) => {
        setInputs(
            inputs.map((input) =>
                input.id === id ? { ...input, [key]: value } : input
            )
        )
    }

    return (
        <>
            <Background>
                <Container>
                    <Form>
                        <Input
                            label="과목명"
                            placeholder="과목명을 입력해주세요"
                            id="subject"
                            width={350}
                        />
                        <Input
                            label="중간고사"
                            placeholder="중간고사 성적을 입력해주세요"
                            id="subject"
                            type="number"
                            max={100}
                            width={350}
                        />
                        <Input
                            label="기말고사"
                            placeholder="기말고사 성적을 입력해주세요"
                            type="number"
                            max={100}
                            id="subject"
                            width={350}
                        />

                        {inputs.map((input) => (
                            <>
                                {input.id == 0 && (
                                    <Perform
                                        id={input.id}
                                        name={input.title}
                                        add={true}
                                        grade={input.grade}
                                        onClick={handleAddInput}
                                        onTitleChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleInputChange(
                                                input.id,
                                                "title",
                                                e.target.value
                                            )
                                        }
                                        onGradeChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleInputChange(
                                                input.id,
                                                "grade",
                                                e.target.value
                                            )
                                        }
                                    />
                                )}
                                {input.id != 0 && (
                                    <Perform
                                        id={input.id}
                                        name={input.title}
                                        add={false}
                                        grade={input.grade}
                                        onClick={() =>
                                            handleRemoveInput(input.id)
                                        }
                                        onTitleChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleInputChange(
                                                input.id,
                                                "title",
                                                e.target.value
                                            )
                                        }
                                        onGradeChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleInputChange(
                                                input.id,
                                                "grade",
                                                e.target.value
                                            )
                                        }
                                    />
                                )}
                            </>
                        ))}
                    </Form>
                    <ButtonWrapper>
                        <CancleButton onClick={close}>취소하기</CancleButton>
                        <SubmitButton>
                            {type == "add" ? "추가하기" : "수정하기"}
                        </SubmitButton>
                    </ButtonWrapper>
                </Container>
            </Background>
        </>
    )
}

export default Input_Subject

const Background = styled.div`
    z-index: 999;
    width: 100%;
    min-height: 100vh;
    background: #00000060;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 450px;
    min-height: 85vh;
    padding: 20px;
    background: ${Colors.White};
    border-radius: 24px;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 15px;
`

const ButtonWrapper = styled.div`
    width: 365.6px;
    display: flex;
    justify-content: center;
    margin-top: auto;
    align-items: center;
`

const CancleButton = styled.button`
    width: 180px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background: ${Colors.Gray300};
    color: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const SubmitButton = styled.button`
    margin-left: auto;
    width: 180px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background: ${Colors.Orange300};
    color: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
