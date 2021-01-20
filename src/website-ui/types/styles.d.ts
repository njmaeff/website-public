import 'styled-components'
import {Border, Font, Palette, Spacing} from "@njmaeff/website-ui/lib/styles";

declare module 'styled-components' {
    export interface DefaultTheme {
        border: Border;
        spacing: Spacing;
        palette: Palette;
        font: Font;
        media: {
            lg: boolean
            med: boolean
        }
        util: {
            updateTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>
        }
    }
}

