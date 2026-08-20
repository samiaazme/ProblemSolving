// Input = nums, sum, avg, i, n
// for(i = 1; i <= n.length - 1; i++)
// {
//     nums = n[i]
//     sum = sum+nums
// }
// avg = sum / n.length
// Print avg
function solve (input)
{
    let n = input.trim().split(" ").map(Number)
    // console.log(n)
    // let nums
    let sum = 0
    for(let i = 0; i <= n.length - 1; i++)
    {
        // nums = n[i]
        sum = sum + n[i]
    }
    let avg = sum / n.length
    console.log(avg)
}


// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);