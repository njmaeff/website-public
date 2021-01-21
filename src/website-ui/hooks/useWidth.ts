import {useTheme} from "@njmaeff/website-ui/hooks/useTheme";

export const useWidth = ({lg = '100%', med = '100%'}) => {
    const theme = useTheme()
    if (theme.media.lg) {
        return lg
    }
    if (theme.media.med) {
        return med
    }
};
