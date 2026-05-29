function solve(bidding)
{
    let winner = bidding.trim().split("\n")
    let T = Number(winner[0])
    for(let i = 1; i <= T; i++)
    {
        let [A, B, C] = winner[i].split(" ").map(Number)

        if (A > B && A > C){
            console.log("Alice")
        }
        else if (B > A && B > C)
        {
            console.log("Bob")
        }
        else
        {
            console.log("Charlie")
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
