function solve(input)
{
    let playlist = input.trim().split("\n")
    let T = Number(playlist[0])
    for(i= 1; i <= T; i++)
    {
        let [X, Y, Z] = playlist[i].split(" ").map(Number)
        if(X + Y <= Z)
        {
            console.log("2")
        }
        else if(X <= Z)
        {
            console.log("1")
        }
        else{
            console.log("0")
        }
        
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);














