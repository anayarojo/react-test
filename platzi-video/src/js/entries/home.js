import React from "react";
import ReactDOM from "react-dom";
import data from "../api.json";
import Home from "../pages/containers/home.js";

const homeContainer = document.getElementById("home-container");

ReactDOM.render(<Home data={data} />, homeContainer);

