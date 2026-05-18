function solve(input)
{
    let best = input.trim().split("\n")
    let N = Number(best[0])
    for(let i = 1; i <= N; i++)
    {
        let [a, b, c] = best[i].split(" ").map(Number)
        if ( b > a && b < c ){
            console.log(b)
        }
        else if ( b < a && b > c )
        {
            console.log(b)
        }
        else if ( a > c && a < b ) {
            console.log(a)
        }
        else if ( a > b && a < c )
        {
            console.log(a)
        }
        else if ( c > a && c < b) {
            console.log(c)
        }
        else {
            console.log(c)
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