(() => {
  'use strict';

  var lunchCheckController = ($scope, $filter, $injector) => {
    $scope.message = "";
    $scope.lunch = "";
    $scope.color = "#1C2833";
    $scope.verify = () => {
      var str = $scope.lunch,
          arr = str === "" ? [] : str.split(','),
          result = [];
      for ( var i = 0, len = arr.length; i < len; ++i ) {
        if ( arr[i] === "" || arr[i] === " " ) {
        } else result.push(arr[i]);
      }
      
      switch (true) {
        case result.length === 0:
          $scope.message = "Please enter data first.";
          $scope.color = "#C0392B";
          break;
        case result.length < 4:
          $scope.message = "Enjoy!";
          $scope.color = "#52BE80";
          break;
        case result.length >= 4:
        default:
          $scope.message = "Too much!";
          $scope.color = "#52BE80";
          break;
        
        }
    }
    
  };

  angular
    .module('module01', [])  
    .controller('lunchCheckController', lunchCheckController);
  
  lunchCheckController.$inject = ['$scope', '$filter'];
})();