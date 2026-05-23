function solve(waiting)
{
    let time = waiting.trim().split("\n")
    let T = Number(time[0])
    for (let i = 1; i <= T; i++)
    {
        let [K, X] = time[i].split(" ").map(Number)
        let remainDays = (K*7) - X
        console.log(remainDays)
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


