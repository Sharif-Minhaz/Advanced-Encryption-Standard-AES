import { sBox } from "./sBoxes.js";

const reconTable = [
	[0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36],
	[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
	[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
];

export const addRoundKey = (inputMatrix, key, round) => {
	if (round === 0) {
		return performXOR(inputMatrix, key);
	} else {
		let newKey = keyExpansion(key, round);
		return [performXOR(inputMatrix, newKey), newKey];
	}
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

function keyExpansion(key, round) {
	const expandedKey = [[], [], [], []];
	const temp = [[key[1][3]], [key[2][3]], [key[3][3]], [key[0][3]]]; // with shift column

	for (let i = 0; i < temp.length; i++) {
		for (let j = 0; j < temp[i].length; j++) {
			let state1 = temp[i][j].toString(16).split("");
			state1.length === 1 && state1.unshift("0");
			// converting the hex-string into decimal for sBox row and col
			let state2 = state1.map((value) => Number(`0x${value}`));

			expandedKey[i][j] = sBox[state2[0]][state2[1]] ^ reconTable[j][round - 1] ^ key[i][j];
		}
	}

	for (let col = 1; col < key[0].length; col++) {
		// Iterate over each row
		for (let row = 0; row < key.length; row++) {
			// Calculate the sum of the previous column values
			let sum = 0;
			for (let i = 0; i <= row; i++) {
				sum = expandedKey[i][col - 1] ^ key[row][col];
			}
			// Assign the sum to the corresponding position in the result array
			expandedKey[row][col] = sum;
		}
	}

	return expandedKey;
}
