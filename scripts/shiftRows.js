export const shiftRows = (inputMatrix, type = "normal") => {
	const result = [[...inputMatrix[0]], [], [], []]; // first row is unchangeable

	for (let i = 1; i < result.length; i++) {
		result[i] =
			type === "normal"
				? performShiftRow(inputMatrix[i], i)
				: performInverseShiftRow(inputMatrix[i], i);
	}

	return result;
};

function performShiftRow(matrixRow, round) {
	const singleRow = [...matrixRow];
	const cutOutElements = singleRow.splice(0, round);

	singleRow.push(...cutOutElements);

	return singleRow;
}

function performInverseShiftRow(matrixRow, round) {
	const singleRow = [...matrixRow];
	const cutOutElements = singleRow.splice(-round);

	singleRow.unshift(...cutOutElements);

	return singleRow;
}
