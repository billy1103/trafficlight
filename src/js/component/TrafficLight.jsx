import React, { useState } from "react";

export function Light(props) {
	const [color, setColor] = useState("");
	return (
		<div>
			<div className="top"></div>
			<div className="container">
				<div
					onClick={() => setColor("red")}
					className={
						"red light" + (props.color === "red" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("orange")}
					className={
						"orange light" +
						(props.color === "orange" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"green light" +
						(props.color === "green" ? " selected" : "")
					}></div>
			</div>
		</div>
	);
}
