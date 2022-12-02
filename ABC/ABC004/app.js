function main(input) {
	input = parseInt(input, 10);

	let sum= 2*input;
	console.log(sum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split(" "));
/*[問題文に必要なこと]
・高橋くんはN円の借金をした。
・倍返しをするため、2*N円返済することを決意。

[考えること]
・高橋くんが返済する金額2*N円を出力する。
・Nは0<=N<=10の六乗
 */