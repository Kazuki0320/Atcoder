function main(input) {
    const a = input.split(/[\n]/).map(Number)
    console.log(a[0]-a[1])
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));