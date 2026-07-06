function solve(input)
{
    let temp = input.trim().split("\n")
    let T = Number(temp[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(temp[i])
        if( X > 20 )
        {
            console.log("HOT")
        }
        else
        {
            console.log("COLD")
        }
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);