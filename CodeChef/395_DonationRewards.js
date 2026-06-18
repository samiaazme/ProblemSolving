function solve(input)
{
    let go = input.trim().split("\n")
    let T = Number(go[0])
    for(let i = 1; i <= T; i++)
    {
        let X  = Number(go[i])
    
        if(X <= 3)
        {
            console.log("BRONZE")
        }
        else if(X > 3 && X <= 6){
            console.log("SILVER")
        }
        else
        {
            console.log("GOLD")
        }
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);













