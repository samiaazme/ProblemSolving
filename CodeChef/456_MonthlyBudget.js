function solve(input)
{
    let budget = input.trim().split("\n")
    let T = Number(budget[0])
    for(let i = 1; i <= T; i++)
    {
        let[X, Y] = budget[i].split(" ").map(Number)
        if(X >= Y*30)
        {
            console.log("YES")
        }
        else
        {
            console.log("NO")
        }
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);



