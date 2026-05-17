function solve(input)
{
    let chocolate = input.split("\n")
    let T = Number(chocolate[0])
    for(let i = 1; i <= T; i++)
    {
        let N = Number(chocolate[i])
        if(N%2 != 0)
        {
            console.log("No")
        }
        else
        {
            console.log("Yes")
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