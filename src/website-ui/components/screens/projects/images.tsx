import {DynamicFigure} from "@njmaeff/website-ui/components/img/figure";
import Bike1Sm
    from "@njmaeff/website-ui/assets/img/maker-bike/bike1.jpg?base=450"
import Bike1Med
    from "@njmaeff/website-ui/assets/img/maker-bike/bike1.jpg?base=1080"
import Bike2Sm
    from "@njmaeff/website-ui/assets/img/maker-bike/bike2.jpg?base=450"
import Bike2Med
    from "@njmaeff/website-ui/assets/img/maker-bike/bike2.jpg?base=1080"
import Putter1Sm
    from "@njmaeff/website-ui/assets/img/maker-putters/putter1.jpg?base=450"
import Putter1Med
    from "@njmaeff/website-ui/assets/img/maker-putters/putter1.jpg?base=1080"
import Putter2Sm
    from "@njmaeff/website-ui/assets/img/maker-putters/putter2-front.jpg?base=450"
import Putter2Med
    from "@njmaeff/website-ui/assets/img/maker-putters/putter2-front.jpg?base=1080"
import Putter3Sm
    from "@njmaeff/website-ui/assets/img/maker-putters/putter3-back.jpg?base=450"
import Putter3Med
    from "@njmaeff/website-ui/assets/img/maker-putters/putter3-back.jpg?base=1080"
import SuperPhonezSm
    from "@njmaeff/website-ui/assets/img/maker-printer/superphonez.jpg?base=450"
import SuperPhonezMed
    from "@njmaeff/website-ui/assets/img/maker-printer/superphonez.jpg?base=1080"
import Printer3DSm
    from "@njmaeff/website-ui/assets/img/maker-printer/printer-action2.jpg?base=450"
import Printer3DMed
    from "@njmaeff/website-ui/assets/img/maker-printer/printer-action2.jpg?base=1080"

import SmKettleBell
    from "@njmaeff/website-ui/assets/img/maker-printer/kb-side.jpg?base=450"
import LgKettleBell
    from "@njmaeff/website-ui/assets/img/maker-printer/kb-side.jpg?base=1080"


import React from "react";
import {useWidth} from "@njmaeff/website-ui/hooks/useWidth";
import {WidthContainer} from "@njmaeff/website-ui/components/layout/width-container";

export const Bike1 = ({caption}) => <DynamicFigure caption={caption}
                                                   sm={Bike1Sm} lg={Bike1Med}/>

export const Bike2 = ({caption}) => <DynamicFigure sm={Bike2Sm} lg={Bike2Med}
                                                   caption={caption}/>


export const Putter1 = ({caption}) => {
    const width = useWidth({lg: '75%'})

    return <WidthContainer maxWidth={width}>
        <DynamicFigure sm={Putter1Sm}
                       lg={Putter1Med}
                       caption={caption}/></WidthContainer>
}

export const Putter2 = ({caption}) => {
    const width = useWidth({lg: '75%'})

    return <WidthContainer maxWidth={width}>
        <DynamicFigure sm={Putter2Sm}
                       lg={Putter2Med}
                       caption={caption}/></WidthContainer>
}

export const Putter3 = ({caption}) => {
    const width = useWidth({lg: '75%'})

    return <WidthContainer maxWidth={width}>
        <DynamicFigure sm={Putter3Sm}
                       lg={Putter3Med}
                       caption={caption}/></WidthContainer>
}

export const SuperPhonez = ({caption}) => <DynamicFigure sm={SuperPhonezSm}
                                                         lg={SuperPhonezMed}
                                                         caption={caption}/>

export const KettleBell = ({caption}) => <DynamicFigure sm={SmKettleBell}
                                                        lg={LgKettleBell}
                                                        caption={caption}/>

export const Printer3D = ({caption}) => <DynamicFigure sm={Printer3DSm}
                                                       lg={Printer3DMed}
                                                       caption={caption}/>
