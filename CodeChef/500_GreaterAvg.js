function solve(input)
{
    let avg = input.trim().split("\n")
    let T = Number(avg[0])
    for(let i = 1; i <= T; i++)
    {
        let [A, B, C] = avg[i].split(" ").map(Number)
        let isGreater = (A + B) / 2;
        if (isGreater > C)
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
