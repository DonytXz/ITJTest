/*
Problem 1
Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
that solves the following problem; return a list of all the integers in the range [1, list length]
that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:
Input: nums = [1,1]
Output: [2]
*/


const numers  = [4,3,2,7,8,2,3,1];
const numers2  = [1,1];

const expectedResult = [5,6];
const expectedResult2 = [2];

let Test1FinalResults = [];
/*
Big o notation
Statements = 11
A = 6
C = 4
O = 3
*/

function findMissingNumber(numers){
    const numLength = numers.length;
    const encountered = [];
    //Set all encountered to false as a default values
    for (let i = 0; i < numLength; i++) {
        encountered[i] = false
    }
    //Search for the item && if exist on the param array set as true
    for (const num of numers) {
        encountered[num - 1] = true;
    }
    const missingNum = [];
    //If there are false values the element is not on the param array
    for (let i = 0; i < numLength; i++) {
      if (!encountered[i]) {
        missingNum.push(i + 1);
      }
    }
    return missingNum
}
function executeTest1(){
  const res = findMissingNumber(numers);
  const res2 = findMissingNumber(numers2);
  
  Test1FinalResults = [ { result: res, awnser: expectedResult}, {result: res2, awnser: expectedResult2} ]
}

export { Test1FinalResults, executeTest1 }
