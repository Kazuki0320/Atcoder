let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.trim().split("\n")

lines[0].length > lines[1].length ? console.log(lines[0]) : console.log(lines[1]);