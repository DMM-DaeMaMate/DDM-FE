import styled from "styled-components"
import { Colors } from "../../style/colors"
import { IoMdPerson } from "react-icons/io"

interface props {
    name?: string
}

function Dropdown({ name }: props) {
    return (
        <>
            <Container>
                <Wrapper>
                    <Profile>
                        <IoMdPerson />
                    </Profile>
                    <Nickname>{name}</Nickname>
                </Wrapper>

                <Menu>마이페이지</Menu>
                <Logout>로그아웃</Logout>
            </Container>
        </>
    )
}

export default Dropdown

const Container = styled.div`
    padding: 20px 0 10px 0;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${Colors.White};
    border: 1px solid ${Colors.Gray300};
    border-radius: 12px;
    position: absolute;
    top: 50px;
    gap: 15px;
`
const Wrapper = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${Colors.Gray300};
`

const Profile = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 15px;
    background: ${Colors.Gray200};
    font-size: 75px;
    color: ${Colors.Gray500};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Nickname = styled.div`
    width: 150px;
    text-align: center;
    font-size: 16px;
    font-weight: 600px;
`

const Menu = styled.div`
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: ${Colors.Gray400};
`

const Logout = styled.div`
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: ${Colors.Gray400};

    &:hover {
        color: ${Colors.CriticalMain};
        transition: 300ms;
    }
`
