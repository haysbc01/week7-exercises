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
var vowels = []
var vowelCount = function(string){
  string = string.toLowerCase();

  for (var i = 0; i < string.length; i++){
    // console.log(string[i]);
    if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
      vowels.push(string[i])

    }
  }
  return vowels.length;
}

console.log(vowelCount('All cows eat grass'));
