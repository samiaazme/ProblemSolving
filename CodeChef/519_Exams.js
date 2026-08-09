function solve(input)
{
    let passed = input.trim().split("\n")
    let T = Number(passed[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y, Z] = passed[i].split(" ").map(Number)
        if ((X*Y)/2 <Z)
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



