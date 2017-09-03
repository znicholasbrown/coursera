(() => {
  'use strict';

  function menuSearch (mainService) {
    let handler = this;

    handler.search = (search) => {
      mainService.getMenu(search);
    }

  }
  menuSearch.$inject = ['mainService'];

  function menuDisplay (mainService) {
    let handler = this;

    handler.menu = mainService.returnMenu();
    handler.remove = (index) => {
      mainService.removeItem(index);
    }
  }
  menuDisplay.$inject = ['mainService'];

  function mainService ($http) {
    let urlObj = {
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
          method: 'GET'
        };

    let service = this,
        siftedMenu = [],
        menu;

    service.removeItem = (index) => {
      siftedMenu.splice(index, 1);
    }
    service.returnMenu = () => { //exposes the siftedMenu
      return siftedMenu;
    }
    service.getMenu = (search) => {
      let searchNormalized = search ? search.toLowerCase() : undefined;
      if (searchNormalized === undefined) { //if no search terms are defined, removes items from the siftedMenu
        siftedMenu.splice(0, siftedMenu.length);
      }
      if (siftedMenu.length > 0) { //resets the siftedMenu on each query
        siftedMenu.splice(0, siftedMenu.length);
      }
      for ( let i = 0; i < menu.length; ++i ) {
        if ( menu[i].description.indexOf(searchNormalized) > -1 ) {
          siftedMenu.push(menu[i]);
        }
      }
    }

    $http(urlObj).then((results) => {
        menu = results.data.menu_items;

      }, (error) => {
        return error = true;
      })
  }
  mainService.$inject = ['$http'];

  function titleCase () {
      return function(input) {
        input = input || '';
        return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      };
    }

  angular
    .module('module03', [])
    .controller('menuSearch', menuSearch)
    .controller('menuDisplay', menuDisplay)
    .service('mainService', mainService)
    .filter('titleCase', titleCase);
})();
