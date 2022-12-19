let x = require("fs").readFileSync("/dev/stdin","utf8")
let t = x.trim()
console.log(t.charCodeAt(0) - 64)

/*[考え方]
・入力される値は文字(A~Eの５つ)
・入力された値が、何番目かを知りたい
→文字を数字に置き換える必要がある。
→アスキーコードを利用する。
 */
