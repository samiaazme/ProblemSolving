function solve(time)
{
    let aseNaki = time.trim().split("\n")
    let T = Number(aseNaki[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = aseNaki[i].split(" ").map(Number)
        if(X > Y)
            console.log("YES")
        else{
            console.log("NO")
        }
        
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);






