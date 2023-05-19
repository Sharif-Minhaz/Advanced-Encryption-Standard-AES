import { addRoundKey } from "./addRoundKey.js";
import { mixColumns } from "./mixColumns.js";
import { shiftRows } from "./shiftRows.js";
import { substituteBytes } from "./substituteBytes.js";
import printMatrixAsHexStr from "../utils/printMatrixAsHexStr.js";
import { generateHexString } from "../utils/covertMatrix.js";

export const encryptionAES = (inputMatrix, aesKey) => {
	// Create a deep copy of the 'key' array
	let key = aesKey.map((row) => [...row]);

	console.log("Input: ", printMatrixAsHexStr(inputMatrix));

	console.log("\nKey: ", printMatrixAsHexStr(key));

	console.log("\n================== initial round ===================");
	let state1 = addRoundKey(inputMatrix, key, 0);
	console.log("Add round key: ", printMatrixAsHexStr(state1));

	for (let index = 1; index < 11; index++) {
		console.log("\n=================== Round: %d ===================", index);
		let state2 = substituteBytes(state1);
		console.log("Substitution bytes: ", printMatrixAsHexStr(state2));

		let state3 = shiftRows(state2);
		console.log("\nShift rows: ", printMatrixAsHexStr(state3));

		let state4;
		if (index !== 10) {
			state4 = mixColumns(state3);
			console.log("\nMix columns: ", printMatrixAsHexStr(state4));
		} else {
			state4 = state3;
		}

		let matrixes = addRoundKey(state4, key, index); // getting added round key matrix + new key
		let state5 = matrixes[0];
		console.log("\nAdd round key: ", printMatrixAsHexStr(state5));

		key = matrixes[1]
		state1 = state5;
	}

	console.log("\n=================== Result ======================");

	console.log("After Encryption: ", generateHexString(printMatrixAsHexStr(state1)));
};
