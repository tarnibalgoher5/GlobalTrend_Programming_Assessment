//Write a function that takes a string and capitalizes 
//the first letter of each word in the string.

function capitalize(str){
    //using the javascript split function to split the words of a sentence 
    const eachWord = str.split('');
    const capitalizedSentence = eachWord.map(eachWord => eachWord.charAt(0).toUpperCase() + eachWord.slice(1));

    return capitalizedSentence.join('');
}

str = "hello! welcome to the global trend";
const ans = capitalize(str);
console.log(ans);