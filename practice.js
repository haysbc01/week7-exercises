var Numbers = [1,2,3,4]
// var i = 0;
//
// while(Numbers[i]){
//   console.log(Numbers[i]*2);
//   i++;
// }



// function timesTwo (nums){
//   var numsArr = []
//   for(var i = 0; i<nums.length; i++){
//     numsArr.push(nums[i]*2);
//   }
//   return numsArr;
// };
//
// console.log(timesTwo([1,2,3,4]));

function (timesTwo){
  return element*2
}

Numbers = Numbers.map(timesTwo);
console.log(Numbers)

// Numbers = Numbers.map(function(num){
//   return num*2;
// })
// console.log(Numbers)








// var count = 0;
//
// function countBirds(){
//   count += 1;
//   return count + 'birds';
// }
//
// function countDogs (){
//   count += 1;
//   return count + 'dogs';
// }

// birds = outerFunction()
//
// function outerFunction (){
//   var count = 0;
//   function innerFunction (){
//     count ++;
//     console.log('called ' + count + ' times')
//   }
//   return innerFunction
// }
//
// // birds = outerFunction
// // dogs = outerFunction
//
// birds();
// birds();
// birds();
