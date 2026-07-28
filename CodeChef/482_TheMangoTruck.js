function solve(input)
{
    let truck = input.trim().split("\n")
    let T = Number(truck[0])
    for(i= 1; i <= T; i++)
    {
        let [X, Y, Z] = truck[i].split(" ").map(Number)
        let mangoesLoad =parseInt((Z - Y) / X )   
        console.log(mangoesLoad)
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);







