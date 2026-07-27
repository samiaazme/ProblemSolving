function solve(input)
{
    let plane = input.trim().split("\n")
    let T = Number(plane[0])
    for(i= 1; i <= T; i++)
    {
        let [X, Y, Z] = plane[i].split(" ").map(Number)
        let check = X * 10
        if(check >= Y)
        {
            let maxMoney = Y * Z
            console.log(maxMoney)
        }
        else
        {
            let planeMoney = check * Z
            console.log(planeMoney)
        }
    }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);







