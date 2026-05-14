function solve(input)
{
    let ride = input.trim().split("\n")
    let T = Number(ride[0])
    for (let i=1; i <= T; i++)
    {
        let[X,H] = ride[i].split(" ").map(Number)
        if(X >= H)
        console.log("YES")
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