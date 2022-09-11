function hasTargetSum(array, target) {
  for(i=0;i < array.length; i++){
    let sum = target-array[i]
    for(j= i+1; j < array.length; j++){
      if(array[j] === sum){
        return true
      }
    }
    return false;
    } 
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
Runtime; O(n^2)
space: O(n)
  */

/* 
   iterate through each number in the array
    for the current number identify the compiment that adds to the target (sum = target -num)
    iterate through the rest of the array
    check if any number is our complement
    if so return true
    if i reach the end of the array, return false
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
