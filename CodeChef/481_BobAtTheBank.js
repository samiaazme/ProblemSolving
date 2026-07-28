function solve(input)
{
    let bank = input.trim().split("\n")
    let T = Number(bank[0])
    for(i= 1; i <= T; i++)
    {
        let [W, X, Y, Z] = bank[i].split(" ").map(Number)
        let bankBalanceIs = W + (X - Y) * Z     
        console.log(bankBalanceIs)
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);






