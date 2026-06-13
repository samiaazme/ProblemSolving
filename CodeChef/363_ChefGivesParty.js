function solve(burger)
{
    let khabo = burger.trim().split("\n")
    let T = Number(khabo[0])
    for(let i = 1; i <= T; i++)
    {
        let [N, X, K] = khabo[i].split(" ").map(Number)
        if((N*X) <= K)
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





