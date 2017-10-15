/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,9,20]

*/
function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(value, index, array) {
        newArr[index] = value * 2;
    });
    return newArr;
}

// MORE ELEGANT SOLUTION
function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(value) {
        newArr.push(value * 2);
    });
    return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(value, index, array) {
        if (value % 2 === 0) {
            newArr[newArr.length] = value;
        }
    });
    return newArr;
}

//MORE ELEGANT SOLUTION
function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(value) {
        if (value % 2 === 0) {
            newArr.push(value);
        }
    });
    return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(value, index, array) {
        newArr[index] = array[index].slice(0,1) + array[index].slice(-1);
    });
    return newArr;    
}

//MORE ELEGANT SOLUTION
function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(value) {
        newArr.push(value[0] + value[value.length-1]);
    });
    return newArr;    
}

/*
Write a function called addKeyAndValue which accepts an array, a key, and a value and returns a the array passed to the function with the new key and value added for each variable 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    arr.forEach(function(val, i, array) {
        array[i][key] = value;
    });
    return arr;     
}

// MORE ELEGANT SOLUTION
function addKeyAndValue(arr,key,value){
    arr.forEach(function(val) {
        value[key] = value;
    });
    return arr;     
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    var result = {};
    var arr = str.split("");
    var allVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    function isVowel(letter) {
        return allVowels.indexOf(letter) >= 0;
    }
   
    arr.forEach(function(val, i, array) {
       // if val is a vowel
       
       if (isVowel(val)) {
           // convert all to lowercase
           val.toLowerCase();
           
           // if key already exist, increase count
           // else create key and equal 1
           if(result[val] > 0) {
                result[val]++;
           } else {
                result[val] = 1;   
           }
       }
    });
    
    return result;
}

// MORE ELEGANT SOLUTION
function vowelCount(str){
    var result = {};
    var arr = str.split("");
    var allVowels = "aeiou";
   
    arr.forEach(function(letter) {
       // if val is a vowel
       
       if (allVowels.indexOf(letter.toLowerCase())) {
           
           // if key already exist, increase count
           // else create key and equal 1
           if(letter in result) {
                result[letter]++;
           } else {
                result[letter] = 1;   
           }
       }
    });
    
    return result;
}
