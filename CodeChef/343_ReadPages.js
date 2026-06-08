function solve(read)
{
    let pages = read.trim().split("\n");
    let T = Number(pages[0]);
    for(let i = 1; i <= T; i++)
    {
        let [N, X, Y] = pages[i].split(" ").map(Number);
        let ans = X * Y;
        if( N <= ans )
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
