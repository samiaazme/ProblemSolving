//Input arr : [1, 5, 6, 8 ]
//Output arr : [1, 6, 12, 20]

let arr = [4, 11, 19, 13];
let sum = 0;
let val;
for(let i = 0; i < arr.length; i++)
{
    val = arr[i];
    sum = sum + val;
    console.log(sum);      
}
