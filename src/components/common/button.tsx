import styled from "styled-components"
import { Colors } from "../../style/colors"
import { ReactNode } from "react"

interface props {
    width?: number
    children?: ReactNode
    onClick?: () => void
}

function Button({ width = 300, children, onClick }: props) {
    return (
        <CustomButton width={width} onClick={onClick}>
            {children}
        </CustomButton>
    )
}

export default Button

const CustomButton = styled.button<{ width: number }>`
    width: ${({ width }) => `${width}px`};
    height: 35px;
    cursor: pointer;
    background-color: ${Colors.Orange400};
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    font-weight: 550;
    display: flex;
    justify-content: center;
    align-items: center;
`
