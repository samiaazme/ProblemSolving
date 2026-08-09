
// Input =  i, sum
// declare : sum = 0
// for( i =  0; i < len(arr); i++)
// {
//     sum = sum + arr[i]
// }
// Print Sum

function solve (input)
{
    let arr = input.trim()
    let sum = 0
    for(let i = 0; i < arr.length; i++)
    {
       sum = sum + arr[i]
    }
    console.log(sum)
}


// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);