/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
    var vowels = 'aeiou';
    return str.toLowerCase().split("").filter(function(letter) {
        return (vowels.indexOf(letter) === -1);
    }).toString().replace(/,/g, '');    
}

    console.log(removeVowels('Elie')); // ('l')
    console.log(removeVowels('TIM') );// ('tm')
    console.log(removeVowels('ZZZZZZ')); // ('zzzzzz')