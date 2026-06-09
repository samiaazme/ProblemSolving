function solve(input)
{
    let enroll = input.trim().split("\n")
    let T = Number(enroll[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = enroll[i].split(" ").map(Number)
        if(X < Y){
            let seat = Y - X
            console.log(seat)
        }
        else
        {
            console.log("0")
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
