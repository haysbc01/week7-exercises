angular.module("lingoMod")
       .controller("progressCtrl", progressCtrl);

progressCtrl.$inject = ['$http'];


function progressCtrl ($http) {
  var progress = this;

  progress.greeting="Track Your Progress!"


//   lingo.translate = function (){

//     $http({method:'POST',
//     url: '/translate',
//       data : {
//         word: lingo.word,
//         from: 'en',
//         to: lingo.lang
//       }
//   }).then(function(res){
//       console.log(res.data);

//       lingo.resData = res.data.translatedText;
//       console.log(lingo.resData)
//     })
//   }

}
