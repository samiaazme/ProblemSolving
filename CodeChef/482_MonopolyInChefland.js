function solve(input) {
  let monoplay = input.trim().split("\n");
  let T = Number(monoplay[0]);
  for (i = 1; i <= T; i++) {
    let [R1, R2, R3] = monoplay[i].split(" ").map(Number);
    if (R1 > R2 + R3) {
      console.log("Yes");
    } else if (R2 > R1 + R3) {
      console.log("Yes");
    } else if (R3 > R1 + R2) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

// Boilerplate for JS
const fs = require("fs");

const input = fs.readFileSync(0, "utf8");

solve(input);
