// Do the below programs in IIFE

// 1) Print odd numbers in an array.
 
    // var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // (function (arr) {
    //     arr.forEach(function (num) {
    //         if (num % 2 !== 0) {
    //             console.log(num);
    //         }
    //     });
    // })(numberArray);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2)Convert all the strings to title caps in a string array.

    // var stringArray = ["hi sir"];

    // (function (arr) {
    //     for (var i = 0; i < arr.length; i++) {
    //         arr[i] = arr[i].toLowerCase().split(' ').map(function (word) {
    //             return word.charAt(0).toUpperCase() + word.slice(1);
    //         }).join(' ');
    //     }
    // })(stringArray);

    // console.log(stringArray);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3)Sum of all numbers in an array.
    
    // var numberArray = [1, 2, 3, 4, 5];
    // var sum = (function (arr) {
    //     return arr.reduce(function (accumulator, currentValue) {
    //         return accumulator + currentValue;
    //     }, 0);
    // })(numberArray);
    // console.log(sum);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4)Return all the prime numbers in an array.

    // var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // var primeNumbers = (function (arr) {
    //     return arr.filter(function (num) {
    //         if (num <= 1) return false;
    //         for (var i = 2; i <= Math.sqrt(num); i++) {
    //             if (num % i === 0) return false;
    //         }
    //         return true;
    //     });
    // })(numberArray);

    // console.log(primeNumbers);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5)Return all the palindromes in an array.

    // var stringArray = ["level", "hello", "radar", "world", "civic"];
    // var palindromes = (function (arr) {
    //     return arr.filter(function (str) {
    //         var reversedStr = str.split('').reverse().join('');
    //         return str === reversedStr;
    //     });
    // })(stringArray);
    // console.log(palindromes);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6)Return median of two sorted arrays of the same size.

    // var arr1 = [1, 3, 5];
    // var arr2 = [2, 4, 6];

    // var median = (function (array1, array2) {
    //     var mergedArray = array1.concat(array2);
    //     var sortedArray = mergedArray.sort(function (a, b) {
    //         return a - b;
    //     });

    //     var length = sortedArray.length;
    //     var middle = Math.floor(length / 2);

    //     if (length % 2 === 0) {
    //         return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    //     } else {
    //         return sortedArray[middle];
    //     }
    // })(arr1, arr2);

    // console.log(median);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7)Remove duplicates from an array.
    
    // var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

    // var uniqueArray = (function (arr) {
    //     return arr.filter(function (value, index, self) {
    //         return self.indexOf(value) === index;
    //     });
    // })(arrayWithDuplicates);

    // console.log(uniqueArray);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8)Rotate an array by k times.
    // var originalArray = [1, 2, 3, 4, 5];
    // var k = 2;

    // var rotatedArray = (function (arr, rotations) {
    //     return arr.concat(arr.splice(0, rotations));
    // })(originalArray, k);

    // console.log(rotatedArray);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


