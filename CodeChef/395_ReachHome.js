function solve(input)
{
    let go = input.trim().split("\n")
    let T = Number(go[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y]  = go[i].split(" ").map(Number)
    
        if(X*5 >= Y)
        {
            console.log("YES")
        }
        else{
            console.log("NO")
        }
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);












