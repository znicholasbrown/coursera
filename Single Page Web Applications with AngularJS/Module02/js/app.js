(() => {
  'use strict';  
  
  function listAdd (shoppingListService) {
    let addHandler = this;
    
    
    addHandler.add = (quantity, item) => {
      addHandler.item = "";
      addHandler.quantity = "";
      shoppingListService.addToNeedList(item, quantity)
    };
    
  };
  listAdd.$inject = ['shoppingListService'];
  
  function needView (shoppingListService) {
    let needHandler = this;
    
    needHandler.list = shoppingListService.getNeedList();
    needHandler.have = shoppingListService.getHaveList();
    
    needHandler.bought = (index) => shoppingListService.moveToHaveList(index);
    
    needHandler.remove = (index) => shoppingListService.removeFromNeedList(index);
  };
  needView.$inject = ['shoppingListService'];
  
  function haveView (shoppingListService) {
    let haveHandler = this;
    
    haveHandler.list = shoppingListService.getHaveList();
  };
  haveView.$inject = ['shoppingListService'];
  
  function shoppingListService () {
    let service = this; //Binds this to service.
    
    let needList = [{item: 'Milk', quantity: '2 liters'}, {item: 'Eggs', quantity: '1 dozen'}, {item: 'Rice', quantity: '5 kilos'}, {item: 'Coffee', quantity: '1 kilo'}, {item: 'Broccoli', quantity: '3 bags'}],
          haveList = [];
    
    service.error = "";
    
    service.addToNeedList = (item, quantity) => {
      //let 
      if (!item) {
        
      } else {
        needList.push({item: item, quantity: quantity}); 
      }
      
      
    };
    
    service.removeFromNeedList = (index) => {
      
      needList.splice(index, 1); //Removes an item (on an array) from the needList using a passed reference.
      
    };
    
    service.moveToHaveList = (index) => {
      let item = needList.splice(index, 1); //Removes and stores an item (on an array) from the needList using a passed reference.
      
      haveList.push(item[0]); //Appends the stored item to the haveList. 
    };
    
    service.getNeedList = () => {
      return needList; //Exposes needList.
    };
    
    service.getHaveList = () => {
      return haveList; //Exposes haveList.
    };
    
  };
  

  angular
    .module('module02', [])  
    .controller('needView', needView)
    .controller('haveView', haveView)
    .controller('listAdd', listAdd)
    .service('shoppingListService', shoppingListService);

})();