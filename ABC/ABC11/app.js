function main(input) {
	let n = Number(input)

	console.log(n < 12 ? ++n : 1)
}

main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
