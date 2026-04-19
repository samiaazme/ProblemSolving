function solve(time)
{
    let work = time.trim().split("\n");
    let T = Number(work[0]);
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = work[i].split(" ").map(Number);
        // let ans = (X-Y)*(-1);
        let ans = Math.abs(X - Y);
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
