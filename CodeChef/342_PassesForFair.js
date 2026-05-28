
function solve(fair)
{
    let pass = fair.trim().split("\n")
    let T = Number(pass[0])
    for(let i = 1; i <= T; i++)
    {
        let [N, K] = pass[i].split(" ").map(Number)

        if (N < K){
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