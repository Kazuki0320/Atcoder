function main(input) {
	console.log(input + "pp");
}

main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
