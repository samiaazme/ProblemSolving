function solve(input)
{
    let fever = input.trim().split("\n")
    let T = Number(fever[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(fever[i])
        if( X > 98 )
        {
            console.log("YES")
        }
        else
        {
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