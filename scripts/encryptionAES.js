import { mixColumns } from "./mixColumns.js";
import { shiftRows } from "./shiftRows.js";
import { substituteBytes } from "./substituteBytes.js";
import printMatrixAsHexStr from "../utils/printMatrixAsHexStr.js";

export const encryptionAES = (inputMatrix) => {
	console.log("Input: ");
	console.log(printMatrixAsHexStr(inputMatrix));

	console.log("\n=========== initial round ============")
	console.log("Add round key: ");

	console.log('\n============ 2nd round ============')
	let state2 = substituteBytes(inputMatrix);
	console.log("Substitution bytes: ");
	console.log(printMatrixAsHexStr(state2));

	let state3 = shiftRows(state2);
	console.log("\nShift rows: ");
	console.log(printMatrixAsHexStr(state3));

	let state4 = mixColumns(state3);
	console.log("\nMix columns: ");
	console.log(state4);

	console.log("\nAdd round key: ");
};
