function solve(input)
{
    let pages = input.trim().split("\n")
    let T = Number(pages[0])
    for(let i = 1; i <= T; i++)
    {
        let [N, M] = pages[i].split(" ").map(Number)
        let TotalWords = ( N * M );
            console.log(TotalWords);
        
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
