const mixColumnMatrix = [
	["02", "03", "01", "01"],
	["01", "02", "03", "01"],
	["01", "01", "02", "03"],
	["03", "01", "01", "02"],
];

export const mixColumns = (
	inputMatrix = [
		["87", "f2", "4d", "97"],
		["6e", "4c", "90", "ec"],
		["46", "e7", "4a", "c3"],
		["a6", "8c", "d8", "95"],
	],
	type = "normal"
) => {
	const result = [[], [], [], []];
	// for (let i = 0; i < inputMatrix.length; i++) {
	// 	const selectMixColumnMatrixRow = mixColumnMatrix[i].map((data) => parseInt(data, 16));
	// 	const selectInputColumn = [0, 1, 2, 3].map((data) => parseInt(inputMatrix[data][i], 16));

	// 	let mulResult = 0;

	// 	for (let j = 0; j < selectMixColumnMatrixRow.length; j++) {
	// 		mulResult ^= selectMixColumnMatrixRow[j] * selectInputColumn[j];
	// 		result[i][j] = mulResult.toString(16);
	// 	}
	// }

	for (let col = 0; col < 4; col++) {
		const s0 = inputMatrix[col][0];
		const s1 = inputMatrix[col][1];
		const s2 = inputMatrix[col][2];
		const s3 = inputMatrix[col][3];

		inputMatrix[col][0] = multiplyBy2(s0) ^ multiplyBy3(s1) ^ s2 ^ s3;
		inputMatrix[col][1] = s0 ^ multiplyBy2(s1) ^ multiplyBy3(s2) ^ s3;
		inputMatrix[col][2] = s0 ^ s1 ^ multiplyBy2(s2) ^ multiplyBy3(s3);
		inputMatrix[col][3] = multiplyBy3(s0) ^ s1 ^ s2 ^ multiplyBy2(s3);
	}

	// console.log(result);
};

mixColumns();

// Helper function to multiply a value by 2 in the finite field
function multiplyBy2(value) {
	return (value << 1) ^ (value & 0x80 ? 0x1b : 0x00);
}

// Helper function to multiply a value by 3 in the finite field
function multiplyBy3(value) {
	return multiplyBy2(value) ^ value;
}
