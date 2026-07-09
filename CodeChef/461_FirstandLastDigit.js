function solve(input)
{
    let budget = input.trim().split("\n")
    let T = Number(budget[0])
    for(i= 1; i <= T; i++)
    {
        let N = budget[i]
        let firstDigit = Number(N[0])
        let lastDigit = Number(N[N.length-1])
        let sum = firstDigit + lastDigit
        
        console.log(sum)
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);




