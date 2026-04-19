function solve(input){
    let str = input.trim().split("\n");
    let T = str[0];
    for(let i = 1; i <= T; i++){
        let [X, N] = str[i].split(" ").map(Number);
        let v = (X / 10) * N;
    console.log(v);
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