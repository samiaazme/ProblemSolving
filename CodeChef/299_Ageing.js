function solve(input)
{
    let age = input.split("\n")
    let T = Number(age[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(age[i])
        let newAge = X - 10;
            console.log(newAge)
        
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