function solve(sum)
{
    let it = sum.trim().split("\n")
    let T = Number(it[0])
    for(let i = 1; i <= T; i++)
    {
        let [A, B, C] = it[i].split(" ").map(Number)

        let ans = (A + B)
        if (ans == C){
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