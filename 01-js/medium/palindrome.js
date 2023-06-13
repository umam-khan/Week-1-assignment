/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const Str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const cleanedStr =Str.replace(/\s/g, '');
  let n = cleanedStr.length, flag = 0;
  for(let i=0; i < Math.floor(n / 2);i++)
  {
    if(cleanedStr[i]==cleanedStr[n-i-1])
    {
      continue;
    }
    else{
      flag=1;
      break;
    }
  }
  return flag == 0;
}
const val = isPalindrome("race car");
console.log(val);
module.exports = isPalindrome;
