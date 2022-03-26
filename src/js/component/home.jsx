import React from "react";
import { Light } from "./TrafficLight.jsx";

//create your first component
const Home = (props) => {
	return (
		<div>
			<Light color={props.color} handleRun={props.handleRun} />
		</div>
	);
};

export default Home;
