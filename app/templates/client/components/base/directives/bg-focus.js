'use strict';

angular.module('baseFramework')
  .directive('bgFocus', function () {
    return function(scope, element, attrs){
      scope.$watch(attrs.sgFocus, function(value){
        if(value) {
           element[0].focus();
        }
      });
    };
  });