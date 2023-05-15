const rijndaelMatrix = [
	[0x02, 0x03, 0x01, 0x01],
	[0x01, 0x02, 0x03, 0x01],
	[0x01, 0x01, 0x02, 0x03],
	[0x03, 0x01, 0x01, 0x02],
];

export const mixColumns = (inputMatrix, type = "normal") => {
	let resultMatrix = [[], [], [], []];

	// Perform mix-column operation for each column in the state matrix
	for (let col = 0; col < 4; col++) {
		for (let row = 0; row < 4; row++) {
			let sum = "00"; // Initialize the sum

			// Perform multiplication and addition for each element in the column
			for (let i = 0; i < 4; i++) {
				let rijndaelValue = rijndaelMatrix[row][i].toString(16).padStart(2, "0");
				let stateValue = inputMatrix[i][col].toString(16).padStart(2, "0");
				sum = gf8Addition(sum, gf8Multiplication(rijndaelValue, stateValue));
			}

			resultMatrix[row][col] = parseInt(sum, 16);
		}
	}

	return resultMatrix;
};

// Multiplication operation in GF(2^8)
function gf8Multiplication(value1, value2) {
	let val1 = parseInt(value1, 16);
	let val2 = parseInt(value2, 16);
	let result = 0;

	while (val2 > 0) {
		if (val2 & 1) {
			result ^= val1;
		}

		val1 <<= 1;

		if (val1 & 0x100) {
			val1 ^= 0x11b; // XOR with the irreducible polynomial x^8 + x^4 + x^3 + x + 1
		}

		val2 >>= 1;
	}

	return result.toString(16).padStart(2, "0");
}

function gf8Addition(value1, value2) {
	let val1 = parseInt(value1, 16);
	let val2 = parseInt(value2, 16);

	let result = val1 ^ val2;

	return result.toString(16).padStart(2, "0");
}
