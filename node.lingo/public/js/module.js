angular.module("lingoMod", ['ngRoute'])
  .config(Config);

Config.$inject = ['$routeProvider'];

function Config($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/html/translate.html', // THIS IS THE SERVER ROUTE
      controller: 'lingoCtrl',
      controllerAs: 'lingo'
    })
    .when('/quiz', {
      templateUrl: '/html/quiz.html', // THIS IS THE SERVER ROUTE
      controller: 'quizCtrl',
      controllerAs: 'quiz'
    })
    .when('/progress', {
      templateUrl: '/html/progress.html', // THIS IS THE SERVER ROUTE
      controller: 'progressCtrl',
      controllerAs: 'progress'
    })


    // the `when` method is roughly the angular routing equivalent to app.get
}