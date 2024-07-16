/*
Write a function that takes an array and returns a new array with duplicates removed.
*/
function removeDuplicate(){
    let arraySize = arr.length;
    arr.sort();
    let newArray = [];
    //sorting the array first since its unsorted 
    for(let i=0; i<arraySize; i++){
            if(arr[i] != arr[i-1]){
            //adding the unique elements to the newArray now 
                newArray.push(arr[i]);
            }
    }
    return newArray
}

let arr = [1,0,2,3,5,1,0,8,2,3];
let ans = removeDuplicate(arr);
for(let i=0; i<ans.length; i++){
    console.log(ans[i]);
}