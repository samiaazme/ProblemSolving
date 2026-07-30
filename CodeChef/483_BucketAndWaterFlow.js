function solve(input)
{
    let flow = input.trim().split("\n")
    let T = Number(flow[0])
    for(i= 1; i <= T; i++)
    {
        let [W, X, Y, Z] = flow[i].split(" ").map(Number)
        if (W + Y * Z > X)
        {
            console.log("overFlow")
        }
        else if (W + Y * Z < X)
        {
            console.log("Unfilled")
        }
        else
        {
            console.log("filled")
        }
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);









