export const addRoundKey = (inputMatrix, key) => {
	return performXOR(inputMatrix, key);
};

function performXOR(matrix1, matrix2) {
	const result = [[], [], [], []];

	matrix1.forEach((row, i) => {
		row.forEach((element, j) => {
			result[i][j] = (element ^ matrix2[i][j]).toString(16);
		});
	});

	return result;
}
