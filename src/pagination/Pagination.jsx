import React from "react";
import { getPagesArray } from "../utils/pages";

const Pagination = ({ totalPage, page, changePage }) => {
	let pagesArray = getPagesArray(totalPage);
	return (
		<div className="Pagination">
			{pagesArray.map((p) => {
				return (
					<span
						// onClick={() => { setPage(p) }}
						onClick={() => {
							changePage(p);
						}}
						key={p}
						className={p === page ? "active" : ""}
					>
						{" "}
						{p}
					</span>
				);
			})}
		</div>
	);
};

export default Pagination;
