function solve(ticket)
{
    let concert = ticket.trim().split("\n")
    let T = Number(concert[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(concert[i])
        if ( 4* X <= 1000 ){
            console.log("YES")
        }
        else {
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