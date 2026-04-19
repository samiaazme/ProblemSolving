function solve(take){
    let yo = take.split(" ");
    let [Y, X] = yo.map(Number);
    let ans = Y - X;
    console.log(ans);
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
