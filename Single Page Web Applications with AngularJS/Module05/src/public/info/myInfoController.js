(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['signupService'];
function myInfoController(signupService) {
  var $ctrl = this;

  $ctrl.info =  signupService.getInfo();
  $ctrl.picture =  signupService.getPicture();
}


})();
