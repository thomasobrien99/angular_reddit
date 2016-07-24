var app = angular.module('ShoppingCart', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/posts.html',
			controller: 'PostsController',
			controllerAs: 'pC'
		})
		.when('/posts/new', {
			templateUrl: 'partials/posts/new.html'
		})
		.when('/profile', {
			templateUrl: 'partials/profile.html'
		})
		.when('/login', {
			templateUrl: 'partials/login.html'
		})
		.otherwise({
			redirectTo: '/'
		})
	$locationProvider.html5Mode(true);
})