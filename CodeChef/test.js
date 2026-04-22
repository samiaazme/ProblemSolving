function solve(input)
{
    let time = input.trim().split("\n");
    console.log(time.map(Number));
    // console.log(time);
    let T = Number(input[0]);
    // console.log(T);
    // for(let i = 1; i <= T; i++){
    //     let X = Number(time[i]);
    //     if (X >= 30 && X <= 60){
            
    //     console.log("YES"); 
            
    //     }
    //     else {
    //         console.log("NO");
    //     }
    // }
}

solve (`12
30
60
14
29
31
42
`)

// // Boilerplate for JS
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';

// process.stdin.on('data', function (chunk) {
//     inputString += chunk;
// });

// process.stdin.on('end', function () {
//     solve(inputString);
// });
