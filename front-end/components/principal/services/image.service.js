(function(){
  angular
  .module('test')
  .service('ImageService', ImageService);

  function ImageService($http){

    var cloudObj = {
      url:'https://api.cloudinary.com/v1_1/dkvpi190c/image/upload',
      data:{
        upload_preset: 's3fiserf',
        tags:'Any',
        context:'photo=test'
      }
    };

    var public_api = {
      getConfiguration:getConfiguration
    }
    return public_api;

    function getConfiguration(){
      return cloudObj;
    }


  }

})();
