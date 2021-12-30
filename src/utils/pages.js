export const getPageCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPage) => {
	let pagesArray = [];
	for (let index = 0; index < totalPage; index++) {
		pagesArray.push(index + 1);
	}

	return pagesArray;
}