function solve(episode)
{
    let more = episode.trim().split("\n")
    let T = Number(more[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(more[i])
        if(X > 24)
        {
            console.log("Yes")
        }
        else
        {
            console.log("No")
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




