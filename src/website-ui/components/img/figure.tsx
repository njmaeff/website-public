import React, {useContext} from "react";
import styled, {ThemeContext} from "styled-components";

export interface Figure {
    caption: string
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

export const Figure: React.FC<JSX.IntrinsicElements['img'] & Figure> = ({caption, ...imgProps}) => {

    return (
        <StyledFigure>
            <img {...imgProps}/>
            <figcaption>
                {caption}
            </figcaption>
        </StyledFigure>
    )
};
export const DynamicFigure = ({sm, lg, caption}) => {
    const theme = useContext(ThemeContext)

    const img = theme.media.med || theme.media.lg ? lg : sm

    return <Figure {...img}
                   caption={caption}/>
};
