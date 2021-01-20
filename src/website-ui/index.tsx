import 'react-hot-loader'
import {hot} from "react-hot-loader/root";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Environment} from "./lib/environment";
import {App} from "./app";
import {BrowserRouter} from "react-router-dom";

const Main = hot(() => (
    <Environment>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Environment>
));

ReactDOM.render(
    <Main/>,
    document.getElementById("root")
);
