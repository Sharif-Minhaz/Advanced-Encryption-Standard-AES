import { addRoundKey } from "./addRoundKey.js";
import { mixColumns } from "./mixColumns.js";
import { shiftRows } from "./shiftRows.js";
import { substituteBytes } from "./substituteBytes.js";
import printMatrixAsHexStr from "../utils/printMatrixAsHexStr.js";

export const encryptionAES = (inputMatrix, key) => {
	let result = [];

	console.log("Input: ", printMatrixAsHexStr(inputMatrix));

	console.log("\nKey: ", printMatrixAsHexStr(key));

	console.log("\n================== initial round ===================");
	let state1 = addRoundKey(inputMatrix, key);
	console.log("Add round key: ", printMatrixAsHexStr(state1));

	for (let index = 0; index < 10; index++) {
		console.log("\n=================== Round: %d ===================", index + 1);
		let state2 = substituteBytes(state1);
		console.log("Substitution bytes: ", printMatrixAsHexStr(state2));

		let state3 = shiftRows(state2);
		console.log("\nShift rows: ", printMatrixAsHexStr(state3));

		let state4;
		if (index !== 9) {
			state4 = mixColumns(state3);
			console.log("\nMix columns: ", printMatrixAsHexStr(state4));
		} else {
			state4 = state3;
		}

		let state5 = addRoundKey(state4, key);
		console.log("\nAdd round key: ", printMatrixAsHexStr(state5));

		state1 = state5;
	}

	console.log("\n=================== Result ======================");

	console.log("After Encryption: ", printMatrixAsHexStr(state1));
};
