function solve(input)
{
    let marks = input.trim().split("\n")
    let T = Number(marks[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = marks[i].split(" ").map(Number)
        if (X < Y || X == Y)
        {
            console.log(Y)
        }
        else
        {
            console.log(X)
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
