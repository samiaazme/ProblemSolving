function solve(input)
{
    let take = input.trim().split(" ").map(Number)
    let count = 0;
    for(let i = 0; i <= take.length-1; i++)
    {
        let val = take[i]
        if(val >= 10)
        {
            count++
        }
    }
    console.log(count)
    
}
// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);
