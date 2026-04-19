function solve(input)
{
    let str = input.trim().split("\n");
    let T = Number(str[0]);
    for(let i = 1; i <= T; i++)
    {
        let [Y, X] = str[i].split(" ").map(Number);
        // console.log(Y, X);
        let solution = Y - X;
        console.log(solution);
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