import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ children, title, visible, setVisible }) => {
	const rootClasses = [cl.myModal];
	if (visible) {
		rootClasses.push(cl.active);
	}

	return (
		<div>
			<div className={rootClasses.join(" ")}>
				<div className={cl.myModal__title}>{title}</div>
				<div className={cl.myModal__content}>{children}</div>
			</div>
			<div
				className={cl.myModal__backdrop}
				onClick={() => setVisible(!visible)}
			></div>
		</div>
	);
};

export default MyModal;
