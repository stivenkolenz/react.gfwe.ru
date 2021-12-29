import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ children }) => {
	return (
		<div className={[cl.myModal, cl.active].join(" ")}>
			<div className="cl.myModel__title"></div>
			<div className="cl.myModel__content">{children}</div>
		</div>
	);
};

export default MyModal;
