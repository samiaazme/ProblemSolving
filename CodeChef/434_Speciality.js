function solve(input)
{
    let speciality = input.trim().split("\n")
    let T = Number(speciality[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y, Z] = speciality[i].split(" ").map(Number)
        if(X > Y && X > Z)
        {
           console.log("Setter") 
        }
        else if(Y > X && Y > Z)
        {
            console.log("Tester")
        }
        else
        {
            console.log("Editorialist")
        }
    }
    
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);

