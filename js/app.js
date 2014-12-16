var githubapp = angular.module('github', []);

githubapp.controller('GithubController', function($scope, GithubService){
 $scope.results = [];
 $scope.getData = function(){
  GithubService.getURL( $scope.text ).success( function( data ){
    console.log(data);
    console.log(data.length);
    if(data.items.length > 0){

      angular.forEach( data.items, function( users, index ){
        $scope.results.push( users );
        console.log( $scope.results);
      });
    }
    else {
        $scope.error="true";
      }  
        
     });
 }
});

 githubapp.factory('GithubService', function($http){
   var url =  "https://api.github.com/search/users";
   var Info = {};

   Info.getURL = function( query ){
      return $http.get( url, { params: { q: query } });
   };

   return Info;
 });



