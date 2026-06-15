function solve(input)
{
    let go = input.trim().split("\n")
    let T = Number(go[0])
    for(let i = 1; i <= T; i++)
    {
        let [X,Y]  = go[i].split(" ").map(Number)
        let a = X * 3 
        let b = Y * 2
      
        if(a < b)
        {
            console.log(a)
            
        }
         
        
        else{
            console.log(b)
        }
        
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);









