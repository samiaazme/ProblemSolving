function solve(input)
{
    let take = input.trim().split("\n")
    let T = Number(take[0])
    for(let i = 1; i <= T; i++)
    {
        let[X, Y] = take[i].split(" ").map(Number)
        if(X >= Y)
        {
            console.log("YES")
        }
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
