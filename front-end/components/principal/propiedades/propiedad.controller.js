(function(){
  angular
    .module('test')
    .controller('propiedadController', propiedadController);
    function propiedadController(propiedadService,userService,$scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var propiedadCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        var propVentas = propiedadService.getPropiedad().success(function(data){propiedadCtrl.propiedades = data;});
        var usuarios = userService.getUsers().success(function(data){propiedadCtrl.users = data;});
      }init();
  


    propiedadCtrl.ownedBy = function (){

      if (propVentas.name == propiedadCtrl.propiedad) {
            if(usuarios.coins >= propVentas.price){
                var result = usuarios.coins - propVentas.price;
                return result;
            }else{
                alert('Don´t have enough money');
             
          }
        }
      }
      
      }
    }
      
     //se establece un objeto de angular normal

)();
