let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.trim().split(" ").map(r => parseInt(r, 10))

Number(lines[0]) % Number(lines[1]) === 0 ? console.log("YES") : console.log("NO");
