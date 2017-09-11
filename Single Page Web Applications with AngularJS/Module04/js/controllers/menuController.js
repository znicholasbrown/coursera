(() => {
  angular.module('module04')
    .controller('menuController', menuController);

  menuController.$inject = ['dataService'];

  function menuController (dataService) {
    let ctrl = this;


    dataService.getCategories().then(()=>{
      ctrl.categories = dataService.categories;
    }
    );

  }
})();
