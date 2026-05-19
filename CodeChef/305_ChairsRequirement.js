function solve(chair)
{
    let need = chair.trim().split("\n")
    let T = Number(need[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = need[i].split(" ").map(Number)

        let buy = X - Y
        if (X < Y){
            console.log(0)
        }
        else
        {
            console.log(buy)
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