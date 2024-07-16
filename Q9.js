//Write a function that filters out even numbers from an array.
function filterNumbers(arr){
    let size = arr.length;
    let odd = []; 
    for(let i=0; i<size; i++){
        if(arr[i] % 2 != 0){
            odd.push(arr[i]);
        }
    }
    return odd;
}

let arr = [2,0,3,5,7,8,9,6];
let ans = filterNumbers(arr);
for(let i=0; i<ans.length; i++){
    console.log(ans[i]);
}