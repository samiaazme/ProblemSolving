function solve(done){
    let dies = done.trim().split("\n");
    let T = dies[0];
    for(let i = 1; i <= T; i++)
    {
        let X = Number(dies[i]);
        if (X == 6){
            console.log("YES");
        }
        else {
            console.log("NO");
        }
    }
}



// Boilerplate (DO NOT TOUCH)
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (chunk) {
    inputString += chunk;
});

process.stdin.on('end', function () {
    solve(inputString);
});