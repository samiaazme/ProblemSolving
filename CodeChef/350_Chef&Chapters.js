function solve(input)
{
    let chap = input.trim().split("\n")
    let T = Number(chap[0])
    for(let i = 1; i <= T; i++)
    {
        let[X, Y, Z] = chap[i].split(" ").map(Number)
        let ans = X * Y * Z;
        console.log(ans)
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

