function solve(take)
{
    let str = take.split("\n");
    let T = Number(str[0]);
    for(let i = 1; i <= T; i++)
    {
        let X = Number(str[i]);
        if(X <= 10)
        {
            console.log("YES");
        }
        else{
            console.log("NO");
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
