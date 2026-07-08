function solve(input)
{
    let cholo = input.trim().split("\n")
    let T = Number(cholo[0])
    for(let i = 1; i <= T; i++)
    {
        let val = cholo[i]
        let sum = 0;
        for(u = 0; u <= val.length-1; u++)
        {
            let digit = Number(val[u])
            sum = sum + digit
        }
        console.log(sum)
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);


