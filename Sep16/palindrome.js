


//ask the palindrome question
// a palindromee is a word that is the same forwards and backwards
// examples : racecar, mom, dad, noon, level
// hint ; split, reverse(), join ('')
//inoore casing, spaces, special



// let str ='';


let array = ['mom', 'dad','noon', 'string','error'];


// function isPalindrome(str) {
//     if( array == str ){
//         return 'true'
        
//     } //return true if str is a palindrome
//     else {
//         return'false'
//     }
//     // return false if it not

// };

// console.log(array.reverse.join.split(array));


////////////////////////////////////////


// function isPalindrome(str) {
//     const chars = str.split("") 
//     const reverseArray= chars.reverse()
//     const reverseSting= reverseArray.join("")
//     return str === reverseSting;

// }

// console.log(isPalindrome("racecar"));

///////////////////////////////////////

// function isPalinddrome(str){
//     const normalized = str.replace (/[^jddjwdejd/g,"").toLowerCase();
//     return str === str.split("").reverse().join("");
//     return normalized ===normalized.split("").reverse().join("")''

// }

// console.log(isPalinddrome("racear"));


///////

function isPalindrome(str) {
    const normalized = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return normalized === normalized.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // true


