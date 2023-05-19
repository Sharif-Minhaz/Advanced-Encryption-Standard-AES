export const convertAsMatrix = (str) => {
	const segments = str.match(/.{2}/g); // Divide the hex message into 2-digit segments
	const matrix = [];

	for (let col = 0; col < 4; col++) {
		const column = [];
		for (let row = 0; row < 4; row++) {
			const segment = segments[row * 4 + col]; // Calculate the index of the segment
			const decimalValue = parseInt(segment, 16); // Convert the segment from hex to decimal
			column.push(decimalValue);
		}
		matrix.push(column);
	}

	return matrix;
};

export const generateHexString = (matrix) => {
	let hexString = "";

	for (let col = 0; col < 4; col++) {
		for (let row = 0; row < 4; row++) {
			const hexSegment = matrix[row][col];
			hexString += hexSegment;
		}
	}

	return hexString;
};
