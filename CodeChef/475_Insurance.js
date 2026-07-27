function solve(input)
{
    let insurance = input.trim().split("\n")
    let T = Number(insurance[0])
    for(i= 1; i <= T; i++)
    {
        let [X, Y] = insurance[i].split(" ").map(Number)
        if(X > Y)
        {
            console.log(Y)
        }
        else
        {
            console.log(X)
        }
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);





