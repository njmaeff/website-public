import * as React from "react";
import {useState} from "react";
import {ThemeProvider as SCThemeProvider} from "styled-components";
import {useMediaQuery} from "../hooks/useMediaQuery";
import {media, themes} from "./styles";
import {
    createMuiTheme,
    ThemeProvider as MUThemeProvider
} from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Lato',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});

export const ThemeProvider = ({children}) => {

    const [theme, updateTheme] = useState(themes.storyboard);
    const med = useMediaQuery(media.med);
    const lg = useMediaQuery(media.lg);

    return <MUThemeProvider theme={muiTheme}>
        <SCThemeProvider
            theme={{...theme, media: {med, lg}, util: {updateTheme}}}>
            {children}
        </SCThemeProvider>
    </MUThemeProvider>
};
