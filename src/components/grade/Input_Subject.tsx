import styled from "styled-components"
import { Colors } from "../../style/colors"
import Input from "../common/input"
import { useEffect, useRef, useState } from "react"
import Perform from "./Perform"
import ResultsService from "../../apis/results"
import { Results } from "../../apis/results/type"

interface InputItem {
    id: number
    content: string
    score: number
    length: number
}

interface Props {
    type?: string
    setModal: React.Dispatch<React.SetStateAction<Boolean>>
    subjectData?: Results | null
}

function Input_Subject({ type, setModal, subjectData }: Props) {
    const [subject, setSubject] = useState<string>("")
    const [midterm_examination, setMid] = useState(
        subjectData?.midterm_examination.toString() || ""
    )
    const [final_examination, setFin] = useState(
        subjectData?.final_examination.toString() || ""
    )

    const nextID = useRef<number>(1)
    const [performance_assessment, setInputs] = useState<InputItem[]>(
        subjectData?.performance_assessment.map((item, index) => ({
            id: item.id ?? index,
            content: item.content ?? "",
            score: item.score ?? 0,
            length: item.length ?? 1,
        })) || [{ id: 0, content: "", score: 0, length: 1 }]
    )

    const handleAddInput = () => {
        if (performance_assessment.length < 4) {
            const newInput: InputItem = {
                id: nextID.current,
                content: "",
                score: 0,
                length: performance_assessment.length + 1,
            }
            setInputs([...performance_assessment, newInput])
            nextID.current += 1
        }
    }

    const handleRemoveInput = (id: number) => {
        setInputs(performance_assessment.filter((input) => input.id !== id))
    }

    const handleInputChange = (
        id: number,
        key: keyof InputItem,
        value: string | number
    ) => {
        setInputs(
            performance_assessment.map((input) =>
                input.id === id ? { ...input, [key]: value } : input
            )
        )
    }

    const ResultsSubmit = async () => {
        if (subject && midterm_examination && final_examination) {
            if (type === "add") {
                const response = await ResultsService.create({
                    subject,
                    midterm_examination: parseInt(midterm_examination),
                    final_examination: parseInt(final_examination),
                    performance_assessment,
                })
                if (response === 200) setModal(false)
                else alert("기록 추가에 실패했습니다.")
            } else if (type === "edit" && subjectData) {
                const response = await ResultsService.update({
                    id: subjectData.id,
                    subject,
                    midterm_examination: parseInt(midterm_examination),
                    final_examination: parseInt(final_examination),
                    performance_assessment,
                })
                if (response === 200) setModal(false)
                else alert("기록 수정에 실패했습니다.")
            }
        }
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
                            value={subject}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setSubject(e.target.value)}
                            width={350}
                        />
                        <Input
                            label="중간고사"
                            placeholder="중간고사 성적을 입력해주세요"
                            id="mid"
                            type="number"
                            value={midterm_examination}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setMid(e.target.value)}
                            max={100}
                            width={350}
                        />
                        <Input
                            label="기말고사"
                            placeholder="기말고사 성적을 입력해주세요"
                            type="number"
                            max={100}
                            value={final_examination}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setFin(e.target.value)}
                            id="subject"
                            width={350}
                        />

                        {performance_assessment.map((input) => (
                            <>
                                {input.id == 0 && (
                                    <Perform
                                        id={input.id}
                                        name={input.content}
                                        add={true}
                                        grade={input.score}
                                        onClick={handleAddInput}
                                        onTitleChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleInputChange(
                                                input.id,
                                                "content",
                                                e.target.value
                                            )
                                        }
                                        onGradeChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleInputChange(
                                                input.id,
                                                "score",
                                                e.target.value
                                            )
                                        }
                                    />
                                )}
                                {input.id != 0 && (
                                    <Perform
                                        id={input.id}
                                        name={input.content}
                                        add={false}
                                        grade={input.score}
                                        onClick={() =>
                                            handleRemoveInput(input.id)
                                        }
                                        onTitleChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleInputChange(
                                                input.id,
                                                "content",
                                                e.target.value
                                            )
                                        }
                                        onGradeChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) =>
                                            handleInputChange(
                                                input.id,
                                                "score",
                                                e.target.value
                                            )
                                        }
                                    />
                                )}
                            </>
                        ))}
                    </Form>
                    <ButtonWrapper>
                        <CancleButton onClick={() => setModal(false)}>
                            취소하기
                        </CancleButton>
                        <SubmitButton onClick={ResultsSubmit}>
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
