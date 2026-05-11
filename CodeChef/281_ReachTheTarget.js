function solve(todo)
{
    let match = todo.trim().split("\n")
    let T = Number(match[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = match[i].split(" ").map(Number)
        let runs = X-Y
        console.log(runs)
        
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