function solve(input)
{
    let registration = input.trim().split("\n")
    let T = Number(registration[0])
    for(i= 1; i <= T; i++)
    {
        let [N, M, K] = registration[i].split(" ").map(Number)
        let a = M - K
        if(a >= N)
        {
            console.log("YES")
        }
        else
        {
            console.log("NO")
        }
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);




