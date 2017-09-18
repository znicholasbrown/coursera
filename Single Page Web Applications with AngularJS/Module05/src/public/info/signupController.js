(function () {
"use strict";

angular.module('public')
.controller('signupController', signupController);

signupController.$inject = ['signupService'];
function signupController(signupService) {
  var $ctrl = this;

  $ctrl.disherror = signupService.error;
  $ctrl.submit = () => {
    let info = {
      first: $ctrl.first,
      last: $ctrl.last,
      email: $ctrl.email,
      phone: $ctrl.phone,
      dish: $ctrl.dish
    }
    signupService.setInfo(info);
  }

  $ctrl.info = () => {
    return signupService.getInfo();
  }
}


})();
