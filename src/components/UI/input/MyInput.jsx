import React from "react";
import classes from "./myInput.module.css";

const myInput = React.forwardRef((props, ref) => {
	return <input ref={ref} {...props} className={classes.myInput} />;
});

export default myInput;
