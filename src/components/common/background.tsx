import { ReactNode } from "react"
import styled from "styled-components"
import { Colors } from "../../style/colors"
import Header from "./header"

interface Props {
    title?: string
    subtitle?: string
    children?: ReactNode
}

function Background({ title, subtitle, children }: Props) {
    return (
        <>
            <Container>
                <TopContainer>
                    <Header />
                    <TitleContainer>
                        <Title>{title}</Title>
                        <SubTitle>{subtitle}</SubTitle>
                    </TitleContainer>
                </TopContainer>

                <BottomContainer>
                    <Wrapper>{children}</Wrapper>
                </BottomContainer>
            </Container>
        </>
    )
}

export default Background

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${Colors.White};
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`

const TopContainer = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const TitleContainer = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 25%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 800;
    color: ${Colors.Black};
`

const SubTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${Colors.Gray500};
`

const BottomContainer = styled.div`
    width: 100%;
    min-height: 75vh;
    background-color: ${Colors.Orange100};
`

const Wrapper = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`
