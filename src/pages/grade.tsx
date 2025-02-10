import styled from "styled-components"
import { Colors } from "../style/colors"
import Background from "../components/common/background"
import { IoAddOutline } from "react-icons/io5"
import Subject from "../components/grade/Subject"
import Input_Subject from "../components/grade/Input_Subject"
import { useState, useEffect } from "react"
import ResultsService from "../apis/results"
import { Results } from "../apis/results/type"

function Grade() {
    const [addModal, setAddModal] = useState<Boolean>(false)
    const [selectedSubject, setSelectedSubject] = useState<Results | null>(null)
    const [data, setData] = useState<Results[]>([])

    useEffect(() => {
        const getData = async () => {
            const results = await ResultsService.read()
            setData(results)
        }
        const escModalClose = (e: KeyboardEvent) => {
            if (e.key == "Escape") {
                setAddModal(false)
            }
        }
        getData()
        window.addEventListener("keydown", escModalClose)
        return () => window.removeEventListener("keydown", escModalClose)
    }, [])

    return (
        <>
            {addModal && (
                <Input_Subject
                    type={selectedSubject ? "edit" : " add"}
                    setModal={setAddModal}
                    subjectData={selectedSubject}
                />
            )}

            <Background
                title="성적기록"
                subtitle="성적을 기록하고 평균을 확인하세요"
            >
                <ItemContainer>
                    <TitleBar>과목</TitleBar>
                    <AddSubject
                        onClick={() => {
                            setAddModal(true)
                            setSelectedSubject(null)
                        }}
                    >
                        <IoAddOutline />
                    </AddSubject>
                </ItemContainer>

                <ItemContainer>
                    {data &&
                        data.map((v) => (
                            <Subject
                                key={v.id}
                                title={v.subject}
                                onClick={() => {
                                    setSelectedSubject(v)
                                    setAddModal(true)
                                }}
                            />
                        ))}
                </ItemContainer>
            </Background>
        </>
    )
}

export default Grade

const TitleBar = styled.div`
    width: 600px;
    height: 36px;
    border-radius: 18px;
    background: ${Colors.Orange300};
    color: ${Colors.White};
    font-size: 18px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`

const AddSubject = styled.button`
    width: 40px;
    height: 40px;
    border: 2px solid ${Colors.Orange400};
    border-radius: 8px;
    background: ${Colors.White};
    position: relative;
    left: 350px;
    color: ${Colors.Orange400};
    cursor: pointer;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${Colors.Orange400};
        color: ${Colors.White};
        transition: 300ms;
    }
`

const ItemContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`
