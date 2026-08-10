function solve(input)
{
    let officeTime = input.trim().split("\n")
    let T = Number(officeTime[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = officeTime[i].split(" ").map(Number)
        let totalHour = (X*4)+Y
            console.log(totalHour)
        
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);




