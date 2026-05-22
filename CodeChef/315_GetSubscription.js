function solve(subs)
{
    let it = subs.trim().split("\n")
    let T = Number(it[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(it[i])

        if ( X <= 30){
            console.log("NO")
        }
        else
        {
            console.log("YES")
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
