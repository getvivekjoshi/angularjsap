var app = angular.module('plunker', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/:section?', {
    templateUrl: 'home.html',
    controller: 'mainController'
  })
  
  $routeProvider.otherwise({
    redirectTo: '/home'
  });

});

app.controller('mainController', function($routeParams, $location, $anchorScroll) {
  $location.hash($routeParams.section);
  $anchorScroll();
  $location.hash('');
});
app.run(function ($browser) {
  $browser.baseHref = function () { return "/" };
});