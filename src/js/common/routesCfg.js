angular.module('mesgc')
.config(function($routeProvider, $locationProvider) { debugger;
	$routeProvider
		.when('/', {
			controller: 'homeCtrl',
			controllerAs: 'vm',
			templateUrl: '../home/home.html'
      // templateUrl: 'enc/homeView.html'
		})
		.otherwise({ redirectTo: '/' });
	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false
	// });
});
