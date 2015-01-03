'use strict';

angular.module 'myDirectives', []

#before-top
.directive 'beforeSignTop', ()->
  restrict: 'E'
  replace: true
  templateUrl: 'views/topBeforeSign.html'

#after-top
.directive 'afterSignTop', ()->
  restrict: 'E'
  replace: true
  templateUrl: 'views/topAfterSign.html'

#after-top
.directive 'search', ()->
  restrict: 'E'
  replace: true
  templateUrl: 'views/search.html'

#footer
.directive 'myFooter', ()->
  restrict: 'E'
  replace: true
  templateUrl: 'views/footer.html'








