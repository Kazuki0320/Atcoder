function main(input) {
	let [a, b] = input;

	a = Number(a);
	b = Number(b);

	console.log(Math.max(a, b));
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split(" "));