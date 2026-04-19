function solve(listen)
{
    let hear = listen.trim().split("\n");
    let T = Number(hear[0]);
    for(let i = 1; i <= T; i++){
        let [X] = hear[i].split(" ").map(Number);
        
        if(X >= 67 && X <= 45000)
        {
            console.log("YES");
            
        }
        else
        {
            console.log("NO");
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