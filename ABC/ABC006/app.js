function main(input) {
	input = parseInt(input, 10);

	console.log((input % 3 == 0)? "YES" : "NO");
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split(" "));


/* [問題文に必要なこと]
・数字のNが与えられ、Nに3が含まれるor3で割り切れる場合:Yes
・それ以外:No

[考えること]
・if文だと処理が長くなるので、三項演算子を利用していく。
*/