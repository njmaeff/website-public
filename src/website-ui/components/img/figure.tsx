import React, {useState} from "react";
import styled from "styled-components";
import type {LoadedImage} from "@njmaeff/webpack-loader-image/types";
import {useTheme} from "@njmaeff/website-ui/hooks/useTheme";

export interface Figure {
    caption: string
    photo: LoadedImage
}

const StyledFigure = styled.figure`
  margin: 2em;
  text-align: center;
  img {
    width: 100%;
  }

  figcaption {
    color: ${({theme}) => theme.palette.dark };
    text-align: center;
  }
`;

export const Figure: React.FC<JSX.IntrinsicElements['img'] & Figure> = ({
                                                                            caption,
                                                                            photo
                                                                        }) => {
    const [isLoaded, setLoaded] = useState(false);
    let props;
    if (isLoaded) {
        props = photo;
    } else {
        props = {src: photo.placeholder}
    }
    return (
        <StyledFigure>
            <img {...props}
                 onLoad={() => setLoaded(true)}/>
            <figcaption>
                {caption}
            </figcaption>
        </StyledFigure>
    )
};
export const DynamicFigure = ({sm, lg, caption}) => {
    const theme = useTheme()

    const img = theme.media.med || theme.media.lg ? lg : sm

    return <Figure photo={img}
                   caption={caption}/>
};
