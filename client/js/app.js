var app = angular.module('Angular_Reddit', ['auth0', 
																					'angular-storage',
																				  'angular-jwt',
																					'ngRoute', 
																					'ui.bootstrap'])

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/posts.html',
			controller: 'PostsController',
			controllerAs: 'pC'
		})
		.when('/posts/new', {
			templateUrl: 'partials/posts/new.html',
			controller: 'NewPostController',
			controllerAs: 'npC',
			//requiresLogin: 'true'
		})
		.when('/profile', {
			templateUrl: 'partials/home.html',
			requiresLogin: 'true'
		})
		.when('/login', {
			templateUrl: 'partials/home.html'
		})
		.otherwise({
			redirectTo: '/'
		})
	$locationProvider.html5Mode(true);
})
app.config(auth0)


function auth0(authProvider){
		//Configure Auth0 with credentials
		authProvider.init({
		    domain: 'thomasobrien99.auth0.com',
   		  clientID: '4Y1U5J3iXGcTyxmNvjkycuoA8n64c7rY',
   		  loginUrl: '/login'
		});

		// CODE FROM AUTH0: 
		// Called when login is successful
		authProvider.on('loginSuccess', ['$location', 'profilePromise', 'idToken', 'store', '$rootScope',
		  function($location, profilePromise, idToken, store, $rootScope) {
		    // Successfully log in
		    // Access to user profile and token
		    profilePromise.then(function(profile){
		      // profile
		      // debugger
		      console.log("hello!!!!")
		      store.set('profile', profile);
		      store.set('token', idToken);
		      $rootScope.watch = true;

		    });
		    $location.url('/'); // location after login.
		  }]);

		//Called when login fails
		authProvider.on('loginFailure', function() {
		  // If anything goes wrong
		});
	}
	function checkToken($rootScope, auth, store, jwtHelper, $location){
		// Listen to a location change event
	  $rootScope.$on('$locationChangeStart', function() {
	    // Grab the user's token
	    var token = store.get('token');
	    // Check if token was actually stored
	    if (token) {
	      // Check if token is yet to expire
	      if (!jwtHelper.isTokenExpired(token)) {
	        // Check if the user is not authenticated
	        if (!auth.isAuthenticated) {
	          // Re-authenticate with the user's profile
	          // Calls authProvider.on('authenticated')
	          auth.authenticate(store.get('profile'), token);
	        }
	      } else {
	        // Either show the login page
	        // $location.path('/');
	        // .. or
	        // or use the refresh token to get a new idToken
	        auth.refreshIdToken(token);
	      }
	    }
	  });
	}

// app.run(['$rootScope', 'auth', 'store', 'jwtHelper', '$location', function($rootScope, auth, store, jwtHelper, $location) {
//   // Listen to a location change event
//   $rootScope.$on('$locationChangeStart', function() {
//     // Grab the user's token
//     var token = store.get('token');
//     // Check if token was actually stored
//     if (token) {
//       // Check if token is yet to expire
//       if (!jwtHelper.isTokenExpired(token)) {
//         // Check if the user is not authenticated
//         if (!auth.isAuthenticated) {
//           // Re-authenticate with the user's profile
//           // Calls authProvider.on('authenticated')
//           auth.authenticate(store.get('profile'), token);
//         }
//       } else {
//         // Either show the login page
//         // $location.path('/');
//         // .. or
//         // or use the refresh token to get a new idToken
//         auth.refreshIdToken(token);
//       }
//     }

//   });
// }])
// 	