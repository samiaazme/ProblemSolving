// Lucky Seven

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', (input) => {
    var S = String(input);
    console.log(S[6]);
  readline.close();
});