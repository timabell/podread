// import {store} from './store'
// let state = store.getState();
// console.log(state);
//console.log(state["queue"][0]); // type error but works
// console.log("it's a fucking console log, big whoop, what do you want, cheese?");

import React from "react";
import ReactDOM from 'react-dom';
import {Main} from './main'

ReactDOM.render(
    <Main/>,
    document.getElementById("app")
);
