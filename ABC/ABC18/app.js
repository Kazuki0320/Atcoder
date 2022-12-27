let lines=[];
let reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

reader.on('line', function (line) {
	lines.push(line);
});

reader.on('close', function () {
	const A = parseInt(lines[0]);
	const B = parseInt(lines[1]);
	const C = parseInt(lines[2]);
	const max = Math.max(A, B, C);
	const min = Math.min(A, B, C);
	[A, B, C].forEach(ele => {
		if (ele === max) {
			console.log('1');
		} else if (ele === min) {
			console.log('3');
		} else {
			console.log('2');
		}
	});
});
