function solve(chess)
{
    let time = chess.trim().split("\n")
    let T = Number(time[0])
    for(let i = 1; i <= T; i++)
    {
        let N = Number(time[i])
        let ans = (N * 60)/20
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