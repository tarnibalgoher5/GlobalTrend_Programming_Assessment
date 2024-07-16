function capitalize(str){
    //using the javascript split function to split the words of a sentence 
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

str = "hello! welcome to the global trend";
let ans = capitalize(str);
console.log(ans);
