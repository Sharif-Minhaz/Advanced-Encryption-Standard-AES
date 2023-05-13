export default function printMatrixAsHexStr(inputMatrix) {
	const result = [[], [], [], []];

	for (let i = 0; i < inputMatrix.length; i++) {
		for (let j = 0; j < inputMatrix[i].length; j++) {
			let value = inputMatrix[i][j].toString(16);
			value = value.length === 1 ? "0" + value : value;
			result[i][j] = value;
		}
	}

	return result;
}
