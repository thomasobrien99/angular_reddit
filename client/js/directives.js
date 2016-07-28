app.component('tpPost',{
	bindings: {
		post: '<'
	},
	controller: 'PostController',
	controllerAs: 'pC',
	templateUrl: '../partials/posts/post.html'
})

app.component('tpNav', {
	controller: 'NavController',
	controllerAs: 'nC',
	templateUrl: '../partials/nav.html'
})

app.component('tpSearch', {
	controller: 'SearchController',
	controllerAs: 'sC',
	templateUrl: '../partials/searchfilters.html'
})
