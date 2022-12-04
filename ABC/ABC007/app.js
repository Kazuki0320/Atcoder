function main(input) {
	const result = input-1;
	console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split(" "));
