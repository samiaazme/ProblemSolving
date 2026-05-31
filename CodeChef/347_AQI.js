function solve(input)
{
    let aqi = Number(input)
    
        if( aqi < 100 )
        {
            console.log("YES")
        }
        else
        {
            console.log("NO")
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