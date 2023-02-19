import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./style.css";
import {BrowserRouter} from "react-router-dom"
// ReactDOM.render(
//     <App/>,
//     document.querySelector("#root")
//   )

const root=ReactDOM.createRoot(document.querySelector("#root"))
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)