import React, { useState } from "react";

export function Light(props) {
	const [color, setColor] = useState("onClick");
	return (
		<div>
			<div className="top"></div>
			<div className="container">
				<div
					onClick={() => setColor("red")}
					className={
						"red light" + (color === "red" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("orange")}
					className={
						"orange light" + (color === "orange" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"green light" + (color === "green" ? " selected" : "")
					}></div>
			</div>
		</div>
	);
}
