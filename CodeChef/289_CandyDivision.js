function solve(input)
{
    let candy = input.trim().split("\n")
    let T = Number(candy[0])
    for(let i = 1; i <= T; i++)
    {
        let N = Number(candy[i])
        if (N % 3 == 0)
        console.log("YES")
        else
        {
            console.log("NO")
        }
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
