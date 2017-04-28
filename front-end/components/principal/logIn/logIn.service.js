(function(){
  angular
  .module('test')
  .service('logInService', logInService);

  function logInService(userService,$http){
    var logIn = [];
    var publicAPI = {
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

  


  }
})();


