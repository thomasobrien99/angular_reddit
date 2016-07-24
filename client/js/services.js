app.service('PostsService', function($http){
	return{
		getPosts: function(){
			return $http.get('/posts')
		}
	}
})




// app.service('InventoryService', function($http){
// 	return {
// 		//THIS COULD BE CLEANED UP TO EXIST IN ONE OBJECT
// 		searchTerm : '',
// 		searchType : '',
// 		orderPref: 'true',

// 		getInventory: function(){
// 		   return $http.get('/api/teas');
// 		},
// 		editItemQuantity: function(teaName, newQuant){
//             var body = {quantity: newQuant};
//             return $http.put('/api/teas/'+teaName, body);
// 		},
// 		changeSearchTerm: function(term, type){
// 			this.searchType = type;
// 			this.searchTerm = term;
// 		},
// 		changeOrderPref: function(orderPref){
// 			this.orderPref = orderPref;
// 		} 
// 	}
// })
