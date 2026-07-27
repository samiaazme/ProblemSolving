function solve(input)
{
    let battery = input.trim().split("\n")
    let T = Number(battery[0])
    for(i= 1; i <= T; i++)
    {
        let X = Number(battery[i])
        if(X <= 15)
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






