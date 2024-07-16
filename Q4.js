//Write a function that checks if two given strings are anagrams of each other.

function checkAnagram(){
    if (str1.length !== str2.length){
        console.log("The length of the given strings is UNEQUAL hence not an anagram");
    }
    else{
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        //creating a hash map to store character frequencies
        const charCount = {};
        for (const char of str1) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        for (const char of str2) {
            if (!charCount[char]){
                //character not found in both strings 
                return false; 
            }
            charCount[char]--;
        }
        for (const char in charCount) {
            if (charCount[char] > 0){
                return false;
            } 
        }
        console.log(str1+" and "+ str2+" ANAGRAMS");
    }      
}
let str1 = "cat";
let str2 = "act";
checkAnagram(str1 , str2);

