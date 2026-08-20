let arr = [4, 11, 19, 13];
let sum = 0;
let val;
for (let i = 0; i < arr.length; i++) {
  sum = 0;
  for (let j = 0; j < i + 1; j++) {
    val = arr[i];
    sum = sum + val;
  }
  console.log(sum);
}
