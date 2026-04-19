function solve(take){
    let value = take.trim().split(" ");
    let [A, B] = value.map(Number);
    // Mathematical solve
    // let theOutput = ((A + B) * 10)+1 ;
    let theOutput = (A + B) + "1";
    console.log(theOutput);
}



// Boilerplate (DO NOT TOUCH)
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (chunk) {
    inputString += chunk;
});
