(() =>{
  'use strict';

  function dataService ($http) {
    let categoriesURL = {
          url: 'https://davids-restaurant.herokuapp.com/categories.json',
          method: 'GET'
        },
        service = this;

    service.getCategories = () => {
      return $http(categoriesURL).then((results) => {

        service.categories = results.data;
        }, (error) => {
          return error = true;
        });
    }

    service.getItem = (index) => {
      if(service.items) {
        return service.items[index];
      }
    }

    service.getItems = (category) => {
      let itemsURL = {
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + category,
        method: 'GET'
      };

      return $http(itemsURL).then((results) => {

        service.items = results.data.menu_items;

        }, (error) => {
          return error = true;
        })

    }

  }
  dataService.$inject = ['$http'];


  angular
    .module('module04')
    .service('dataService', dataService);



})();
