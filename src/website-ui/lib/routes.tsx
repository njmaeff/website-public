import React from 'react';
import {Navigate} from "react-router-dom";
import {ScreenMain} from "@njmaeff/website-ui/components/screens/main";

export enum ROUTES {
    HOME = '/'
}


const buildRoutes = () => {

    return [
        {
            path: ROUTES.HOME,
            element: <ScreenMain/>,
            children: [
                {path: '*', element: <Navigate to={ROUTES.HOME}/>}
            ]
        },
    ]
};

export default buildRoutes;
