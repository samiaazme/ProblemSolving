function solve(input)
{
    let choloJai = input.trim().split("\n");
    let T = Number(choloJai[0]);
    for(let i = 1; i <= T; i++)
    {
        let [N, M] = choloJai[i].split(" ").map(Number);
        if(N > M)
        {
            let ans = N-M;
            console.log(ans);
        }
        else
        {
            console.log(0);
        }
        // if(N == M || N < M)
        // {
        //     console.log(0);
        // }
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
