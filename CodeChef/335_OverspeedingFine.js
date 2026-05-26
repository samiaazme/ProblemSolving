function solve(speed)
{
    let fee = speed.trim().split("\n")
    let T = Number(fee[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(fee[i])
        if ( X <= 70 ){
            console.log("0")
        }
        else if ( X > 70  && X <= 100)
        {
            console.log("500")
        }
        else
        {
            console.log("2000")
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
