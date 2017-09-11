(() => {
  angular.module('module04')
    .controller('itemController', itemController);

  itemController.$inject = ['dataService', '$stateParams'];

  function itemController (dataService, $stateParams) {
    let ctrl = this,
        index = $stateParams.index;

    ctrl.item = dataService.getItem(index);
  }
})();
