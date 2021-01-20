import {Normalize} from "styled-normalize";
import {GlobalStyle} from "./styles";
import * as React from "react";
import {ThemeProvider} from "./theme";
import {StylesProvider} from '@material-ui/core/styles';
import {MDXProvider} from '@mdx-js/react'
import styled from "styled-components";

const Anchor = styled.a`
    color: ${({theme}) => theme.palette.dark};
`

export const MDXAnchor = ({children, ...props}) => <Anchor target={'_blank'}
                                                           rel={'noopener noreferrer'} {...props}>{children}</Anchor>

const components = {
    a: MDXAnchor
}

export function Environment({children}) {
    return (

        <>
            <Normalize/>
            <GlobalStyle/>
            <StylesProvider injectFirst>
                <ThemeProvider>
                    <MDXProvider components={components}>
                        {children}
                    </MDXProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
}
