'use strict';
process.stdin.setEncoding("utf8");

let lines = []; 
let reader = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

reader.on("line", (line) => {
	lines.push(line);
});
reader.on("close", () => {
    let abc = lines[0].split(" ");
    let a = parseInt(abc[0], 10), b = parseInt(abc[1], 10), c = parseInt(abc[2], 10);
    console.log([a, b, c].sort((a, b) => (a - b))[1]);
});