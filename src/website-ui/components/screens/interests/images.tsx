import {DynamicFigure} from "@njmaeff/website-ui/components/img/figure";
import React from "react";
import SmGolfPhoto
    from "@njmaeff/website-ui/assets/img/golf/bc-amatuer-castlegar.jpg?base=450";
import SmHockeyPhoto
    from "@njmaeff/website-ui/assets/img/portraits/hockey-scrimmage.jpg?base=450";
import SmCrossFitPhoto
    from "@njmaeff/website-ui/assets/img/crossfit/crossfit-bench-press.jpg?base=450";

import SmXCountryPhoto
    from "@njmaeff/website-ui/assets/img/portraits/ski.jpg?base=450";

import SmRefPhoto
    from "@njmaeff/website-ui/assets/img/portraits/ref-small-pants.jpg?base=450";


import MedGolfPhoto
    from "@njmaeff/website-ui/assets/img/golf/bc-amatuer-castlegar.jpg?base=1080";
import MedHockeyPhoto
    from "@njmaeff/website-ui/assets/img/portraits/hockey-scrimmage.jpg?base=1080&sizes[]=1";
import MedCrossFitPhoto
    from "@njmaeff/website-ui/assets/img/crossfit/crossfit-bench-press.jpg?base=1080";

import MedXCountryPhoto
    from "@njmaeff/website-ui/assets/img/portraits/ski.jpg?base=1080";


import MedRefPhoto
    from "@njmaeff/website-ui/assets/img/portraits/ref-small-pants.jpg?base=1080&sizes[]=1";
import {useWidth} from "@njmaeff/website-ui/hooks/useWidth";
import {WidthContainer} from "@njmaeff/website-ui/components/layout/width-container";

export const Golf = ({caption}) => {

    return (
        <DynamicFigure sm={SmGolfPhoto} lg={MedGolfPhoto} caption={caption}/>)
};

export const Hockey = ({caption}) => {
    const width = useWidth({lg: '75%'})
    return (
        <WidthContainer maxWidth={width}>
            <DynamicFigure sm={SmHockeyPhoto} lg={MedHockeyPhoto}
                           caption={caption}/>
        </WidthContainer>);
};

export const CrossFit = ({caption}) => {
    return (<DynamicFigure sm={SmCrossFitPhoto} lg={MedCrossFitPhoto}
                           caption={caption}/>)
};

export const XCountry = ({caption}) => {
    return (<DynamicFigure sm={SmXCountryPhoto} lg={MedXCountryPhoto}
                           caption={caption}/>)
};

export const Reffing = ({caption}) => {
    const width = useWidth({lg: '75%'})
    return (
        <WidthContainer maxWidth={width}>
            <DynamicFigure sm={SmRefPhoto}
                           lg={MedRefPhoto}
                           caption={caption}/>
        </WidthContainer>
    )
};
