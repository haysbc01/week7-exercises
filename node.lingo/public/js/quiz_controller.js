angular.module("lingoMod")
       .controller("quizCtrl", quizCtrl);

quizCtrl.$inject = ['$http'];


function quizCtrl ($http) {
  var quiz = this;

  quiz.count = 0;
  quiz.fail=false;
  quiz.correctAnswers = false;

  quiz.question = {
    words :[{word : 'one',
           answer : '',
           correctAnswer: '',
           correct : ''},
          { word : 'two',
           answer : '',
           correctAnswer: '',
           correct : ''},
           {word : 'three',
           answer : '',
           correctAnswer: '',
           correct : ''},
          { word : 'four',
           answer : '',
           correctAnswer: '',
           correct : ''},
           {word : 'five',
           answer : '',
           correctAnswer: '',
           correct : ''},
          { word : 'six',
           answer : '',
           correctAnswer: '',
           correct : ''},
           {word : 'seven',
           answer : '',
           correctAnswer: '',
           correct : ''},
          { word : 'eight',
           answer : '',
           correctAnswer: '',
           correct : ''},
           {word : 'nine',
           answer : '',
           correctAnswer: '',
           correct : ''},
          { word : 'ten',
           answer : '',
           correctAnswer: '',
           correct : ''},

  ]}
  quiz.greeting="Prepare to be quizzed!"

  quiz.translate = function (){

    $http({method:'POST',
    url: '/quiz',
      data : {
        word: quiz.question.words.map(function(word){
          return word.word
        }),
        from: 'en',
        to: quiz.lang
      }
  }).then(function(res){
      quiz.resData = res.data;

      quiz.quizLength = quiz.resData.length;
      // console.log(quiz.quizLength)
      quiz.correctAnswers = true;


      ////////////////////////////////////////////
      // CHECKING ANSWERS
      ////////////////////////////////////////////

      for (var i = 0; i < quiz.quizLength; i++){
        quiz.correct = false;
        quiz.Incorrect = false;
        // console.log('Correct Answer ' + quiz.resData[i].translatedText.toLowerCase() + ' Your Answer ' + quiz.question.words[i].answer)
        if (quiz.resData[i].translatedText.toLowerCase() == quiz.question.words[i].answer.toLowerCase()){
          // console.log('Awesome')
          quiz.question.words[i].correct = true;
          // quiz.question.words[i].correctAnswer = res.data[i].translatedText
        }else{
          // console.log('No Dice')
          quiz.question.words[i].correct = false;
          quiz.question.words[i].correctAnswer = res.data[i].translatedText;
          quiz.count += 1
          quiz.question.words[i].answer = '';


            // quiz.fail=true;
          }


        // console.log(quiz.resData[i].translatedText, quiz.question.words[i].word, quiz.question.words[i].answer)
      }
      // console.log(quiz.count)

      if(quiz.count > 2){
        alert('You Failed.');
      //   quiz.question.words[i].answer = '';

        // quiz.fail=true;
      }




    })
  }


////////////////////////////////////////////
// CHECKING ANSWERS
////////////////////////////////////////////

// for (var i = 0; i < quizLength; i++){
//   console.log(quiz.resData[i].translatedText)
//   console.log(quiz.question.words[i].word)
// }


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
