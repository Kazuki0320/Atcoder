function main(input) {
	let[x, y] = input;
	input  = parseInt(x, 10);
	input = parseInt(y, 10);

	console.log(Math.floor(y / x));
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split(" "));

/*[問題文に必要なこと]
・たこ焼き１つ作るのに必要な小麦粉の量:X
・今持っている小麦粉の量:Y
[考えること]
・ Y（高橋くんが持っている小麦粉）) / X個（たこ焼き) 
*/