(function () {
"use strict";

angular.module('common')
.service('signupService', signupService)
.directive('dishCheck', dishCheck);


signupService.$inject = ['$http'];
function signupService($http) {
  var service = this;

  let signupInfo = {
    first: '',
    last: '',
    email: '',
    phone: '',
    dish: '',
    dishName: ''
  },
      dishPictureLink = '';

  service.getInfo = () => {
    if (signupInfo.first == '') {
      return false;
    } else return signupInfo;
  }
  service.getPicture = () => {

    return dishPictureLink;
  }
  service.setInfo = (info) => {

    signupInfo = {
      first: info.first,
      last: info.last,
      email: info.email,
      phone: info.phone,
      dish: info.dish,
      dishName: signupInfo.dishName
    }
  }

  service.getDish = (modelValue) => {
    let dish = modelValue,
        url = {
          url: 'https://stark-harbor-78868.herokuapp.com/menu_items/' + dish + '.json',
          method: 'GET'
        };
    return $http(url).then((results) => {

      signupInfo.dishName = results.data.name;
      dishPictureLink = "./images/menu/" + results.data.category_short_name + "/" + results.data.category_short_name + ".jpg";
      return results;
    }, (error) => {
      service.error = true;
      return error;
    })
  }

}

dishCheck.$inject = ['$q', '$http', 'signupService'];

function dishCheck ($q, $http, signupService) {

  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {

      ctrl.$asyncValidators.dish = function(modelValue, viewValue) {

        let def = $q.defer();

        signupService.getDish(modelValue).then((result) => {
          if (result.status === 200) {
            def.resolve();
          } else {
            def.reject();
          }


        })

        return def.promise;
      };
    }
  };
};

})();
