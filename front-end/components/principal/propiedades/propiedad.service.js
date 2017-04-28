(function(){
  angular
  .module('test')
  .service('propiedadService', propiedadService);

  function propiedadService(userService,logInService,$http){
   
    var publicAPI = {
      getPropiedad : _getPropiedad
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

  

    function _getPropiedad(){
        return $http.get('http://localhost:8000/api/propiedades');
    }

    function _putPropiedad(pPropiedad){
        return $http.put('http://localhost:8000/api/propiedades',pPropiedad);
    }

}

})();
