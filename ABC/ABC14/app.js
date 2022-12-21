let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = (input.trim()).split("\n")

if(Number(lines[0]) % Number(lines[1]) === 0) console.log(0);
else console.log(Number(lines[1])- (Number(lines[0]) % Number(lines[1])));
