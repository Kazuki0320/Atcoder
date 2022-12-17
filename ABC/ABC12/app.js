function main(input) {
	const number = input.trim().split(' ');

	console.log(String(number[1]) + ' ' + String(number[0]));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));