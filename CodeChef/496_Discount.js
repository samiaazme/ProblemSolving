function solve(input)
{
    let discount = input.trim().split("\n")
    let T = Number(discount[0])
    for(i= 1; i <= T; i++)
    {
        let X = Number(discount[i])
        if(X*0.10 > 100)
        {
            console.log(X*0.10)
        }
        else{
            console.log("100")
        }
        
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);















