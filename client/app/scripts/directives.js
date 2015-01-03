'use strict';
angular.module('myDirectives', []).directive('beforeSignTop', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/topBeforeSign.html'
  };
}).directive('afterSignTop', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/topAfterSign.html'
  };
}).directive('search', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/search.html'
  };
}).directive('myFooter', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/footer.html'
  };
});
