(function(){
  angular
    .module('test')
    .controller('userController', userController);
    function userController(userService,$state,ImageService,Upload,$mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userCtrl = this; //binding del controlador con el html, solo en el controlador
        userCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        userService.getUsers().success(function(data){userCtrl.users = data;});
      }init();


   
        var myFileStack = filestack.init('A98FoJmp8TtemZxMVUJHMz');
        userCtrl.showPicker = function (){
            myFileStack.pick({
            }).then(function(result) {
                biography = result.filesUploaded[0].url;
                return biography;
            });
        }


    
     userCtrl.preSave = function(){
        userCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userCtrl.cloudObj)
          .success(function(data){
            userCtrl.save(data.url);
          });
      }
     
     
     userCtrl.save= function(pPhoto,pbiography){
        var User ={
          code: userCtrl.code,
          name : userCtrl.name,
          nickName : userCtrl.nickName,
          coins: userCtrl.coins,
          image: pPhoto[0].url,
          bio: pbiography
        }

        userService.setUsers(User).success(function(data){
          console.log(data);

        $mdDialog.show(
        $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Sing up correctly')
        .textContent('')
        .ariaLabel('Left to right demo')
        .ok('OK')
      );

     //se establece un objeto de angular normal
    });
  } 

}})()


     