import SmHikePhoto
    from "@njmaeff/website-ui/assets/img/portraits/hike.jpg?base=450";
import MedHikePhoto
    from "@njmaeff/website-ui/assets/img/portraits/hike.jpg?base=1080";
import {DynamicFigure} from "@njmaeff/website-ui/components/img/figure";
import React from "react";


export const HikePhoto = ({caption}) => {
    return (<DynamicFigure sm={SmHikePhoto} lg={MedHikePhoto}
                           caption={caption}/>)
};
