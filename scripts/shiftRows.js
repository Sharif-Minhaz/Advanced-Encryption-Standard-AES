export const shiftRows = (inputMatrix) => {
	const result = [[...inputMatrix[0]], [], [], []]; // first row is unchangeable

	for (let i = 1; i < result.length; i++) {
		result[i] = performShiftRow(inputMatrix[i], i);
	}

	return result;
};

function performShiftRow(matrixRow, round) {
	const singleRow = [...matrixRow];
	const cutOutElements = singleRow.splice(0, round);

	singleRow.push(...cutOutElements);

	return singleRow;
}
