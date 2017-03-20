angular.module("lingoMod")
       .controller("lingoCtrl", lingoCtrl);

lingoCtrl.$inject = ['$http'];


function lingoCtrl ($http) {
  var lingo = this;

  lingo.greeting="Welcome to Say 'Hello!'"


  lingo.translate = function (){

    $http({method:'POST',
    url: '/translate',
      data : {
        word: lingo.word,
        from: 'en',
        to: lingo.lang
      }
  }).then(function(res){
      console.log(res.data);

      lingo.resData = res.data.translatedText;
      console.log(lingo.resData)
    })
  }

}


// mCtrl.page = function () {
//
//     // simulate a twilio POST request
//     // https://www.twilio.com/console/phone-numbers/incoming
//     var page = {
//         To: 'TwilioPhone',  // twilio number
//         From: 'BRETSA',     // BRETSA account, Boulder Regional Emergency Telephone Service Authority (BRETSA)
//         Body: mCtrl.textMsg
//     }
//
//     console.log("POST: /page", page);
//     $http.post('/page', page).then(
//         function success(response) {
//             console.log("POST:/page succeeded");
//         },
//         function failure(response) {
//             console.log("POST:/page error:", response);
//         }
//     )
// }
