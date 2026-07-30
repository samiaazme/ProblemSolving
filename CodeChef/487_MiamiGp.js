function solve(input)
{
    let flow = input.trim().split("\n")
    let T = Number(flow[0])
    for(i= 1; i <= T; i++)
    {
        let [X, Y] = flow[i].split(" ").map(Number)
        if (100*Y <= 107*X)
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










