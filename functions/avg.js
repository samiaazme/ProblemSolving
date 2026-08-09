// Input = nums, sum, avg, i, n
// for(i =0; i <n ; i++)
// {
//     sum = sum+nums[i]
// }
// avg = sum / n
// Print avg
function solve (input)
{
    let n = input.trim().split(" ")
    let nums, sum = 0
    for(let i = 1; i <= n; i++)
    {
       sum = Number(sum + nums[i])
    }
    let avg = sum / n
    console.log(avg)
}


// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);