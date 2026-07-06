function solve(input)
{
    let mask = input.trim().split("\n")
    let T = Number(mask[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = mask[i].split(" ").map(Number)
        let a  = X*100
        let b = Y*10
        if(a < b)
        {
           console.log("Disposable") 
        }
        else
        {
            console.log("Cloth")
        }
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);
