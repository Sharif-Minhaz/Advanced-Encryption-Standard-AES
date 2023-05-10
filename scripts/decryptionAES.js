import { mixColumnMatrix } from "./mixColumns.js";
import { substituteBytes } from "./substituteBytes.js";

export const decryptionAES = (inputMatrix) => {
	substituteBytes("inverse", inputMatrix);
};
