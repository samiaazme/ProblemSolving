function solve(input)
{
    let water = input.trim().split("\n")
    let T = Number(water[0])
    for(let i = 1; i <= T; i++)
    {
        let N = Number(water[i])
        let ans = 2 * N
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


