function main(input) {
    const a = input.split(/[\n]/).map(Number)
    console.log(a[0]-a[1])
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

//いっちい修正版
/*function Main(input) {  
	input = input.split("\n");

	//文字列から10進数に変換するときはparseIntを使います
	//出力
	console.log(parseInt(input[0], 10) - parseInt(input[1], 10));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8")); */