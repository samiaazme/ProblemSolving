function solve(take)
{
    let tall = take.trim().split("\n")
    let T = Number(tall[0])
    
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = tall[i].split(" ").map(Number);
        if(X < Y)
        {
            console.log("B")
        }
        else
        {
            console.log("A")
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