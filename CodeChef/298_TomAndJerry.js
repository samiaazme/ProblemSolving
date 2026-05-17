function solve(input)
{
    let chase = input.trim().split("\n")
    let T = Number(chase[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = chase[i].split(" ").map(Number)
        if ( X >= Y){
            console.log("NO");
        }
        else {
            console.log("YES")
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
