import {addDecorator, addParameters} from '@storybook/react';
import React from "react";
import {Environment} from "../lib/environment";
import {withKnobs} from "@storybook/addon-knobs";
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";

const withGlobal = (Component) => (
    <Environment>
        <Component/>
    </Environment>
);

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphonex',
    },
});


addDecorator(withGlobal);
addDecorator(withKnobs);
