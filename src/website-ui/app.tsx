import React, {useEffect, useState} from "react";
import Spinner from "@njmaeff/website-ui/components/Spinner";
import WebFont from "webfontloader"
import {useRoutes} from "react-router-dom";
import buildRoutes from "@njmaeff/website-ui/lib/routes";
import {FullView} from "@njmaeff/website-ui/components/layout/full-view";

export function App() {
    const [isLoaded, loaded] = useState(false);
    const Routes = useRoutes(buildRoutes())

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Lato']
            },
            active: () => setTimeout(() => loaded(true), 1000)
        });
    }, []);

    return (
                isLoaded ?
                    Routes :
                    <FullView>
                        <Spinner/>
                    </FullView>
    );
}
