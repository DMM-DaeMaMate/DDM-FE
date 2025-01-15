import styled from "styled-components"
import { Colors } from "../../style/colors"
import { ReactNode } from "react"

interface props {
    width?: number
    children?: ReactNode
    onClick?: () => void
}

function Pill_button({ width = 300, children, onClick }: props) {
    return (
        <CustomButton width={width} onClick={onClick}>
            {children}
        </CustomButton>
    )
}

export default Pill_button

const CustomButton = styled.button<{ width: number }>`
    width: ${({ width }) => `${width}px`};
    height: 35px;
    cursor: pointer;
    border: ${Colors.CriticalMain} 3px solid;
    border-radius: 40px;
    font-weight: bold;
    color: ${Colors.CriticalMain};
    font-size: 16px;
    font-weight: 550;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;

    &:hover {
        background-color: ${Colors.CriticalMain};
        color: white;
        transition: 300ms;
    }
`
