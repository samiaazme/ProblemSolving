function eligible(input)

{
    let N = Number(input);
    if (N >= 6 && N <= 8)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
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
    eligible(inputString);
});