// Input n, sum = 0
// for loop (i = 0; i < n..length; i++)
// {
//     if (n[i]%2==0)
//         { 
//             sum = sum + i
//         }
// Print sum 

function solve (input)//'2 5 4 8 9'
{
    let n = input.trim().split(" ").map(Number);
    let sum = 0;
    for(let i = 0; i < n.length ; i++)
    {
        if(n[i] % 2 == 0)
        {
            sum = sum + n[i];
        }
    }
    console.log(sum);
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);//'2 5 4 8 9'