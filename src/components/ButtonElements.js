import styled from "styled-components"

export const Button = styled.button`
border-radius: 4px;
background: ${({ primary }) => (primary ? "#FF8080" : "#80aaff")};
white-space: nowrap;
padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
color: #fff;
font-size: ${({ fontbig }) => (fontbig ? "20px" : "16px")};
outline: none;
border: none;
cursor: pointer;
font-family: "Ubuntu", sans-serif;

&:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#80aaff": "#FF8080")};
}

@media screen and (max-width: 960px) {
    width: 100%;
}
`