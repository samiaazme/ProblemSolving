function solve(input)
{
    let explain = input.trim().split("\n")
    let [N , K] = explain[0].split(" ").map(Number)
    let count = 0;
    for(let i = 1; i <= N; i++)
    {
        let val = Number(explain[i])
        if(val % K == 0)
        {
            count++;
        }
    }
    
    console.log(count)
}
// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);