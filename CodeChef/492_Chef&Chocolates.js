function solve(input)
{
    let playlist = input.trim().split("\n")
    let T = Number(playlist[0])
    for(i= 1; i <= T; i++)
    {
        let [C, X, Y] = playlist[i].split(" ").map(Number)
        let ans = C - X
        let needToPay = ans * Y
            console.log(needToPay)
        
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);












