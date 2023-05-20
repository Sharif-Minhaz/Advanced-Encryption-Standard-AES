import { createInterface } from "readline";
import { encryptionAES } from "./scripts/encryptionAES.js";
import { convertAsMatrix } from "./utils/covertMatrix.js";

const readLine = createInterface({
	input: process.stdin,
	output: process.stdout,
});

readLine.question("Enter the message (128-bit hexadecimal format): ", (message) => {
	readLine.question("Enter the key (128-bit hexadecimal format): ", (aseKey) => {
		const inputMatrix = convertAsMatrix(message);
		const key = convertAsMatrix(aseKey);

		main(inputMatrix, key);

		readLine.close();
	});
});

function main(inputMatrix, key) {
	encryptionAES(inputMatrix, key);
}