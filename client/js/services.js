app.service('PostsService', function($http){
	return{
		getPosts: function(){
			return $http.get('/posts')
		},
		addPost: function(post){
			return $http.post('/posts', {post})
		},
		deletePost: function(id){
			return $http.delete('/posts/'+id)
		},
		vote: function(id, post){
			return $http.put('/posts/'+id, {post})
		},
		addComment: function(postID, comment){
			return $http.post('/posts/'+postID+'/comments', {comment})
		},
		getComments: function(postID){
			return $http.get('/posts/'+postID+'/comments');
		},
		deleteComment: function(postID, commentID){
			return $http.delete('/posts/'+postID+'/comments/'+commentID)
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
