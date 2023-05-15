import { sBox, inverseSBox } from "./sBoxes.js";

export const substituteBytes = (inputMatrix, type = "normal") => {
	const result = [[], [], [], []];

	for (let i = 0; i < inputMatrix.length; i++) {
		for (let j = 0; j < inputMatrix[i].length; j++) {
			let state1 = inputMatrix[i][j].toString(16).split("");
			state1.length === 1 && state1.unshift("0");
			// converting the hex-string into decimal for sBox row and col
			let state2 = state1.map((value) => Number(`0x${value}`));

			result[i][j] =
				type === "normal" ? performSubstitute(state2) : performInverseSubstitute(state2);
		}
	}

	return result;
};

function performSubstitute(state) {
	return sBox[state[0]][state[1]];
}

function performInverseSubstitute(state) {
	return inverseSBox[state[0]][state[1]];
}
