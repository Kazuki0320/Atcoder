function main(input) {
	console.log(Math.floor((input / 2) + (input % 2)));
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split(" "));
