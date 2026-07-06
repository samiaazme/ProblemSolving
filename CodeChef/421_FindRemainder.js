function solve(input)
{
    let hola = input.trim().split("\n")
    let T = Number(hola[0])
    for(let i = 1; i <= T; i++)
    {
        let [A, B] = hola[i].split(" ").map(Number)
        let remainderIs = A % B;
        console.log(remainderIs);
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);