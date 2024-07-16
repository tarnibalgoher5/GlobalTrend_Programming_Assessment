//Write a function that takes a nested array and returns a flattened array.
function flattenArray(nestedArray) {
    let ans = [];
    for (let i=0; i<nestedArray.length; i++) {
        if (Array.isArray(nestedArray[i])) {
        //spread operator to flatten the nested arrays 
        //recursively calling the function 
            ans.push(...flattenArray(nestedArray[i])); 
        } 
        else {
            ans.push(nestedArray[i]);
        }
    }
    return ans;
}
let nestedArray = [1,2,[3,4],5];
const answer = flattenArray(nestedArray);
console.log(answer);

      
  