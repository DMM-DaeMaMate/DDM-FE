import { useState } from "react"
import Input from "../common/input"
import Modal from "../common/modal"
import { useNavigate } from "react-router-dom"
import UserService from "../../apis/user"

interface Props {
    close?: () => void
    setModal: React.Dispatch<React.SetStateAction<Boolean>>
}

function Logout({ setModal, close }: Props) {
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onSubmit = async () => {
        if (password) {
            const response = await UserService.exit({ password })
            if (response == 200) {
                setModal(false)
                navigate("/")
            } else {
                setPassword("")
                alert("회원탈퇴에 실패했습니다")
            }
        }
    }

    return (
        <>
            <Modal check={onSubmit} close={close} title="비밀번호 확인">
                <Input
                    label="비밀번호"
                    placeholder="회원탈퇴를 위해 비밀번호를 입력해주세요"
                    width={500}
                    type="password"
                    max={16}
                    value={password}
                    onChange={onChange}
                />
            </Modal>
        </>
    )
}

export default Logout
