function main(input) {
	const s = input.split(/[\n]/)
	const a = s[0].split(' ').map(Number)
	const b = s[1].split(' ').map(Number)
	const c = s[2].split(' ').map(Number)

	console.log((a[0]*a[1]+b[0]*b[1]+c[0]*c[1])/10)
}

main(require('fs').readFileSync("/dev/stdin","utf8"));

