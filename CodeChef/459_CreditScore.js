function solve(input)
{
    let budget = input.trim().split("\n")
    
        let X = Number(budget)
        if(X >= 750)
        {
            console.log("YES")
        }
        else
        {
            console.log("NO")
        }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);



