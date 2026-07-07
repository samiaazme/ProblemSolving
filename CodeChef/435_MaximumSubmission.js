function solve(input)
{
    let speciality = input.trim().split("\n")
    let T = Number(speciality[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(speciality[i])
        let ans = X * 2
        console.log(ans)
        
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);


