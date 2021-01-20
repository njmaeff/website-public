import {useContext} from "react";
import {ThemeContext} from "styled-components";

export const useWidth = ({lg = '100%', med = '100%'}) => {
    const theme = useContext(ThemeContext)
    if (theme.media.lg) {
        return lg
    }
    if (theme.media.med) {
        return med
    }
};
