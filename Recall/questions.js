let selectElementsStartingWithA = (array) => {
    return array.filter(item => item.charAt(0) == 'a');
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(item => item.charAt(0) == 'a' || item.charAt(0) == 'e' || item.charAt(0) == 'o' || item.charAt(0) == 'u' || item.charAt(0) == 'i');
}

let removeNullElements = (array) => {
    return array.filter(item => item != null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(item => item !== null && item !== false);
}

let reverseWordsInArray = (array) => {
    return array.map((element)=>{
        return element = element.split('').reverse().join('');
    });
}

let everyPossiblePair = (array) => {
    let result = [];
    let resultFinal = [];
    
    for (i =  array.length-1; i > 0;i--){
        let testArr = [];
        testArr.push(array[i]);
        for(y=0; y < array.length; y++){
            if(testArr[0] != array[y]){
                result.push(([testArr[0],array[y]]).sort());
            }
        }
    }
    
    result = [...new Set(result.map(JSON.stringify))];
    result = [...new Set(result.map(element => JSON.parse(element)))];
    return result; 
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return  array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    return string.slice(0,Math.round(string.length/2));
}

let makeNegative = (number) => {
    return -Math.abs(number);;
}

let numberOfPalindromes = (array) => {
    let result = 0;
    for (let i=0; i<array.length; i++) {
        let reverseItem = array[i].split('').reverse().join('');
        if(array[i] == reverseItem){
            result += 1;
        }
    }
    return result;
}

let shortestWord = (array) => {
    let testIndex = 0;
let test = 100;
array.forEach((element,index) => {
    if (element.length < test){
        test = element.length;
        testIndex = index;
    }

});
    return array[testIndex];
}

let longestWord = (array) => {
    let testIndex = 0;
    let test = 0;
    array.forEach((element,index) => {
        if (element.length > test){
            test = element.length;
            testIndex = index;
        }
    });
    return array[testIndex];
}

let sumNumbers = (array) => {
    let result = 0;
    array.map((element)=>{
        result += element;
    });
    return result;
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    let result = 0;
    array.forEach((element) => {
        result += element;
    });
    return result/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let result = [];
    let i=0;
    while (array[i]< 6){
        result.push(array[i]);
        i++;
    }
    return result;
}

let convertArrayToObject = (array) => {
    object = {};
    for (let i = 0; i < array.length; i += 2) {
      object[array[i]] = array[i+1];
      
    }
    return object;
}

let getAllLetters = (array) => {
    let result = [];
array.map((element) =>{
element.split('').forEach((item) =>{
    if(!result.includes(item)){
        result.push(item);
    }
    });
});
    return result.sort();
}

let swapKeysAndValues = (object) => {
    function objectFlip(obj) {
        const ret = {};
        Object.keys(obj).forEach(key => {
            ret[obj[key]] = key;
        });
        return ret;
    }
    let result = objectFlip(object);
    return result;
}

let sumKeysAndValues = (object) => {
    function addTogether(obj) {
        let ret = 0;
        Object.keys(obj).forEach(key => {
            ret += Number(key) + Number(obj[key]);
        });
        return ret;
    }
    let result = addTogether(object);
    return result;
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, "");
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if(month< 10){month = `0${month}`}
if(day<10){day = `0${day}`}
let formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

let getDomainName = (string) => {
    let host = string.split('@');
    host = host[1].split('.com');
    return host[0];
}

let titleize = (string) => {
    let result = '';
function wordsUpperCase(phrase){
    let words = phrase.split(' ');
    words.forEach((word, index)=>{
        if(word != 'the' && word != 'and'){
        words[index] = word.charAt(0).toUpperCase() + words[index].slice(1);
        console.log(word);
        }
    });
    return words;
}
let phraseArr = string.split('.');
phraseArr.forEach((element, index) => {
    if(element.charAt(0) === ' '){
        phraseArr[index] = ' ' + element.charAt(1).toUpperCase() + phraseArr[index].slice(2);
        phraseArr[index] = wordsUpperCase(phraseArr[index]);
    }else{
        phraseArr[index] = element.charAt(0).toUpperCase() + phraseArr[index].slice(1);
        phraseArr[index] = wordsUpperCase(phraseArr[index]);
    }
});
result = phraseArr.join().replace(/,/g, ' ');
result = result.replace(/  /g, '. ');
    return result;
}

let checkForSpecialCharacters = (string) => {
    let matchString = '';
let result;
matchString = string.match(/[^a-z A-Z 0-9]/g);
if (matchString == null){
  result = false;
}else{
  result = true;

}
    return result;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    function factorial (n) {
        let f = [];
        if (n == 0 || n == 1)
            return 1;
        if (f[n] > 0)
            return f[n];
            return f[n] = factorial(n-1) * n;
    }
    return factorial(number);
}

let findAnagrams = (string) => {
    function findAnagrams(word, anagram = '', anagrams = []){
        if(!word){
            anagrams.push(anagram);
            return;
        }
        for(var i=0; i < word.length; i++){
            anagram += word[i];
            findAnagrams(word.slice(0, i) + word.slice(i+1), anagram, anagrams);
            anagram = anagram.slice(0, anagram.length -1);
        }
        return [...new Set(anagrams.sort())];
    }
    return findAnagrams(string);
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5/9);
}

let letterPosition = (array) => {
    function convertToAlfPusition(arrs){
        arrs.map((arr, index)=>{
      if(arr.charCodeAt(0) >=97){
        arrs[index] = Number(arr.charCodeAt(0)-96);
      }else{
      arrs[index] = Number(arr.charCodeAt(0)+32-96);
      }
      });
      return arrs;
      }
    return convertToAlfPusition(array);
}
