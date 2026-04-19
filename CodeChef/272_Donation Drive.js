function solve(value)
{
    let yee = value.trim().split("\n");
    let T = Number(yee[0]);
    for(let i = 1; i <= T; i++)
    {
        let [X, N] = yee[i].split(' ').map( Number);
        let ans = X - N ;
        console.log(ans);
    }
}



// Boilerplate (DO NOT TOUCH)
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (chunk) {
    inputString += chunk;
});

process.stdin.on('end', function () {
    solve(inputString);
});

