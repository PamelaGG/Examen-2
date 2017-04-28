(function(){
  angular
    .module('test')
    .controller('logInController', logInController);
    function logInController(logInService,$state,userService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var logInCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       userService.getUsers().success(function(data){logInCtrl.users = data;});
      }init();

      logInCtrl.logIn = function(){

       
          if (logInCtrl.nickName == logInCtrl.users.nickName && logInCtrl.code == logInCtrl.users.code) {
            $state.go('play');
        }else{
          alert('Go and create your count')
        }

        
      }

     //se establece un objeto de angular normal

}})();


