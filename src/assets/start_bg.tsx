import { styled, keyframes } from "styled-components"

function StartBg() {
    return (
        <Wrapper>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1920"
                height="1080"
                fill="none"
            >
                <g clip-path="url(#a)">
                    <path
                        fill="url(#b)"
                        fill-opacity=".8"
                        d="M1307 458h386v347h-386z"
                    />
                    <path
                        fill="url(#c)"
                        fill-opacity=".8"
                        d="M1410 631h382v347h-382z"
                    />
                    <path
                        fill="url(#d)"
                        fill-opacity=".8"
                        d="M1353 940h386v347h-386z"
                    />
                    <path
                        fill="url(#e)"
                        fill-opacity=".8"
                        d="M1145 711h386v347h-386z"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="url(#f)"
                        transform="matrix(1 0 0 -1 26 570)"
                    />
                    <circle cx="76.5" cy="53.5" r="252.5" fill="url(#g)" />
                    <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="url(#h)"
                        transform="matrix(1 0 0 -1 26 570)"
                    />
                    <circle cx="139" cy="597" r="13" fill="url(#i)" />
                    <circle cx="422.5" cy="-75.5" r="252.5" fill="url(#j)" />
                    <path fill="url(#k)" d="m210 805 268 190v197H210V805Z" />
                    <path fill="url(#l)" d="m126 784 268 190v197H126V784Z" />
                </g>
                <defs>
                    <linearGradient
                        id="b"
                        x1="1500"
                        x2="1500"
                        y1="805"
                        y2="458"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FBDAAD" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="c"
                        x1="1792"
                        x2="1410"
                        y1="804.5"
                        y2="804.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FFC26E" />
                        <stop
                            offset="1"
                            stop-color="#FFE9CA"
                            stop-opacity=".5"
                        />
                    </linearGradient>
                    <linearGradient
                        id="d"
                        x1="1546"
                        x2="1546"
                        y1="940"
                        y2="1287"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FBDAAD" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="e"
                        x1="1531"
                        x2="1145"
                        y1="884.5"
                        y2="884.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FBDAAD" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="f"
                        x1="50"
                        x2="50"
                        y1="0"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#F9BF78" />
                        <stop
                            offset="1"
                            stop-color="#F0CCA1"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="g"
                        x1="76.5"
                        x2="76.5"
                        y1="-199"
                        y2="306"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#F9BF78" />
                        <stop
                            offset="1"
                            stop-color="#F0CCA1"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="h"
                        x1="50"
                        x2="50"
                        y1="0"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#F9BF78" />
                        <stop
                            offset="1"
                            stop-color="#F0CCA1"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="i"
                        x1="139"
                        x2="139"
                        y1="584"
                        y2="610"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#F9BF78" />
                        <stop
                            offset="1"
                            stop-color="#F0CCA1"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="j"
                        x1="422.5"
                        x2="422.5"
                        y1="-328"
                        y2="177"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#F9BF78" />
                        <stop
                            offset="1"
                            stop-color="#F0CCA1"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="k"
                        x1="344"
                        x2="344"
                        y1="1192"
                        y2="805"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FBDAAD" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="l"
                        x1="260"
                        x2="260"
                        y1="1171"
                        y2="784"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FBDAAD" />
                        <stop offset="1" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 0h1920v1080H0z" />
                    </clipPath>
                </defs>
            </svg>
        </Wrapper>
    )
}

export default StartBg

const FadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`

const Wrapper = styled.div`
    animation: ${FadeIn} 2.5s;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 0;
    position: fixed;
`
