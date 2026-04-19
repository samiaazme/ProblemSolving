function solve(done)
{
    let pay = done.trim().split("\n");
    let T = pay[0];
    for (let i = 1; i<= T; i++)
    {
        let [X, Y] = pay[i].split(" ").map(Number);
        let totalAmountPay = X*Y;
        console.log(totalAmountPay);
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