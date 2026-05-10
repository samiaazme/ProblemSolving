// your code goes here
function solve(value)
{
    let str = value.trim().split("\n");
    
    let [N, M] = str[0].split(" ").map(Number);
    
    let[X, Y] = str[1].split(" ").map(Number);
    
    let ans = ((N*X)+(M*Y));
    
    console.log(ans);
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