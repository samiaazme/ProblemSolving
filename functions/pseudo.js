// Input n, sum = 0
// for loop (i = 1; i <= n; i++)
// {
//     if (i%2==0)
//         { 
//             sum = sum + i
//         }
// Print sum 

function solve (input)
{
    let n = Number(input.trim());
    let sum = 0;
    for(let i = 1; i <= n; i++)
    {
        if(i % 2 == 0)
        {
            sum = sum + i;
        }
    }
    console.log(sum);
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);