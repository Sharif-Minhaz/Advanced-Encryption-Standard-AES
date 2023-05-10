import { decryptionAES } from "./scripts/decryptionAES.js";
import { encryptionAES } from "./scripts/encryptionAES.js";

const inputMatrix = [
	[0x17, 0xc4, 0xa7, 0x7e],
	[0x8f, 0xca, 0x3f, 0x0f],
	[0x63, 0x7c, 0x77, 0x7b],
	[0x92, 0x9d, 0x38, 0xf5],
];

function main() {
	encryptionAES(inputMatrix);
	decryptionAES(inputMatrix);
}

main();
