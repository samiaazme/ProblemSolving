function solve(input)
{
    let final = input.trim().split("\n")
    let T = Number(final[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y, Z] = final[i].split(" ").map(Number)
        let finalPopulation = (X-Y) + Z
            console.log(finalPopulation)
        
    }
}

// Boilerplate for JS
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (chunk) {
    inputString += chunk;
});

process.stdin.on('end', function () {
    solve(inputString);
});





