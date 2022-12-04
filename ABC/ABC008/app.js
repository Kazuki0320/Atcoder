function main(input) {
	//パターン1
	const [a, b] = input;
	let result = (b-a)+1;

	console.log(result);
	//パターン2
	const[n, m] = input;
	console.log(n - m + 1);
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split(" "));
