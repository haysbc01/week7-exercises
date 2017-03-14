console.log ('alphabetSoup');

var alphabetSoup = function(string){
  var arr = string.split('');
  var sort = arr.sort();
  var join = sort.join('').trim();
  return join;
}

console.log(alphabetSoup('hello'));
console.log(alphabetSoup('hello world'));


console.log('vowelCount');
// var vowels = []
// var vowelCount = function(string){
//   string = string.toLowerCase();
//
//   for (var i = 0; i < string.length; i++){
//     // console.log(string[i]);
//     if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
//       vowels.push(string[i])
//     }
//   }
//   return vowels.length;
// }
//
// console.log(vowelCount('All cows eat grass'));

var vowels = ['a','e','i','o','u']
var vowelCount = function(string){
  string = string.toLowerCase();
  num = 0

  for (var i = 0; i < string.length; i++){
    for(var v = 0; v <  vowels.length; v++){
      // console.log(string[i]);
    if(string[i] == vowels[v] || string[i] == vowels[v] || string[i] == vowels[v] || string[i] == vowels[v] || string[i] == vowels[v]){
      num += 1
    }
  }
  }
  return num;
}

console.log(vowelCount('All cows eat grass'));



console.log('Bonus: coinDeterminer');



var coinDeterminer = function (num){
  var coins = [1,5,7,9,11];
  var numCoins = 0;

while(num>0){
  for (var i = coins.length-1; i>=0; i--){
    if(num >= coins[i]){
      num = num - coins[i];
      numCoins += 1;
    }



    // if(num>=11){
    //   num = num - 11;
    //   numCoins = numCoins + 1;
    // } else if (num>=9){
    //   num = num -9;
    //   numCoins = numCoins + 1
    // } else if (num>=7){
    //   num = num -7;
    //   numCoins = numCoins + 1
    // }else if (num>=5){
    //   num = num -5;
    //   numCoins = numCoins + 1
    // }else {
    //   num = num -1;
    //   numCoins = numCoins + 1
    // }
    console.log(numCoins + " " + num+ ' ' + coins[i])
  }
console.log(numCoins)
}

}

coinDeterminer(16);
coinDeterminer(25);
coinDeterminer(27);
coinDeterminer(14);
