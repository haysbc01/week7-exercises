angular.module('countries')
  .controller('countriesController', countriesCtrl);

  countriesCtrl.$inject = ['$http'];

  function countriesCtrl ($http) {
    var countries = this;

    countries.greeting = 'Hello'

    countries.countries = function (){

      $http({method:'GET',
      url: '/countries',
    }).then(function(res){
      countries.data = res.data
    })
    }

// countries.countries = function(){
//
//     $http.get('/countries')
//       .then(function(res){
//         console.log(res);
//
//         countries.data = res.data
//       })
//     }

countries.findCountries = function(){
  $http({
    url: '/search',
    method: 'GET',
    params: {
      searchTerm : countries.search
    }
  }).then(function(res){
    console.log(res);
    countries.data = res.data
  })
}

countries.travelThere = function(country){
  country.hasTraveled = true;
  $http({
    url: '/travel',
    method: 'POST',
    data : country
  })
}

}
