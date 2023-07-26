
/*
Problem 2
Given a list of integers nums and an integer target, write a function that solves the following
problem; return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the
same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/



const nums = [2,7,11,15];
const nums2 = [3,2,4];
const nums3 = [3,3];

const target = 9;
const target2 = 6;
const target3 = 6;

const expectedResult = [0,1];
const expectedResult2 = [1,2];
const expectedResult3 = [0,1];
let Test2FinalResults = [];

/*
Big o notation
Statements = 7
A = 3
C = 1
O = 1
*/

function findNumbers(arrNums, target){
    const numIndexMap = {};
    for(let i = 0; i < arrNums.length; i++){
        const element = arrNums[i];
        const subTraction = target - element;
        /*
        Find the key on the object if the subtraction
        of the current element - the target match with previus value
         */
        if (subTraction in numIndexMap) {
            return [numIndexMap[subTraction], i];
        }
        numIndexMap[element] = i;
    }
}

function executeTest2(){
    const res = findNumbers(nums,  target);
    const res2 = findNumbers(nums2,  target2);
    const res3 = findNumbers(nums3,  target3);
    Test2FinalResults = [
        {result: res, awnser: expectedResult}, 
        {result: res2, awnser: expectedResult2},
        {result: res3, awnser: expectedResult3}
    ]
}

export { executeTest2, Test2FinalResults }
