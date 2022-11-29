function main(input) {
	//分割代入の書き方
	//配列の要素やオブジェクトのプロパティを分解して、変数や定数に代入する方法
	let [a, b] = input;

	a = Number(a);
	b = Number(b);

	console.log(Math.max(a, b));
}

main(require("fs").readFileSync("/dev/stdin", "utf8").split(" "));