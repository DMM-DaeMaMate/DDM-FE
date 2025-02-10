import styled from "styled-components"
import { Colors } from "../style/colors"
import Input from "../components/common/input"
import Button from "../components/common/button"
import Background from "../components/common/background"
import Modal from "../components/common/modal"
import { useEffect, useState } from "react"
import Logout from "../components/user/Logout"
import { useNavigate } from "react-router-dom"
import UserService from "../apis/user"

function Mypage() {
    const navigater = useNavigate()
    const [modal, setModal] = useState<Boolean>(false)
    const [logoutModal, setLogout] = useState<Boolean>(false)
    const [pw, setPw] = useState<Boolean>(false)
    const [grade, setGrade] = useState<number | string>()
    const [my_class, setMyclass] = useState<number | string>()

    const getData = async () => {
        const data = await UserService.get()
        setGrade(data.grade)
        setMyclass(data.my_class)
    }

    useEffect(() => {
        const escModalClose = (e: KeyboardEvent) => {
            if (e.key == "Escape") {
                setModal(false)
                setLogout(false)
                setPw(false)
            }
        }

        getData()
        window.addEventListener("keydown", escModalClose)
        return () => window.removeEventListener("keydown", escModalClose)
    }, [])

    const logoutHandler = async () => {
        const logoutTF = await UserService.logout()
        if (logoutTF) {
            navigater("/")
        }
    }

    return (
        <>
            {modal && (
                <Modal
                    title="계정 삭제하기"
                    content={`계정 삭제 시 프로필 및 기록 내용이 삭제됩니다. \n 삭제하시겠습니까?`}
                    check={() => {
                        setModal(!modal)
                        setPw(true)
                    }}
                    close={() => setModal(!modal)}
                />
            )}

            {logoutModal && (
                <Modal
                    title="로그아웃"
                    content="로그아웃하시겠습니까?"
                    check={() => {
                        setLogout(false)
                        navigater("/")
                    }}
                    close={logoutHandler}
                />
            )}
            {pw && <Logout close={() => setPw(false)} setModal={setPw} />}

            <Background
                title="마이페이지"
                subtitle="이 곳에서 자신의 정보를 수정하세요"
            >
                <>
                    <Form>
                        <Input
                            label="학년"
                            placeholder="학년을 수정해주세요"
                            id="grade"
                            type="number"
                            width={450}
                            max={3}
                            value={grade}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setGrade(e.target.value)}
                        />
                        <Input
                            label="반"
                            placeholder="반을 수정해주세요"
                            id="class"
                            type="number "
                            width={450}
                            max={4}
                            value={my_class}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setMyclass(e.target.value)}
                        />
                        <ButtonWrapper>
                            <Cancel>되돌리기</Cancel>
                            <Button width={125}>수정하기</Button>
                        </ButtonWrapper>
                    </Form>
                </>

                <WarnContainer>
                    <ButtonContainer>
                        로그아웃하여 처음 페이지로 이동합니다.
                        <LogoutButton onClick={() => setLogout(!logoutModal)}>
                            로그아웃
                        </LogoutButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        계정 삭제 시 프로필 및 기록 내용이 삭제됩니다.
                        <RemoveButton onClick={() => setModal(!modal)}>
                            계정삭제
                        </RemoveButton>
                    </ButtonContainer>
                </WarnContainer>
            </Background>
        </>
    )
}

export default Mypage

const Form = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 50px;
`

const Cancel = styled.button`
    width: 125px;
    height: 35px;
    cursor: pointer;
    background-color: ${Colors.White};
    border: 2px solid ${Colors.Gray300};
    border-radius: 8px;
    color: ${Colors.Black};
    font-size: 16px;
    font-weight: 550;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    margin-left: auto;
`

const ButtonContainer = styled.div`
    margin-top: 20px;
    width: 450px;
    padding: 25px;
    border: 1px solid ${Colors.Gray200};
    background-color: ${Colors.White};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.Gray400};
    font-weight: 500;
    font-size: 14px;
    border-radius: 12px;
`

const WarnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const RemoveButton = styled.button`
    margin-left: auto;
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${Colors.CriticalMain};
    border-radius: 8px;
    border: none;
    color: ${Colors.White};
    font-size: 16px;
    font-weight: 550;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoutButton = styled.button`
    margin-left: auto;
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${Colors.Gray500};
    border-radius: 8px;
    border: none;
    color: ${Colors.White};
    font-size: 16px;
    font-weight: 550;
    display: flex;
    justify-content: center;
    align-items: center;
`
