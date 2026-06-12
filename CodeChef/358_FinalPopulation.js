function solve(input)
{
    let final = input.trim().split("\n")
    let T = Number(final[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y, Z] = final[i].split(" ").map(Number)
        let finalPopulation = (X-Y) + Z
            console.log(finalPopulation)
        
    }
}

// Boilerplate for JS

const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);





