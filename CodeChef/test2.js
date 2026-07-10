let arr = [1,2,3,4,5]
let hand = 0;
for(i = 0; i <= arr.length-1; i++)
{
    if(arr[i] % 2 == 0 )
    {
        hand++;
    }
    
}
console.log(hand);