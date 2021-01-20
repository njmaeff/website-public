import {useMediaQuery as useMedia} from "@material-ui/core";

export const useMediaQuery = (size) => useMedia(size, {noSsr: true});
