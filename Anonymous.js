// Do the below programs in anonymous function.

// 1) Print odd numbers in an array.
    //   let numbers = [1,2,3,4,5,6,7,8,9]
    //   numbers.filter(function(num){
    //     if (num%2!==0)
    //     console.log(num)
    //   });

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2)Convert all the strings to title caps in a string array.
   // var stringArray = ["hi sir"];
   // var titleCasedArray = stringArray.map(function (str) {
   //     return str.toLowerCase().split(' ').map(function (word) {
   //         return word.charAt(0).toUpperCase() + word.slice(1);
   //     }).join(' ');
   // });
   // console.log(titleCasedArray);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3)Sum of all numbers in an array.
    // var numberArray = [1, 2, 3, 4, 5];
    // var sum = numberArray.reduce(function (accumulator, currentValue) {
    //     return accumulator + currentValue;
    // }, 0);
    // console.log(sum);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4)Return all the prime numbers in an array.
    // var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // var isPrime = function (num) {
    //     if (num <= 1) return false;
    //     for (var i = 2; i <= Math.sqrt(num); i++) {
    //         if (num % i === 0) return false;
    //     }
    //     return true;
    // };
    // var primeNumbers = numberArray.filter(function (num) {
    //     return isPrime(num);
    // });
    // console.log(primeNumbers);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5)Return all the palindromes in an array.
    // var stringArray = ["level", "hello", "radar", "world", "civic"];
    // var isPalindrome = function (str) {
    //     var reversedStr = str.split('').reverse().join('');
    //     return str === reversedStr;
    // };
    // var palindromeArray = stringArray.filter(function (str) {
    //     return isPalindrome(str);
    // });
    // console.log(palindromeArray);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6)Return median of two sorted arrays of the same size.
    // var arr1 = [1, 3, 5];
    // var arr2 = [2, 4, 6];
    // var findMedian = function (arr1, arr2) {
    //     var mergedArray = arr1.concat(arr2);
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
    // };
    // var median = findMedian(arr1, arr2);
    // console.log(median);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7)Remove duplicates from an array.
    // var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
    // var removeDuplicates = function (arr) {
    //     return arr.filter(function (value, index, self) {
    //         return self.indexOf(value) === index;
    //     });
    // };
    // var arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
    // console.log(arrayWithoutDuplicates);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8)Rotate an array by k times.
    // var originalArray = [1, 2, 3, 4, 5];
    // var k = 3;
    // var rotateArray = function (arr, rotations) {
    //     return arr.concat(arr.splice(0, rotations));
    // };
    // var rotatedArray = rotateArray(originalArray, k);
    // console.log(rotatedArray);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

