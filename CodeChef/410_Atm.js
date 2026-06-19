function solve (input)
{
    let [X, Y] = input.split(" ").map(Number)
    if (X  > Y-0.5)
    {
        console.log(Y)
    }
    else
    {
        let a = X % 5
        let ans = (Y-X)-0.5
        if(a === 0)
        {
            console.log(ans)
        }
        else{
            console.log(Y)
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

