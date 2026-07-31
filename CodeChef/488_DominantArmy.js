function solve(input)
{
    let army = input.trim().split("\n")
    let T = Number(army[0])
    for(i= 1; i <= T; i++)
    {
        let [NA, NB, NC] =  army[i].split(" ").map(Number)
        if (NA > NB + NC)
        {
            console.log("Yes")
        }
        else if (NB > NA + NC)
        {
            console.log("Yes")
        }
        else if (NC > NA + NB)
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








