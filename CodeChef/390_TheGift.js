function solve(input)
{
    
    let [X, N, M]  = input.split(" ").map(Number)
    
    if((X + M) >= N)
        {
            console.log("YES")
        }
    else{
            console.log("NO")
        }
        
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);











