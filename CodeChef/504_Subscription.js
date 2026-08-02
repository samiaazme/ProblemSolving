function solve(input)
{
    let subs = input.trim().split("\n")
    let T = Number(subs[0])
    for(let i = 1; i <= T; i++)
    {
        let [N, X] = subs[i].split(" ").map(Number)
        if (N%6 == 0)
        {
            console.log(N*X/6)
        }
        else
        {
            let val = parseInt(N/6 +1) * X
            console.log(val)
        }
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);

