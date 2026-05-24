function solve(points)
{
    let mana = points.trim().split("\n")
    let T = Number(mana[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = mana[i].split(" ").map(Number)
        // let canDoAttacks = Math.trunc(Y / X) 
        let canDoAttacks = Math.floor(Y / X)
        // let canDoAttacks = parseInt(Y / X)
        // let canDoAttacks = (Y / X) | 0
        
    // any of the above methods are correct for cutting off the values after decimal point.
        
        console.log(canDoAttacks)
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





