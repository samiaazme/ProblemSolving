function solve(input)
{
    let parbo = input.trim().split("\n")
    let T = Number(parbo[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(parbo[i])
        if (X+3 <= 10)
        {
            console.log("Yes")
        }
        else
        {
            console.log("No")
        }
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);


