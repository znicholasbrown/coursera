(() => {
  angular.module('module04')
    .controller('categoryController', categoryController);

  categoryController.$inject = ['dataService', '$stateParams'];

  function categoryController (dataService, $stateParams) {
    let ctrl = this,
        category = $stateParams.category;

    dataService.getItems(category).then(()=>{
      ctrl.items = dataService.items;
    }
    );

  }
})();
