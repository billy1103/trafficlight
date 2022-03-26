//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let color = "red";

function setColor() {
	if (color == "red") {
		color = "orange";
	} else if (color == "orange") {
		color = "green";
	} else if (color == "green") {
		color = "red";
	}
	ReactDOM.render(<Home color={color} />, document.querySelector("#app"));
}

setInterval(setColor, 2000);
