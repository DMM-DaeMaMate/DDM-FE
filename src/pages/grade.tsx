import styled from "styled-components"
import { Colors } from "../style/colors"
import Background from "../components/background"
import { IoAddOutline } from "react-icons/io5"
import Subject from "../components/Subject"
import Input_Subject from "../components/Input_Subject"
import { useState } from "react"

function Grade() {
    const [addModal, setAddModal] = useState<Boolean>(false)

    return (
        <>
            {addModal && (
                <Input_Subject
                    type="add"
                    close={() => setAddModal(!addModal)}
                />
            )}

            <Background
                title="성적기록"
                subtitle="성적을 기록하고 평균을 확인하세요"
            >
                <ItemContainer>
                    <TitleBar>과목</TitleBar>
                    <AddSubject onClick={() => setAddModal(!addModal)}>
                        <IoAddOutline />
                    </AddSubject>
                </ItemContainer>

                <ItemContainer>
                    <Subject title="국어" />
                    <Subject title="수학" />
                    <Subject title="사회" />
                    <Subject title="과학" />
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
