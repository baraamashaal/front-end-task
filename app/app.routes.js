angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(($stateProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/?filter',
        params: {
          filter: {
            value: '',
            squash: true,
          },
        },
        reloadOnSearch: false,
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        url: '',
        name: 'redirect',
        redirectTo: 'app',
      })
      .state({
        name: 'not-found',
        url: '*path',
        template: '<v-not-found-page></v-not-found-page>',
      });
  });
