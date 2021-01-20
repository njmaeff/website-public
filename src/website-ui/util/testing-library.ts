import {Environment} from "@njmaeff/website-ui/lib/environment";
import {render} from "@testing-library/react";

const customRender = (ui, options?) =>
    render(ui, {wrapper: Environment, ...options});

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
