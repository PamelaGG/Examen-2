(function(){
  angular
    .module('test')
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('play',{
          url: '/play',
          templateUrl: 'components/principal/propiedades/propiedad.view.html',
          controller: 'propiedadController',
          controllerAs: 'propiedadCtrl'
        })
        .state('user',{
          url: '/user',
          templateUrl: 'components/principal/users/users.view.html',
          controller: 'userController',
          controllerAs: 'userCtrl'
        })
        .state('logIn',{
          url: '/logIn',
          templateUrl: 'components/principal/logIn/logIn.view.html',
          controller: 'logInController',
          controllerAs: 'logInCtrl'
        })

        $urlRouterProvider.otherwise('/user');
    }
})();

