function solve(input)
{
    let speciality = input.trim().split("\n")
    let T = Number(speciality[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = speciality[i].split(" ").map(Number)
        if(X < Y)
        {
           console.log("REPAIR") 
        }
        else if(Y == X )
        {
            console.log("ANY")
        }
        else
        {
            console.log("NEW PHONE")
        }
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);

