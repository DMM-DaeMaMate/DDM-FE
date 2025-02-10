import styled from "styled-components"
import { Colors } from "../../style/colors"
import React from "react"

interface props {
    label?: string
    placeholder?: string
    type?: string
    max?: number
    width?: number
    height?: number
    id?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function Input_big({
    label,
    placeholder,
    type = "text",
    id,
    value,
    onChange,
}: props) {
    return (
        <>
            <Container>
                <Label htmlFor={id}>{label}</Label>
                <InputWrapper>
                    <CustomInput
                        placeholder={placeholder}
                        value={value}
                        name={id}
                        id={id}
                        onChange={onChange}
                    />
                </InputWrapper>
            </Container>
        </>
    )
}

export default Input_big

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const Label = styled.label`
    margin-top: 2px;
    font-size: 14px;
    font-weight: 550;
    color: ${Colors.Gray700};
`

const InputWrapper = styled.div`
    padding: 0 5px;
    border: 1px solid ${Colors.Gray200};
    background: ${Colors.Gray50};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
`

const CustomInput = styled.textarea`
    resize: none;
    width: 300px;
    height: 300px;
    background: none;
    border: none;
    outline: none;
    font-size: 14px;
    margin-top: 10px;
    text-align: left;
    vertical-align: top;

    &::placeholder {
        color: ${Colors.Gray400};
    }

    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`
