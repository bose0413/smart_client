function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'HomeCtrl as vm',
      templateUrl: 'views/home/home.html',
      title: 'Home'
    });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;