import { createInterface } from "readline";
import { decryptionAES } from "./scripts/decryptionAES.js";
import { encryptionAES } from "./scripts/encryptionAES.js";
import { convertAsMatrix } from "./utils/covertAsMatrix.js";

const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Enter the message (128-bit hexadecimal format): ", (message) => {
	rl.question("Enter the key (128-bit hexadecimal format): ", (aseKey) => {
		const inputMatrix = convertAsMatrix(message);
		const key = convertAsMatrix(aseKey);

		console.log(inputMatrix, key);

		main(inputMatrix, key);

		rl.close();
	});
});

function main(inputMatrix, key) {
	encryptionAES(inputMatrix, key);
	decryptionAES(inputMatrix, key);
}

// const inputMatrix = [
// 	[0x32, 0x88, 0x31, 0xe0],
// 	[0x43, 0x5a, 0x31, 0x37],
// 	[0xf6, 0x30, 0x98, 0x7],
// 	[0xa8, 0x8d, 0xa2, 0x34],
// ];

// const key = [
// 	[0x2b, 0x28, 0xab, 0x9],
// 	[0x7e, 0xae, 0xf7, 0xcf],
// 	[0x15, 0xd2, 0x15, 0x4f],
// 	[0x16, 0xa6, 0x88, 0x3c],
// ];
