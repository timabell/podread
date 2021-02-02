import React from "react";
import {Provider} from "react-redux";
import {store} from "./store";
import {ConnectedQueue} from "./queue";

export const Main = () =>(
    <Provider store={ store}>
        <div>toooodoooo</div>
        <ConnectedQueue/>
    </Provider>
)
