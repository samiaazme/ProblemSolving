function solve(input)
{
    let speciality = input.trim().split("\n")
    let T = Number(speciality[0])
    for(let i = 1; i <= T; i++)
    {
        let [N, M] = speciality[i].split(" ").map(Number)
        let n = N * 2
        let m = M * 4
        let ans = n + m
        
        console.log(ans) 
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);


