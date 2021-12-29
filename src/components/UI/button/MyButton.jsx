import React from "react";
import classes from "./myButton.module.css";

const MyButton = ({ children, ...props }) => {
	return (
		<button {...props} className={classes.myBttn}>
			{children}
		</button>
	);
};

export default MyButton;
