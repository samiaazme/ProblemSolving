function solve(input)
{
    let playlist = input.trim().split("\n")
    let T = Number(playlist[0])
    for(i= 1; i <= T; i++)
    {
        let [A, B, C, X] = playlist[i].split(" ").map(Number)
        if(A + B >= X)
        {
            console.log("YES")
        }
        else if(A + C >= X)
        {
            console.log("YES")
        }
        else if(B + C >= X)
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













