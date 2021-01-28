console.log("it's a fucking console log, big whoop, what do you want, cheese?");

import {store} from './store'

let state = store.getState();
console.log(state);
console.log(state["queue"][0]);

import React from "react";
import ReactDOM from 'react-dom';

import { Queue } from "./queue";

ReactDOM.render(
    "react app wip",
    document.getElementById("app")
);
