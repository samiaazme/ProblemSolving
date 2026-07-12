function solve(input)
{
    let assignment = input.trim().split("\n")
    let T = Number(assignment[0])
    for(i= 1; i <= T; i++)
    {
        let [X, Y, Z] = assignment[i].split(" ").map(Number)
        let a = X * Y
        let b = Z * 24 * 60
        if(a <= b)
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




