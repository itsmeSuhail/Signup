import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css"
import {BrowserRouter as Browser} from "react-router-dom"
const Root=document.getElementById("root");
ReactDOM.render(
   <Browser>
    <App/>
   </Browser>,
    Root
)