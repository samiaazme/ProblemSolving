function solve(input)
{
    let speciality = input.trim().split("\n")
    let T = Number(speciality[0])
    for(let i = 1; i <= T; i++)
    {
        let [A, B, C, D] = speciality[i].split(" ").map(Number)
        let firstTvCost = A - C 
        let secondTvCost = B - D
         if(firstTvCost > secondTvCost){
            console.log("Second")
         }
         else if(firstTvCost == secondTvCost)
         {
            console.log("Any")
         }
         else
         {
            console.log("First")
         }
        
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);



