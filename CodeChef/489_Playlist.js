function solve(input)
{
    let playlist = input.trim().split("\n")
    let T = Number(playlist[0])
    for(i= 1; i <= T; i++)
    {
        let [N, X] = playlist[i].split(" ").map(Number)
        let ans = parseInt(N/(X * 3))
            console.log(ans)
        
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);











