// Cricket World Cup Qualifier

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', (input) => {
  const x = parseInt(input);
  // Write your code here
    if (x >= 12){
        console.log("Yes");
    }
    else {
        console.log("No");
    }
  readline.close();
});