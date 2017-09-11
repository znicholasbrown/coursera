(() =>{
  'use strict';

  angular
    .module('module04', ['ui.router']).config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: "js/templates/mainTemplate.html"
      })
      .state('menu', {
        url: "/menu",
        templateUrl: "js/templates/menuTemplate.html",
        controller: "menuController as menu"
      })
      .state('menu.category', {
        url: "/category/{category}",
        templateUrl: "js/templates/categoryTemplate.html",
        controller: "categoryController as category"
      })
      .state('menu.category.item', {
        templateUrl: "js/templates/itemTemplate.html",
        controller: "itemController as item",
        params: {
          item: null,
          index: null
        }
      })
  };



})();
