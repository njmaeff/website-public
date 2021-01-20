import styled, {css} from "styled-components";
import {viewPorts} from "@njmaeff/website-ui/lib/styles";

const typography = css`
    h1 {
        font-size: 32px;
    }

    h2 {
        border-bottom-color: ${({theme}) => theme.palette.primary};
        border-bottom-style: solid;
        border-bottom-width: thin;
        margin-top: 0;
        margin-bottom: 1em;
    }

    h4, p {
        margin-left: 1em;
    }
`

export const ContainerContent = styled.div<{ noTypography?: boolean, noBackground?: boolean }>`
    position: relative;
    max-width: ${viewPorts.lg};
    margin: 0 auto;
    height: 100vh;
    background: ${({theme, noBackground}) => !noBackground && theme.palette.light};
    color: ${({theme}) => theme.palette.dark};
    ${(props) => !props.noTypography && typography}
`;
