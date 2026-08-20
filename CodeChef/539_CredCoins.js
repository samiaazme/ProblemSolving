function solve(input)
{
    let coins= input.trim().split("\n")
    let T = Number(coins[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = coins[i].split(" ").map(Number)
        let ans = parseInt((X * Y) / 100)
        console.log(ans)
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);






