function solve(done)
{
    // let input = Number(done);
    // if (input == 404)
    if (done == 404)
    {
    console.log ("NOT FOUND");
    }
    
    else
    {
        console.log("FOUND");
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
